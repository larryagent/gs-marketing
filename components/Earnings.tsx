"use client";
import { useEffect, useRef } from "react";

const tiers = [
  {
    title: "Rookie",
    amount: "$40,442",
    year: "Year One",
    description: "Someone who has never sold door to door before. Zero experience required. Just the will to win.",
    tag: "Entry Level",
    index: 0,
  },
  {
    title: "Veteran",
    amount: "$173,749",
    year: "Year Two",
    description: "Seasoned warriors. 1+ seasons of proven experience. Consistent closers who know the game.",
    tag: "1+ Season",
    featured: true,
    index: 1,
  },
  {
    title: "Manager",
    amount: "$365,877",
    year: "Year Three+",
    description: "Handles operations. Drives culture. Produces results. 2–3 seasons of elite leadership.",
    tag: "2–3 Seasons",
    index: 2,
  },
];

function TiltCard({ tier, children }: { tier: typeof tiers[0]; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function onMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el!.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateZ(8px)`;
    }

    function onLeave() {
      el!.style.transform = `perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0px)`;
    }

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} style={{ transition: "transform 0.15s ease", transformStyle: "preserve-3d", cursor: "default" }}>
      {children}
    </div>
  );
}

export default function Earnings() {
  return (
    <section id="results" style={{ background: "var(--mid)", padding: "100px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "72px" }} className="reveal">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <div style={{ width: "40px", height: "1px", background: "var(--gold)" }} />
            <span style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.2em", fontSize: "0.75rem", color: "var(--gold)" }}>COMPENSATION</span>
            <div style={{ width: "40px", height: "1px", background: "var(--gold)" }} />
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(2.5rem, 7vw, 4.5rem)", lineHeight: 1, color: "#fff" }}>
            100% Commission.<br />
            <span style={{ color: "var(--gold)" }}>Unlimited Ceiling.</span>
          </h2>
          <p style={{ marginTop: "20px", fontSize: "0.95rem", color: "rgba(255,255,255,0.4)", maxWidth: "460px", margin: "20px auto 0", lineHeight: 1.8 }}>
            The GS Marketing pay scale is entirely commission-based. The number climbs as high as you're willing to push it.
          </p>
        </div>

        <div className="earnings-grid">
          {tiers.map((tier) => (
            <TiltCard key={tier.title} tier={tier}>
              <div style={{
                background: tier.featured ? "var(--gold)" : "var(--card)",
                padding: "44px 36px",
                border: tier.featured ? "none" : "1px solid rgba(255,255,255,0.06)",
                height: "100%",
                position: "relative",
                overflow: "hidden",
              }}>
                {/* Corner accent */}
                <div style={{
                  position: "absolute", top: 0, right: 0,
                  width: "80px", height: "80px",
                  background: tier.featured ? "rgba(0,0,0,0.08)" : "rgba(245,200,66,0.04)",
                  clipPath: "polygon(100% 0, 100% 100%, 0 0)",
                }} />

                <div style={{
                  fontSize: "0.65rem", fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.18em",
                  color: tier.featured ? "rgba(0,0,0,0.45)" : "rgba(255,255,255,0.25)",
                  marginBottom: "6px", textTransform: "uppercase",
                }}>{tier.year}</div>

                <div style={{
                  fontFamily: "'Bebas Neue', cursive", fontSize: "1.05rem", letterSpacing: "0.05em",
                  color: tier.featured ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.35)",
                  marginBottom: "12px",
                }}>Avg. {tier.title}</div>

                <div style={{
                  fontFamily: "'Bebas Neue', cursive",
                  fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)",
                  color: tier.featured ? "#000" : "var(--gold)",
                  lineHeight: 1, marginBottom: "24px",
                  letterSpacing: "-0.01em",
                }}>{tier.amount}</div>

                <div style={{
                  width: "32px", height: "1.5px",
                  background: tier.featured ? "rgba(0,0,0,0.25)" : "rgba(245,200,66,0.4)",
                  marginBottom: "20px",
                }} />

                <p style={{
                  fontSize: "0.875rem",
                  color: tier.featured ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
                  lineHeight: 1.75, marginBottom: "32px",
                }}>{tier.description}</p>

                <div style={{
                  display: "inline-block",
                  fontSize: "0.65rem", fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.18em",
                  color: tier.featured ? "rgba(0,0,0,0.4)" : "rgba(245,200,66,0.5)",
                  border: `1px solid ${tier.featured ? "rgba(0,0,0,0.15)" : "rgba(245,200,66,0.2)"}`,
                  padding: "4px 10px",
                }}>{tier.tag}</div>
              </div>
            </TiltCard>
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: "40px", fontSize: "0.7rem", color: "rgba(255,255,255,0.18)", letterSpacing: "0.08em" }}>
          Figures represent annual averages. Individual results vary based on effort, market, and experience.
        </p>
      </div>
    </section>
  );
}
