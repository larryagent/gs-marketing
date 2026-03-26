"use client";

const services = [
  {
    icon: "⚡",
    title: "Elite Training",
    desc: "World-class sales training from proven closers. We teach the mindset, the mechanics, and the mastery needed to win at the door.",
  },
  {
    icon: "🏠",
    title: "Landing Pad",
    desc: "Housing support for reps relocating to work our markets. We take care of our people so they can focus on closing.",
  },
  {
    icon: "📈",
    title: "Career Acceleration",
    desc: "Clear paths from Rookie → Vet → Manager → Owner. We promote from within and build leaders who build teams.",
  },
  {
    icon: "💰",
    title: "Uncapped Commission",
    desc: "Your income is limited only by your effort. No salary caps, no ceilings. The harder you work, the more you earn.",
  },
  {
    icon: "🤝",
    title: "Culture First",
    desc: "We build brotherhood and sisterhood. The Grit culture creates accountability, camaraderie, and results that outlast any season.",
  },
  {
    icon: "🎯",
    title: "Market Domination",
    desc: "We operate in the hottest fiber markets in the country. Prime territories, exclusive partnerships, maximum opportunity.",
  },
];

export default function Services() {
  return (
    <section id="services" style={{ background: "var(--dark)", padding: "120px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
        {/* Header */}
        <div style={{ marginBottom: "64px" }} className="reveal">
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
            <div style={{ width: "40px", height: "1px", background: "var(--gold)" }} />
            <span style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.2em", fontSize: "0.8rem", color: "var(--gold)" }}>
              WHAT WE PROVIDE
            </span>
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(3rem, 5vw, 4.5rem)", lineHeight: 1 }}>
            Everything You Need
            <br />
            <span style={{ color: "var(--gold)" }}>To Win.</span>
          </h2>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}>
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`service-card reveal reveal-delay-${(i % 3) + 1}`}
            >
              <div style={{ fontSize: "2rem", marginBottom: "20px" }}>{s.icon}</div>
              <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "1.4rem", letterSpacing: "0.05em", marginBottom: "12px", color: "#fff" }}>
                {s.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
