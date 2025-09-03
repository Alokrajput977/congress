import React, { useState } from 'react';
import './JoinPage.css';

const JoinPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        occupation: ''
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

    return (
        <div className="join-page">
            <header className="header">
                <h1>Indian Congress Party</h1>
                <p>Building a Better Future Together</p>
            </header>

            <div className="content-container">
                <section className="party-info">
                    <div className="slogan-section">
                        <h2>Our Promise</h2>
                        <div className="slogan-card">
                            <h3>"Bharat First - Progress for All"</h3>
                            <p>We pledge to put our nation and its people at the forefront of every decision we make.</p>
                        </div>
                    </div>

                    <div className="slogan-section">
                        <h2>Our Philosophy</h2>
                        <div className="slogan-card">
                            <h3>"Congress Party Good Thinking"</h3>
                            <p>We believe in inclusive growth, social justice, and progressive policies that benefit every citizen regardless of their background.</p>
                        </div>
                    </div>

                    <div className="image-section">
                        <img src="" alt="" />
                    </div>
                </section>

                <section className="join-section">
                    <h2>Join Our Movement</h2>
                    <p>Be part of the change you want to see in our country. Together we can build a brighter future.</p>

                    <form className="join-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <textarea
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="occupation">Occupation</label>
                            <input
                                type="text"
                                id="occupation"
                                name="occupation"
                                value={formData.occupation}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="join-btn">Join Now</button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default JoinPage;