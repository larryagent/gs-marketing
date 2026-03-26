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
    let mouse = { x: 0.5, y: 0.5 };

    function resize() {
      W = canvas!.offsetWidth;
      H = canvas!.offsetHeight;
      canvas!.width = W;
      canvas!.height = H;
    }
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX / W;
      mouse.y = e.clientY / H;
    };
    window.addEventListener("mousemove", onMouseMove);

    // 3D depth-field particles
    type Particle = { x: number; y: number; z: number; vx: number; vy: number; gold: boolean; size: number };
    const particles: Particle[] = Array.from({ length: 180 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      z: Math.random(),            // depth: 0=far, 1=near
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      gold: Math.random() > 0.72,
      size: Math.random() * 1.5 + 0.3,
    }));

    // Horizontal fiber lines sweeping across
    type Fiber = { y: number; speed: number; phase: number; gold: boolean; vy: number };
    const fibers: Fiber[] = Array.from({ length: 12 }, (_, i) => ({
      y: (i / 12) * H,
      speed: Math.random() * 0.3 + 0.1,
      phase: Math.random() * Math.PI * 2,
      gold: i % 4 === 0,
      vy: (Math.random() - 0.5) * 0.08,
    }));

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Depth-parallax offset from mouse
      const mx = (mouse.x - 0.5) * 30;
      const my = (mouse.y - 0.5) * 15;

      // Draw fiber lines
      for (const f of fibers) {
        f.y += f.vy;
        if (f.y < -50) f.y = H + 50;
        if (f.y > H + 50) f.y = -50;

        const wave = Math.sin(t * f.speed + f.phase);
        const y = f.y + wave * 20;
        const alpha = 0.03 + Math.abs(wave) * 0.04;

        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.bezierCurveTo(W * 0.3, y + wave * 40, W * 0.7, y - wave * 40, W, y);
        ctx.strokeStyle = f.gold ? `rgba(245,200,66,${alpha})` : `rgba(255,255,255,${alpha * 0.5})`;
        ctx.lineWidth = f.gold ? 1 : 0.5;
        ctx.stroke();
      }

      // Draw depth-field particles
      const sorted = [...particles].sort((a, b) => a.z - b.z);
      for (const p of sorted) {
        p.x += p.vx * (0.3 + p.z * 0.7);
        p.y += p.vy * (0.3 + p.z * 0.7);
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10;
        if (p.y > H + 10) p.y = -10;

        // Parallax shift based on depth and mouse
        const px = p.x + mx * p.z;
        const py = p.y + my * p.z;
        const r = p.size * (0.4 + p.z * 0.8);
        const alpha = 0.15 + p.z * 0.55;

        // Connect nearby particles in same depth layer
        for (const q of sorted) {
          if (q === p) continue;
          const dz = Math.abs(p.z - q.z);
          if (dz > 0.15) continue;
          const dx = (p.x + mx * p.z) - (q.x + mx * q.z);
          const dy = (p.y + my * p.z) - (q.y + my * q.z);
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d > 90) continue;
          const la = (1 - d / 90) * alpha * 0.4;
          ctx.strokeStyle = (p.gold || q.gold) ? `rgba(245,200,66,${la})` : `rgba(255,255,255,${la * 0.3})`;
          ctx.lineWidth = 0.4;
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(q.x + mx * q.z, q.y + my * q.z);
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        if (p.gold) {
          ctx.fillStyle = `rgba(245,200,66,${alpha})`;
          if (p.z > 0.8) { ctx.shadowColor = "rgba(245,200,66,0.5)"; ctx.shadowBlur = 6; }
        } else {
          ctx.fillStyle = `rgba(255,255,255,${alpha * 0.5})`;
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      t += 0.005;
      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", background: "var(--dark)" }}>
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.65 }} />

      {/* Radial vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 60% 50%, transparent 20%, rgba(10,10,10,0.7) 80%)",
        pointerEvents: "none",
      }} />
      {/* Bottom fade */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "200px",
        background: "linear-gradient(to bottom, transparent, var(--dark))",
        pointerEvents: "none",
      }} />

      <div className="hero-content">
        <h1 className="hero-h1">
          <span style={{ color: "#fff", display: "block" }}>We Don't Just</span>
          <span style={{ color: "var(--gold)", display: "block" }}>Build Teams.</span>
          <span style={{ color: "#fff", display: "block" }}>We Build</span>
          <span className="hero-h1-outline">Dynasties.</span>
        </h1>

        <p className="hero-sub">
          GS Marketing builds elite sales teams that outperform, outclose, and outdeliver. We don't just dominate the fiber space — we define it.
        </p>

        <div className="hero-ctas">
          <a href="/#apply" className="btn-gold">Join the Team →</a>
          <a href="/results" className="btn-outline">See Our Results</a>
        </div>

        <div className="hero-stats">
          {[
            { num: "$40K+", label: "Avg Rookie Year" },
            { num: "$173K+", label: "Avg Vet Year" },
            { num: "$365K+", label: "Avg Manager Year" },
          ].map((s) => (
            <div key={s.label} className="hero-stat">
              <div className="hero-stat-num">{s.num}</div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, rgba(245,200,66,0.6), transparent)" }} />
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.25em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase" }}>Scroll</span>
      </div>
    </section>
  );
}
