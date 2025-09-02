import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./AboutPage.css";

const AboutPage = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="about-page">
            {/* Back Button */}
            <button className="back-btn" onClick={handleBack}>
                <FaArrowLeft /> Back
            </button>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay">
                    <h1>Indian Youth Congress</h1>
                    <p>Empowering the youth, building the nation</p>
                </div>
            </section>

            {/* Introduction */}
            <section className="intro">
                <div className="container">
                    <h2>About Us</h2>
                    <div className="underline"></div>
                    <p>
                        The Indian Youth Congress is dedicated to empowering young voices,
                        promoting democracy, and shaping a brighter future for India. Our
                        movement is built on values of equality, progress, and inclusive
                        development, ensuring that every young citizen has a chance to
                        contribute to nation-building.
                    </p>
                </div>
            </section>

            {/* Promises Section */}
            <div className="promises-container">
                {/* Democracy Promise */}
                <section className="promise democracy">
                    <div className="container promise-content">
                        <div className="text-content">
                            <h2>Democracy Promise</h2>
                            <div className="underline"></div>
                            <p>
                                We believe in strengthening democracy by ensuring transparency,
                                accountability, and equal participation. Every youth has the power
                                to make a difference, and we are committed to providing platforms
                                that amplify their voices.
                            </p>
                        </div>
                        <div className="image-content">
                            <img src="https://cdn.pixabay.com/photo/2019/08/10/06/15/flag-4396270_1280.jpg" alt="Democracy" />
                        </div>
                    </div>
                </section>

                {/* Farmers Promise */}
                <section className="promise farmers">
                    <div className="container promise-content">
                        <div className="text-content">
                            <h2>Farmers First</h2>
                            <div className="underline"></div>
                            <p>
                                Our farmers are the backbone of India. We promise to support them
                                with fair policies, better infrastructure, and access to modern
                                technology to ensure their hard work results in prosperity.
                            </p>
                        </div>
                        <div className="image-content">
                            <img src="https://cdn.pixabay.com/photo/2020/01/13/09/03/india-4761926_1280.jpg" alt="Farmers" />
                        </div>
                    </div>
                </section>

                {/* Children Education */}
                <section className="promise education">
                    <div className="container promise-content">
                        <div className="text-content">
                            <h2>Education for All</h2>
                            <div className="underline"></div>
                            <p>
                                We envision a nation where every child has access to quality
                                education. Our focus is on affordable schooling, digital learning,
                                and skill-based training that prepares the youth for future
                                challenges.
                            </p>
                        </div>
                        <div className="image-content">
                            <img src="https://cdn.pixabay.com/photo/2019/08/08/14/46/indian-holiday-4393133_1280.jpg" alt="Education" />
                        </div>
                    </div>
                </section>

                {/* Jobs & Employment */}
                <section className="promise jobs">
                    <div className="container promise-content">
                        <div className="text-content">
                            <h2>Jobs & Opportunities</h2>
                            <div className="underline"></div>
                            <p>
                                Empowering youth with meaningful employment is our priority. We aim
                                to create job opportunities through skill development programs,
                                entrepreneurship support, and a focus on innovation-led growth.
                            </p>
                        </div>
                        <div className="image-content">
                            <img src="https://cdn.pixabay.com/photo/2022/06/02/02/24/india-map-7236918_1280.jpg" alt="Jobs" />
                        </div>
                    </div>
                </section>
            </div>


            {/* Footer */}
            <footer className="footer">
                <div className="footer-container">
                    {/* Brand */}
                    <div className="footer-col">
                        <h2 className="footer-logo">Congress</h2>
                        <p className="footer-text">
                            Pre-independence: Students very prominently and positively participated in the National Movement.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h3 className="footer-title">Quick Links</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="footer-col">
                        <h3 className="footer-title">Resources</h3>
                        <ul>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/faq">FAQs</a></li>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/terms">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-col">
                        <h3 className="footer-title">Contact Us</h3>
                        <p>AICC Hq, Indira Bhawan, 9A Kotla Marg, New Delhi - 110002</p>
                        <p>Email : connect@inc.in, indirabhawan@inc.in</p>
                        <p>Tel : 011-65206520/21, 011-23019080 (24 Akbar Road)</p>

                        <div className="footer-socials">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p>© 2025 Congress. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default AboutPage;