"use client";
import { useRef, useEffect } from "react";

const services = [
  {
    num: "01",
    title: "Elite Training",
    desc: "World-class sales training from proven closers. We teach the mindset, the mechanics, and the mastery needed to win at the door.",
    detail: "6-week immersive program",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 2L2 7l9 5 9-5-9-5z"/>
        <path d="M2 17l9 5 9-5"/>
        <path d="M2 12l9 5 9-5"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Landing Pad",
    desc: "Housing support for reps relocating to work our markets. We take care of our people so they can focus on closing.",
    detail: "Furnished housing provided",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L11 3l8 6.5V20H3V9.5z"/>
        <rect x="8" y="14" width="6" height="6"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Career Acceleration",
    desc: "Clear paths from Rookie to Vet to Manager to Owner. We promote from within and build leaders who build teams.",
    detail: "Promoted in 90 days avg.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Uncapped Commission",
    desc: "Your income is limited only by your effort. No salary caps, no ceilings. The harder you work, the more you earn.",
    detail: "100% commission structure",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="9"/>
        <path d="M11 6v2m0 8v-2m-3-4h6m-4.5-2.5A2 2 0 0 1 11 8c1.1 0 2 .9 2 2s-.9 2-2 2-2 .9-2 2 .9 2 2 2a2 2 0 0 0 1.8-1.1"/>
      </svg>
    ),
  },
  {
    num: "05",
    title: "Culture First",
    desc: "We build brotherhood and sisterhood. The culture creates accountability, camaraderie, and results that outlast any season.",
    detail: "Ranked top culture 3 yrs",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
        <circle cx="11" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    num: "06",
    title: "Market Domination",
    desc: "We operate in the hottest fiber markets in the country. Prime territories, exclusive partnerships, maximum opportunity.",
    detail: "12 active markets nationwide",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="9"/>
        <line x1="2" y1="11" x2="20" y2="11"/>
        <path d="M11 2a15 15 0 0 1 0 18M11 2a15 15 0 0 0 0 18"/>
      </svg>
    ),
  },
];

function ServiceCard({ s, index }: { s: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(600px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
    };
    const onLeave = () => { el.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg)"; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, []);

  return (
    <div ref={ref} className={`svc-card reveal reveal-delay-${(index % 3) + 1}`} style={{ transition: "transform 0.12s ease", transformStyle: "preserve-3d" }}>
      <div className="svc-card-inner">
        <div className="svc-top">
          <span className="svc-num">{s.num}</span>
          <span className="svc-icon">{s.icon}</span>
        </div>
        <h3 className="svc-title">{s.title}</h3>
        <p className="svc-desc">{s.desc}</p>
        <div className="svc-footer">
          <div className="svc-line" />
          <span className="svc-detail">{s.detail}</span>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" style={{ background: "var(--dark)", padding: "100px 0" }}>
      <div className="container">
        <div style={{ marginBottom: "72px" }} className="reveal">
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
            <div style={{ width: "40px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
            <span style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.2em", fontSize: "0.75rem", color: "var(--gold)" }}>WHAT WE PROVIDE</span>
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(2.5rem, 7vw, 4.5rem)", lineHeight: 1 }}>
            Everything You Need<br />
            <span style={{ color: "var(--gold)" }}>To Win.</span>
          </h2>
        </div>

        <div className="svc-grid">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
