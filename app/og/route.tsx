import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "We Don't Just Build Teams. We Build Dynasties.";
  const sub = searchParams.get("sub") || "Elite fiber sales teams that outperform, outclose, and outdeliver.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "#0A0A0A",
          padding: "72px 80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Grid lines for depth */}
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          backgroundImage: "linear-gradient(rgba(245,200,66,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,200,66,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />

        {/* Gold glow orb top right */}
        <div style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,200,66,0.15) 0%, transparent 70%)",
          display: "flex",
        }} />

        {/* Bottom left glow */}
        <div style={{
          position: "absolute",
          bottom: "-60px",
          left: "200px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,200,66,0.08) 0%, transparent 70%)",
          display: "flex",
        }} />

        {/* Gold top line */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, transparent, #F5C842 40%, transparent)",
          display: "flex",
        }} />

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>

          {/* Label */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "28px",
          }}>
            <div style={{ width: "32px", height: "1px", background: "#F5C842", display: "flex" }} />
            <span style={{
              fontSize: "13px",
              letterSpacing: "0.22em",
              color: "#F5C842",
              textTransform: "uppercase",
              opacity: 0.8,
            }}>
              GS Marketing
            </span>
          </div>

          {/* Headline */}
          <div style={{
            fontSize: "64px",
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: "-0.01em",
            color: "#ffffff",
            marginBottom: "28px",
            maxWidth: "820px",
            textTransform: "uppercase",
          }}>
            {title}
          </div>

          {/* Sub */}
          <div style={{
            fontSize: "20px",
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.01em",
            lineHeight: 1.6,
            maxWidth: "600px",
            fontWeight: 300,
          }}>
            {sub}
          </div>
        </div>

        {/* Logo mark bottom right */}
        <div style={{
          position: "absolute",
          bottom: "72px",
          right: "80px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}>
          <div style={{
            width: "36px",
            height: "36px",
            background: "#F5C842",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "13px",
            fontWeight: 900,
            color: "#000",
            letterSpacing: "0.05em",
          }}>
            GS
          </div>
          <span style={{
            fontSize: "18px",
            letterSpacing: "0.1em",
            color: "#ffffff",
            textTransform: "uppercase",
            fontWeight: 700,
          }}>
            Marketing
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
