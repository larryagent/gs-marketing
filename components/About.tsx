"use client";
import { useEffect, useRef } from "react";

function FiberSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let t = 0;
    let animId: number;
    const W = 420, H = 420;
    canvas.width = W;
    canvas.height = H;

    const R = 140;
    const cx = W / 2, cy = H / 2;
    const NUM = 120;

    // Generate points on a sphere
    const pts = Array.from({ length: NUM }, (_, i) => {
      const phi = Math.acos(1 - 2 * (i + 0.5) / NUM);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      return {
        ox: Math.sin(phi) * Math.cos(theta),
        oy: Math.sin(phi) * Math.sin(theta),
        oz: Math.cos(phi),
      };
    });

    function draw() {
      ctx.clearRect(0, 0, W, H);

      const cosT = Math.cos(t * 0.3);
      const sinT = Math.sin(t * 0.3);
      const cosV = Math.cos(0.18);
      const sinV = Math.sin(0.18);

      const projected = pts.map(p => {
        // Rotate Y
        const rx = p.ox * cosT - p.oz * sinT;
        const ry = p.oy;
        const rz = p.ox * sinT + p.oz * cosT;
        // Rotate X (tilt)
        const fx = rx;
        const fy = ry * cosV - rz * sinV;
        const fz = ry * sinV + rz * cosV;

        const scale = 800 / (800 + fz * R);
        return {
          x: cx + fx * R * scale,
          y: cy + fy * R * scale,
          z: fz,
          scale,
        };
      });

      // Draw connections
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const a = projected[i];
          const b = projected[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > 60) continue;

          const avgZ = (a.z + b.z) / 2;
          const brightness = (avgZ + 1) / 2;
          const isGold = (i + j) % 7 === 0;

          if (isGold) {
            ctx.strokeStyle = `rgba(245,200,66,${brightness * 0.5 * (1 - dist / 60)})`;
            ctx.lineWidth = 0.8;
          } else {
            ctx.strokeStyle = `rgba(255,255,255,${brightness * 0.15 * (1 - dist / 60)})`;
            ctx.lineWidth = 0.4;
          }

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // Draw dots
      projected.forEach((p, i) => {
        const brightness = (p.z + 1) / 2;
        const isGold = i % 9 === 0;
        const r = isGold ? 2.5 * p.scale : 1.2 * p.scale;

        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        if (isGold) {
          ctx.fillStyle = `rgba(245,200,66,${brightness * 0.9})`;
          ctx.shadowColor = "rgba(245,200,66,0.6)";
          ctx.shadowBlur = 6;
        } else {
          ctx.fillStyle = `rgba(255,255,255,${brightness * 0.5})`;
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      t += 0.008;
      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return <canvas ref={canvasRef} style={{ width: "100%", maxWidth: "420px", height: "auto", display: "block", margin: "0 auto" }} />;
}

const stats = [
  { num: "5", suffix: "+", label: "Years Dominating" },
  { num: "300", suffix: "+", label: "Reps Trained" },
  { num: "#1", suffix: "", label: "In Our Market" },
  { num: "12", suffix: "", label: "Active Markets" },
];

export default function About() {
  return (
    <section id="about" style={{ background: "var(--dark)", padding: "100px 0", overflow: "hidden" }}>
      <div className="container">
        <div className="about-grid">
          <div className="reveal">
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
              <div style={{ width: "40px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
              <span style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.2em", fontSize: "0.75rem", color: "var(--gold)" }}>BUILDING DIFFERENT</span>
            </div>

            <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(2.5rem, 6vw, 4rem)", lineHeight: 1, marginBottom: "28px" }}>
              <span style={{ color: "#fff" }}>An Independent</span><br />
              <span style={{ color: "var(--gold)" }}>Sales Organization</span><br />
              <span style={{ color: "#fff" }}>Built on</span><br />
              <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.25)", color: "transparent" }}>Culture.</span>
            </h2>

            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, marginBottom: "18px", fontWeight: 300 }}>
              GS Marketing is more than a sales company. We are a culture-first organization that believes the right environment produces results most people never dream of.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.85, marginBottom: "44px", fontWeight: 300 }}>
              We operate in the fiber optic space — the fastest-growing infrastructure segment in America. Our teams don't just meet quota. They shatter it.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", marginBottom: "44px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              {stats.map((s, i) => (
                <div key={s.label} style={{
                  padding: "28px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  paddingLeft: i % 2 === 1 ? "28px" : "0",
                }}>
                  <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(2.2rem, 4vw, 3rem)", color: "var(--gold)", lineHeight: 1 }}>
                    {s.num}<span style={{ fontSize: "60%", opacity: 0.7 }}>{s.suffix}</span>
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "6px" }}>{s.label}</div>
                </div>
              ))}
            </div>

            <a href="/#apply" className="btn-gold">Start Your Journey →</a>
          </div>

          <div className="reveal reveal-delay-2" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute", inset: "-40px",
                background: "radial-gradient(circle, rgba(245,200,66,0.06) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />
              <FiberSphere />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
