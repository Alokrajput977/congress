// File: WomanSafety.jsx
import React from "react";
import "./WomanSafety.css";

export default function WomanSafety({ onBack }) {
    const handleBack = () => {
        if (typeof onBack === "function") onBack();
        else window.history.back();
    };

    return (
        <div className="ws-page">
            {/* HERO SECTION */}
            <div className="ws-hero">
                <div className="ws-hero-content">
                    <div className="ws-badge">SAFETY • EMPOWERMENT • JUSTICE</div>
                    <h1 className="ws-main-title">BJP's Failed Promise: Women's Safety in Peril</h1>
                    <p className="ws-tagline">
                        They promised "Beti Bachao, Beti Padhao" but delivered empty slogans.
                        Rising crimes against women, unemployment, and educational barriers continue
                        to threaten India's daughters. It's time for real change.
                    </p>

                    <div className="ws-actions">
                        <button className="ws-back-btn" onClick={handleBack}>
                            ← Back
                        </button>
                        <a
                            className="ws-cta"
                            href="#details"
                            onClick={(e) => {
                                e.preventDefault();
                                document
                                    .getElementById("details")
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            Know The Truth
                        </a>
                    </div>
                </div>
                <div className="ws-hero-art">
                    <img
                        src="./maxresdefault.jpg"
                        alt="Indian woman standing strong"
                    />
                </div>
            </div>

            {/* STATISTICS SECTION */}
            <section className="ws-stats">
                <h2 className="ws-section-title">The Alarming Reality Under BJP Rule</h2>
                <div className="ws-stat-cards">
                    <div className="ws-stat-card">
                        <div className="ws-stat-number">+25%</div>
                        <div className="ws-stat-label">Rise in crimes against women</div>
                    </div>
                    <div className="ws-stat-card">
                        <div className="ws-stat-number">72%</div>
                        <div className="ws-stat-label">Women feel unsafe in public spaces</div>
                    </div>
                    <div className="ws-stat-card">
                        <div className="ws-stat-number">1 in 3</div>
                        <div className="ws-stat-label">Cases pending in courts for years</div>
                    </div>
                </div>
            </section>

            {/* DETAILS SECTION */}
            <section id="details" className="ws-details">
                <div className="ws-container">
                    <h2 className="ws-section-title">Congress's Vision: Real Safety, Real Progress</h2>
                    <h3 className="ws-slogan">
                        "Nari Shakti, Rashtra Shakti: Empowering Women, Empowering India"
                    </h3>

                    <div className="ws-card">
                        <div className="ws-card-content">
                            <p className="ws-paragraph">
                                The Indian National Congress pledges to make women's safety a national priority.
                                We believe in protecting women's dignity, ensuring economic independence, and
                                providing equal opportunities for all. Our comprehensive plan includes:
                            </p>

                            <div className="ws-features">
                                <div className="ws-feature">
                                    <div className="ws-feature-icon">🛡️</div>
                                    <h4>Zero Tolerance Policy</h4>
                                    <p>Fast-track courts for gender-based crimes, increased patrolling, and women's safety squads in every district.</p>
                                </div>
                                <div className="ws-feature">
                                    <div className="ws-feature-icon">💼</div>
                                    <h4>Economic Empowerment</h4>
                                    <p>33% reservation in government jobs, entrepreneurship support, and skill development programs.</p>
                                </div>
                                <div className="ws-feature">
                                    <div className="ws-feature-icon">🎓</div>
                                    <h4>Education For All</h4>
                                    <p>Free higher education for girls from economically weak families and scholarships for excellence.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="ws-cta-section">
                <div className="ws-container">
                    <h2 className="ws-cta-title">Join the Movement for Change</h2>
                    <p className="ws-cta-text">Together, we can build an India where every woman feels safe, respected, and empowered.</p>
                    <div className="ws-cta-buttons">
                        <button className="ws-pledge-btn">Take the Safety Pledge</button>
                        <button className="ws-volunteer-btn">Become a Volunteer</button>
                    </div>
                </div>
            </section>

            <footer className="ws-footer">
                <div className="ws-footer-content">
                    <div className="ws-congress-symbol">
                        <div className="ws-hand-logo">✋</div>
                        <span>Indian National Congress</span>
                    </div>
                    <small>
                        © {new Date().getFullYear()} People First — Justice, Equality, Progress
                    </small>
                </div>
            </footer>
        </div>
    );
}