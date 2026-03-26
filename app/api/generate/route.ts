import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    if (!prompt) return NextResponse.json({ error: "Prompt required" }, { status: 400 });

    const FAL_KEY = process.env.FAL_API_KEY;
    const REPLICATE_TOKEN = process.env.REPLICATE_API_TOKEN;

    if (FAL_KEY) {
      const res = await fetch("https://fal.run/fal-ai/flux/schnell", {
        method: "POST",
        headers: {
          Authorization: "Key " + FAL_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt + ", professional photography, cinematic lighting, 8k ultra detailed",
          image_size: "landscape_16_9",
          num_inference_steps: 4,
          num_images: 1,
        }),
      });
      if (res.ok) {
        const d = await res.json();
        const url = d?.images?.[0]?.url;
        if (url) return NextResponse.json({ url, source: "fal" });
      }
    }

    if (REPLICATE_TOKEN) {
      const startRes = await fetch(
        "https://api.replicate.com/v1/models/black-forest-labs/flux-schnell/predictions",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + REPLICATE_TOKEN,
            "Content-Type": "application/json",
            Prefer: "wait",
          },
          body: JSON.stringify({
            input: {
              prompt: prompt + ", professional photography, cinematic lighting, 8k ultra detailed",
              aspect_ratio: "16:9",
              num_outputs: 1,
            },
          }),
        }
      );
      let result = await startRes.json();
      let attempts = 0;
      while (result.status !== "succeeded" && result.status !== "failed" && attempts < 30) {
        await new Promise((r) => setTimeout(r, 1000));
        const p = await fetch("https://api.replicate.com/v1/predictions/" + result.id, {
          headers: { Authorization: "Bearer " + REPLICATE_TOKEN },
        });
        result = await p.json();
        attempts++;
      }
      if (result.status === "succeeded" && result.output?.[0]) {
        return NextResponse.json({ url: result.output[0], source: "replicate" });
      }
    }

    return NextResponse.json({ error: "Generation failed. Please try again." }, { status: 500 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
