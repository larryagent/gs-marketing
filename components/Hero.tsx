"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let t = 0;
    let animId: number;

    function resize() {
      canvas!.width = canvas!.offsetWidth;
      canvas!.height = canvas!.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    // Fiber strands for right side
    const strands = Array.from({ length: 20 }, () => ({
      sx: Math.random() * canvas!.width * 0.5 + canvas!.width * 0.3,
      sy: Math.random() * canvas!.height,
      ex: canvas!.width + 50,
      ey: Math.random() * canvas!.height,
      cp1x: Math.random() * canvas!.width,
      cp1y: Math.random() * canvas!.height,
      cp2x: Math.random() * canvas!.width,
      cp2y: Math.random() * canvas!.height,
      gold: Math.random() > 0.6,
      w: Math.random() * 1.5 + 0.3,
      o: Math.random() * 0.4 + 0.1,
      ph: Math.random() * Math.PI * 2,
      sp: Math.random() * 0.5 + 0.3,
    }));

    function draw() {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      for (const s of strands) {
        const pulse = Math.sin(t * s.sp + s.ph);
        const op = s.o + pulse * 0.15;
        ctx.beginPath();
        ctx.moveTo(s.sx, s.sy);
        ctx.bezierCurveTo(s.cp1x, s.cp1y, s.cp2x, s.cp2y, s.ex, s.ey);
        if (s.gold) {
          ctx.shadowColor = "rgba(245,200,66,0.6)";
          ctx.shadowBlur = 6;
          ctx.strokeStyle = `rgba(245,200,66,${Math.max(0, Math.min(1, op))})`;
        } else {
          ctx.shadowBlur = 0;
          ctx.strokeStyle = `rgba(255,255,255,${Math.max(0, Math.min(1, op * 0.4))})`;
        }
        ctx.lineWidth = s.w;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
      t += 0.01;
      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      {/* Canvas fiber bg */}
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.5 }} />

      {/* BG gradient */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 80% 50%, rgba(245,200,66,0.06) 0%, transparent 60%), radial-gradient(ellipse at 0% 100%, rgba(245,200,66,0.04) 0%, transparent 50%)",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, maxWidth: "1200px", margin: "0 auto", padding: "120px 48px 80px", width: "100%" }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "rgba(245,200,66,0.1)", border: "1px solid rgba(245,200,66,0.25)",
          padding: "6px 16px", marginBottom: "32px",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", boxShadow: "0 0 8px var(--gold)", display: "inline-block" }} />
          <span style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.15em", fontSize: "0.8rem", color: "var(--gold)" }}>
            #1 FIBER SALES ORGANIZATION
          </span>
        </div>

        {/* Headline */}
        <h1 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(4rem, 9vw, 8rem)", lineHeight: 0.95, letterSpacing: "0.02em", maxWidth: "800px", marginBottom: "28px" }}>
          <span style={{ color: "#fff" }}>We Don't Just</span>
          <br />
          <span style={{ color: "var(--gold)" }}>Build Teams.</span>
          <br />
          <span style={{ color: "#fff" }}>We Build</span>
          <br />
          <span style={{ WebkitTextStroke: "2px var(--gold)", color: "transparent" }}>Dynasties.</span>
        </h1>

        {/* Subtext */}
        <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.55)", maxWidth: "520px", lineHeight: 1.7, marginBottom: "44px", fontWeight: 300 }}>
          GS Marketing builds elite sales teams that outperform, outclose, and outdeliver. We don't just dominate the fiber space — we define it.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
          <a href="#apply" className="btn-gold" style={{ fontSize: "1rem" }}>
            Join the Team →
          </a>
          <a href="#results" className="btn-outline" style={{ fontSize: "1rem" }}>
            See Our Results
          </a>
        </div>

        {/* Quick stats */}
        <div style={{ display: "flex", gap: "48px", marginTop: "72px", flexWrap: "wrap" }}>
          {[
            { num: "$40K+", label: "Avg Rookie Year" },
            { num: "$173K+", label: "Avg Vet Year" },
            { num: "$365K+", label: "Avg Manager Year" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "2rem", color: "var(--gold)", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "4px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <div style={{ width: "1px", height: "60px", background: "linear-gradient(to bottom, var(--gold), transparent)" }} />
        <span style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>Scroll</span>
      </div>
    </section>
  );
}
