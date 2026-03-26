"use client";

export default function About() {
  return (
    <section id="about" style={{ background: "var(--dark)", padding: "80px 0" }}>
      <div className="container">
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
          <div style={{ width: "40px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
          <span style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.2em", fontSize: "0.8rem", color: "var(--gold)" }}>
            BUILDING DIFFERENT
          </span>
        </div>

        <div className="about-grid">
          <div className="reveal">
            <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(2.5rem, 7vw, 4.5rem)", lineHeight: 1, marginBottom: "28px" }}>
              <span style={{ color: "#fff" }}>An Independent</span><br />
              <span style={{ color: "var(--gold)" }}>Sales Organization</span><br />
              <span style={{ color: "#fff" }}>Built on</span><br />
              <span style={{ WebkitTextStroke: "2px rgba(255,255,255,0.3)", color: "transparent" }}>Culture.</span>
            </h2>
            <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "20px", fontWeight: 300 }}>
              GS Marketing is more than a sales company. We are a culture-first organization that believes the right environment produces results that most people never dream of.
            </p>
            <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "40px", fontWeight: 300 }}>
              We operate in the fiber optic space — the fastest-growing infrastructure industry in America. Our teams don't just meet quota. They shatter it.
            </p>
            <a href="#apply" className="btn-gold">Start Your Journey →</a>
          </div>

          <div className="reveal reveal-delay-2 stats-grid">
            {[
              { num: "5+", label: "Years Dominating" },
              { num: "300+", label: "Reps Trained" },
              { num: "#1", label: "In Our Market" },
              { num: "∞", label: "Earning Potential" },
            ].map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="stat-number">{stat.num}</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "8px" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
