"use client";

interface PageHeroProps {
  label: string;
  title: string;
  highlight: string;
  sub: string;
}

export default function PageHero({ label, title, highlight, sub }: PageHeroProps) {
  return (
    <section style={{
      background: "var(--dark)",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
      padding: "64px 0 56px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Gold top line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }} />
      {/* Subtle glow */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(245,200,66,0.04) 0%, transparent 60%)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
          <div style={{ width: "40px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
          <span style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.2em", fontSize: "0.8rem", color: "var(--gold)" }}>
            {label}
          </span>
        </div>
        <h1 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(2.8rem, 8vw, 5.5rem)", lineHeight: 0.95, marginBottom: "20px" }}>
          <span style={{ color: "#fff" }}>{title} </span>
          <span style={{ color: "var(--gold)" }}>{highlight}</span>
        </h1>
        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.45)", maxWidth: "560px", lineHeight: 1.7, fontWeight: 300 }}>
          {sub}
        </p>
      </div>
    </section>
  );
}
