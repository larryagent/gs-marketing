"use client";
import { useState } from "react";

export default function Apply() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", experience: "rookie" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <section id="apply" style={{ background: "var(--dark)", padding: "120px 0", position: "relative", overflow: "hidden" }}>
      {/* BG accent */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "3px",
        background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 0%, rgba(245,200,66,0.05) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
            <div style={{ width: "40px", height: "1px", background: "var(--gold)" }} />
            <span style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.2em", fontSize: "0.8rem", color: "var(--gold)" }}>
              JOIN THE TEAM
            </span>
            <div style={{ width: "40px", height: "1px", background: "var(--gold)" }} />
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(3rem, 5vw, 4.5rem)", lineHeight: 1, marginBottom: "16px" }}>
            Forward Yourself
            <br />
            <span style={{ color: "var(--gold)" }}>& Your Career.</span>
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
            Apply below. If you have the drive, we have everything else.
          </p>
        </div>

        {/* Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="reveal reveal-delay-2">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
              <div>
                <label style={{ display: "block", fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.1em", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginBottom: "8px" }}>
                  FULL NAME
                </label>
                <input
                  className="apply-input"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  required
                />
              </div>
              <div>
                <label style={{ display: "block", fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.1em", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginBottom: "8px" }}>
                  PHONE NUMBER
                </label>
                <input
                  className="apply-input"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(555) 000-0000"
                  required
                />
              </div>
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.1em", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginBottom: "8px" }}>
                EMAIL ADDRESS
              </label>
              <input
                className="apply-input"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div style={{ marginBottom: "32px" }}>
              <label style={{ display: "block", fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.1em", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginBottom: "8px" }}>
                EXPERIENCE LEVEL
              </label>
              <select
                className="apply-input"
                name="experience"
                value={form.experience}
                onChange={handleChange}
                style={{ cursor: "pointer" }}
              >
                <option value="rookie">Rookie — Never sold D2D before</option>
                <option value="vet">Veteran — 1+ seasons of experience</option>
                <option value="manager">Manager — Ready to lead a team</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn-gold"
              disabled={loading}
              style={{ width: "100%", textAlign: "center", fontSize: "1.1rem", opacity: loading ? 0.7 : 1, cursor: loading ? "wait" : "pointer" }}
            >
              {loading ? "Submitting..." : "Secure the Bag →"}
            </button>

            <p style={{ textAlign: "center", marginTop: "16px", fontSize: "0.75rem", color: "rgba(255,255,255,0.2)" }}>
              No spam. We'll reach out within 24 hours.
            </p>
          </form>
        ) : (
          <div className="reveal" style={{ textAlign: "center", padding: "64px 32px", background: "var(--card)", border: "1px solid rgba(245,200,66,0.2)" }}>
            <div style={{ fontSize: "3rem", marginBottom: "16px" }}>✦</div>
            <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "2.5rem", color: "var(--gold)", marginBottom: "12px" }}>
              Application Received.
            </h3>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
              Welcome to the GS Marketing family, {form.name.split(" ")[0]}. Our team will be in touch within 24 hours.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
