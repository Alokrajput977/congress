import React, { useState } from 'react';
import './JoinPage.css';

const JoinPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        occupation: '',
        membershipType: 'supporter'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for joining our party! We will contact you soon.');
        // Here you would typically send the data to your backend
    };

    const handleBack = () => {
        // Navigate back or close the form
        window.history.back();
    };

    return (
        <div className="join-page">
            <button className="back-btn" onClick={handleBack}>
                &larr; Back
            </button>

            <header className="header">
                <div className="header-content">
                    <h1>Indian National Congress</h1>
                    <p>Building a Better Future Together</p>
                    <div className="header-image">
                        <img src="https://placehold.co/100x100/ffffff/DC143C?text=INC" alt="Congress Party Symbol" />
                    </div>
                </div>
            </header>

            <div className="content-container">
                <section className="party-info">
                    <div className="info-section">
                        <h2>Our Legacy</h2>
                        <p>The Indian National Congress has been at the forefront of India's freedom struggle and continues to work towards a progressive, inclusive, and prosperous India. Our rich history is filled with sacrifices and achievements that have shaped modern India.</p>
                    </div>

                    <div className="slogan-section">
                        <h2>Our Promise</h2>
                        <div className="slogan-card">
                            <h3>"Bharat First - Progress for All"</h3>
                            <p>We pledge to put our nation and its people at the forefront of every decision we make. Our policies are designed to uplift every section of society, ensuring no one is left behind in India's growth story.</p>
                        </div>
                    </div>

                    <div className="slogan-section">
                        <h2>Our Philosophy</h2>
                        <div className="slogan-card">
                            <h3>"Congress Party Good Thinking"</h3>
                            <p>We believe in inclusive growth, social justice, and progressive policies that benefit every citizen regardless of their background. Our vision is of an India where equality, freedom, and opportunity are available to all.</p>
                        </div>
                    </div>

                    <div className="image-gallery">
                        <h2>Our Journey</h2>
                        <div className="gallery-container">
                            <div className="gallery-item">
                                <img src="https://placehold.co/300x200/DC143C/ffffff?text=Leadership" alt="Congress Leadership" />
                                <p>Strong Leadership</p>
                            </div>
                            <div className="gallery-item">
                                <img src="https://placehold.co/300x200/00008B/ffffff?text=Progress" alt="Progress" />
                                <p>Progressive Vision</p>
                            </div>
                            <div className="gallery-item">
                                <img src="https://placehold.co/300x200/006400/ffffff?text=Growth" alt="Growth" />
                                <p>Inclusive Growth</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="join-section">
                    <div className="join-header">
                        <h2>Join Our Movement</h2>
                        <p>Be part of the change you want to see in our country. Together we can build a brighter future for all Indians. Your participation can help shape policies and decisions that affect millions.</p>
                    </div>

                    <form className="join-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Enter your email address"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number *</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Enter your 10-digit phone number"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="address">Address *</label>
                            <textarea
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                placeholder="Enter your complete address"
                                rows="3"
                            ></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="occupation">Occupation *</label>
                            <input
                                type="text"
                                id="occupation"
                                name="occupation"
                                value={formData.occupation}
                                onChange={handleChange}
                                required
                                placeholder="What do you do?"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="membershipType">Membership Type</label>
                            <select
                                id="membershipType"
                                name="membershipType"
                                value={formData.membershipType}
                                onChange={handleChange}
                            >
                                <option value="supporter">Supporter</option>
                                <option value="volunteer">Volunteer</option>
                                <option value="active-member">Active Member</option>
                            </select>
                        </div>

                        <div className="form-group checkbox-group">
                            <input type="checkbox" id="terms" required />
                            <label htmlFor="terms">I agree to the terms and conditions and support the party's ideology</label>
                        </div>

                        <button type="submit" className="join-btn">Join Now</button>
                    </form>
                </section>
            </div>

            <footer className="footer">
                <p>© {new Date().getFullYear()} Indian National Congress. All rights reserved.</p>
                <p>Contact us: contact@inc.org | Follow us on social media</p>
            </footer>
        </div>
    );
};

export default JoinPage;