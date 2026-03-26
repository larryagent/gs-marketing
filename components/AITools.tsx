"use client";
import { useState } from "react";

const prompts = [
  "Elite door-to-door sales team in professional attire, fiber optic cables glowing, dramatic lighting, cinematic",
  "Motivational sales team huddle, golden hour lighting, urban backdrop, professional photography",
  "Sales rep closing a deal at a door, confident posture, suburban neighborhood, golden sunset",
];

export default function AITools() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function generate() {
    if (!prompt.trim()) return;
    setLoading(true);
    setImage(null);
    setError(null);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setImage(data.url);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Generation failed. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section style={{ background: "var(--mid)", padding: "120px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
        {/* Header */}
        <div className="reveal" style={{ marginBottom: "56px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
            <div style={{ width: "40px", height: "1px", background: "var(--gold)" }} />
            <span style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.2em", fontSize: "0.8rem", color: "var(--gold)" }}>
              AI-POWERED TOOLS
            </span>
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", lineHeight: 1, marginBottom: "16px" }}>
            Generate Your
            <span style={{ color: "var(--gold)" }}> Vision.</span>
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", maxWidth: "520px", lineHeight: 1.7 }}>
            Powered by fal.ai and Replicate. Generate cinematic images for your sales team, marketing materials, and recruiting campaigns.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", alignItems: "start" }}>
          {/* Controls */}
          <div className="reveal ai-panel">
            <label style={{ display: "block", fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.1em", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", marginBottom: "10px" }}>
              DESCRIBE YOUR IMAGE
            </label>
            <textarea
              className="apply-input"
              rows={4}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. Elite sales team dominating the fiber market, golden hour, cinematic..."
              style={{ resize: "none", marginBottom: "16px" }}
            />

            {/* Quick prompts */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", marginBottom: "10px", letterSpacing: "0.05em", textTransform: "uppercase" }}>Quick Prompts</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {prompts.map((p) => (
                  <button
                    key={p}
                    onClick={() => setPrompt(p)}
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.5)",
                      padding: "8px 12px",
                      textAlign: "left",
                      cursor: "pointer",
                      fontSize: "0.78rem",
                      lineHeight: 1.5,
                      transition: "all 0.2s",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLButtonElement).style.borderColor = "rgba(245,200,66,0.3)";
                      (e.target as HTMLButtonElement).style.color = "rgba(255,255,255,0.8)";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.08)";
                      (e.target as HTMLButtonElement).style.color = "rgba(255,255,255,0.5)";
                    }}
                  >
                    {p.length > 70 ? p.substring(0, 70) + "..." : p}
                  </button>
                ))}
              </div>
            </div>

            <button
              className="btn-gold"
              onClick={generate}
              disabled={loading || !prompt.trim()}
              style={{ width: "100%", textAlign: "center", opacity: loading || !prompt.trim() ? 0.6 : 1, cursor: loading ? "wait" : "pointer" }}
            >
              {loading ? "Generating..." : "Generate Image →"}
            </button>
          </div>

          {/* Output */}
          <div className="reveal reveal-delay-2 ai-output" style={{ minHeight: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {loading && (
              <div style={{ textAlign: "center" }}>
                <div className="spinner" />
                <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.3)", marginTop: "16px", letterSpacing: "0.05em" }}>
                  AI is working its magic...
                </p>
              </div>
            )}
            {!loading && !image && !error && (
              <div style={{ textAlign: "center", color: "rgba(255,255,255,0.15)" }}>
                <div style={{ fontSize: "3rem", marginBottom: "12px" }}>✦</div>
                <p style={{ fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Your image will appear here</p>
              </div>
            )}
            {error && (
              <div style={{ textAlign: "center", color: "#ff6b6b", padding: "20px" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "8px" }}>⚠</div>
                <p style={{ fontSize: "0.85rem" }}>{error}</p>
              </div>
            )}
            {image && (
              <img
                src={image}
                alt="AI Generated"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
