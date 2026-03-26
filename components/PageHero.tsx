"use client";
import { useEffect, useRef, useState } from "react";

interface PageHeroProps {
  label: string;
  title: string;
  highlight: string;
  sub: string;
  imageSeed?: string;
}

function ParticleBand() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let animId: number;
    let t = 0;

    function resize() {
      canvas!.width = canvas!.offsetWidth;
      canvas!.height = canvas!.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const pts = Array.from({ length: 60 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0003,
      vy: (Math.random() - 0.5) * 0.0003,
      gold: Math.random() > 0.75,
    }));

    function draw() {
      const W = canvas!.width, H = canvas!.height;
      ctx.clearRect(0, 0, W, H);

      pts.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
      });

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = (pts[i].x - pts[j].x) * W;
          const dy = (pts[i].y - pts[j].y) * H;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d > 120) continue;
          const a = (1 - d / 120) * 0.25;
          ctx.strokeStyle = pts[i].gold || pts[j].gold
            ? `rgba(245,200,66,${a})`
            : `rgba(255,255,255,${a * 0.4})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(pts[i].x * W, pts[i].y * H);
          ctx.lineTo(pts[j].x * W, pts[j].y * H);
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(pts[i].x * W, pts[i].y * H, pts[i].gold ? 2 : 1, 0, Math.PI * 2);
        ctx.fillStyle = pts[i].gold ? "rgba(245,200,66,0.7)" : "rgba(255,255,255,0.3)";
        ctx.fill();
      }

      t += 0.005;
      animId = requestAnimationFrame(draw);
    }
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />;
}

export default function PageHero({ label, title, highlight, sub }: PageHeroProps) {
  return (
    <section style={{
      position: "relative",
      padding: "100px 0 80px",
      overflow: "hidden",
      background: "var(--dark)",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
    }}>
      <ParticleBand />

      {/* Gold top line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent 0%, var(--gold) 40%, transparent 100%)" }} />

      {/* Depth gradient */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 100%, rgba(245,200,66,0.05) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
          <div style={{ width: "40px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
          <span style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.22em", fontSize: "0.7rem", color: "var(--gold)", opacity: 0.8 }}>
            {label}
          </span>
        </div>

        <h1 style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: "clamp(3rem, 9vw, 6rem)",
          lineHeight: 0.92,
          marginBottom: "24px",
          letterSpacing: "0.01em",
        }}>
          <span style={{ color: "#fff" }}>{title} </span>
          <span style={{ color: "var(--gold)" }}>{highlight}</span>
        </h1>

        <p style={{
          fontSize: "clamp(0.9rem, 2vw, 1rem)",
          color: "rgba(255,255,255,0.38)",
          maxWidth: "500px",
          lineHeight: 1.85,
          fontWeight: 300,
          letterSpacing: "0.01em",
        }}>
          {sub}
        </p>
      </div>
    </section>
  );
}
