"use client";

const services = [
  {
    num: "01",
    title: "Elite Training",
    desc: "World-class sales training from proven closers. We teach the mindset, the mechanics, and the mastery needed to win at the door.",
    detail: "6-week immersive program",
  },
  {
    num: "02",
    title: "Landing Pad",
    desc: "Housing support for reps relocating to work our markets. We take care of our people so they can focus on closing.",
    detail: "Furnished housing provided",
  },
  {
    num: "03",
    title: "Career Acceleration",
    desc: "Clear paths from Rookie to Vet to Manager to Owner. We promote from within and build leaders who build teams.",
    detail: "Promoted in 90 days avg.",
  },
  {
    num: "04",
    title: "Uncapped Commission",
    desc: "Your income is limited only by your effort. No salary caps, no ceilings. The harder you work, the more you earn.",
    detail: "100% commission structure",
  },
  {
    num: "05",
    title: "Culture First",
    desc: "We build brotherhood and sisterhood. The culture creates accountability, camaraderie, and results that outlast any season.",
    detail: "Ranked top culture 3 yrs",
  },
  {
    num: "06",
    title: "Market Domination",
    desc: "We operate in the hottest fiber markets in the country. Prime territories, exclusive partnerships, maximum opportunity.",
    detail: "12 active markets nationwide",
  },
];

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

        <div className="services-list">
          {services.map((s, i) => (
            <div key={s.title} className={`service-row reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="service-row-num">{s.num}</div>
              <div className="service-row-body">
                <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "1.6rem", letterSpacing: "0.04em", color: "#fff", marginBottom: "8px" }}>{s.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.75, maxWidth: "520px" }}>{s.desc}</p>
              </div>
              <div className="service-row-detail">
                <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} />
                <span style={{ fontSize: "0.75rem", fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.12em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase" }}>{s.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
