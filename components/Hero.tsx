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
    let W = 0, H = 0;

    function resize() {
      W = canvas!.offsetWidth;
      H = canvas!.offsetHeight;
      canvas!.width = W;
      canvas!.height = H;
    }
    resize();
    window.addEventListener("resize", resize);

    const PARTICLES = 180;
    const FOV = 400;

    // 3D particles in a cylinder/tunnel shape
    const particles = Array.from({ length: PARTICLES }, (_, i) => ({
      x: (Math.random() - 0.5) * 1600,
      y: (Math.random() - 0.5) * 900,
      z: Math.random() * 800,
      vz: 0.4 + Math.random() * 0.8,
      gold: i % 5 === 0,
      size: 0.5 + Math.random() * 2,
    }));

    // Fiber lines connecting nearby particles
    function draw() {
      ctx.clearRect(0, 0, W, H);

      const sorted = [...particles].sort((a, b) => b.z - a.z);

      for (let i = 0; i < sorted.length; i++) {
        const p = sorted[i];
        const scale = FOV / (FOV + p.z);
        const sx = W / 2 + p.x * scale;
        const sy = H / 2 + p.y * scale;
        const depth = 1 - p.z / 800;

        // Connect close particles
        for (let j = i + 1; j < sorted.length; j++) {
          const q = sorted[j];
          const qs = FOV / (FOV + q.z);
          const qx = W / 2 + q.x * qs;
          const qy = H / 2 + q.y * qs;
          const dx = sx - qx;
          const dy = sy - qy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > 90) continue;

          const alpha = (1 - dist / 90) * depth * 0.35;
          if (p.gold || q.gold) {
            ctx.strokeStyle = `rgba(245,200,66,${alpha})`;
            ctx.lineWidth = 0.6;
          } else {
            ctx.strokeStyle = `rgba(255,255,255,${alpha * 0.5})`;
            ctx.lineWidth = 0.3;
          }
          ctx.beginPath();
          ctx.moveTo(sx, sy);
          ctx.lineTo(qx, qy);
          ctx.stroke();
        }

        // Draw particle
        const r = p.size * scale;
        ctx.beginPath();
        ctx.arc(sx, sy, Math.max(0.3, r), 0, Math.PI * 2);
        if (p.gold) {
          ctx.fillStyle = `rgba(245,200,66,${depth * 0.85})`;
          ctx.shadowColor = "rgba(245,200,66,0.7)";
          ctx.shadowBlur = 8 * scale;
        } else {
          ctx.fillStyle = `rgba(255,255,255,${depth * 0.4})`;
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Advance z — tunnel effect
      particles.forEach(p => {
        p.z -= p.vz;
        if (p.z < 0) {
          p.z = 800;
          p.x = (Math.random() - 0.5) * 1600;
          p.y = (Math.random() - 0.5) * 900;
        }
      });

      t += 0.005;
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
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />

      {/* Vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at center, transparent 30%, rgba(10,10,10,0.7) 100%)",
        pointerEvents: "none",
      }} />
      {/* Gold bloom left */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 15% 60%, rgba(245,200,66,0.07) 0%, transparent 50%)",
        pointerEvents: "none",
      }} />

      <div className="hero-content">
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "10px",
          background: "rgba(245,200,66,0.08)", border: "1px solid rgba(245,200,66,0.2)",
          padding: "6px 18px", marginBottom: "36px",
        }}>
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--gold)", boxShadow: "0 0 10px var(--gold)", animation: "pulse 2s ease-in-out infinite" }} />
          <span style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.18em", fontSize: "0.75rem", color: "var(--gold)" }}>
            #1 FIBER SALES ORGANIZATION
          </span>
        </div>

        <h1 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(3.2rem, 12vw, 8rem)", lineHeight: 0.92, letterSpacing: "0.01em", marginBottom: "28px" }}>
          <span style={{ color: "#fff", display: "block" }}>We Don't Just</span>
          <span style={{ color: "var(--gold)", display: "block" }}>Build Teams.</span>
          <span style={{ color: "#fff", display: "block" }}>We Build</span>
          <span style={{
            display: "block",
            WebkitTextStroke: "1.5px var(--gold)",
            color: "transparent",
            filter: "drop-shadow(0 0 20px rgba(245,200,66,0.15))",
          }}>Dynasties.</span>
        </h1>

        <p style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)", color: "rgba(255,255,255,0.45)", maxWidth: "500px", lineHeight: 1.8, marginBottom: "40px", fontWeight: 300, letterSpacing: "0.01em" }}>
          GS Marketing builds elite sales teams that outperform, outclose, and outdeliver. We don't just dominate the fiber space — we define it.
        </p>

        <div className="hero-ctas">
          <a href="/#apply" className="btn-gold" style={{ fontSize: "0.95rem" }}>Join the Team →</a>
          <a href="/results" className="btn-outline" style={{ fontSize: "0.95rem" }}>See Our Results</a>
        </div>

        <div className="hero-stats">
          {[
            { num: "$40K+", label: "Avg Rookie Year" },
            { num: "$173K+", label: "Avg Vet Year" },
            { num: "$365K+", label: "Avg Manager Year" },
          ].map((s) => (
            <div key={s.label} style={{ paddingRight: "36px", borderRight: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(1.3rem, 4vw, 1.8rem)", color: "var(--gold)", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "5px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "36px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
        <div style={{ width: "1px", height: "52px", background: "linear-gradient(to bottom, var(--gold), transparent)" }} />
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.25em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase" }}>Scroll</span>
      </div>
    </section>
  );
}
