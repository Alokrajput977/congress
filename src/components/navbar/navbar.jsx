import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaYoutube, FaLinkedinIn, } from "react-icons/fa";
const Navbar = () => {
    const navRef = useRef(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Navbar fade-in
        gsap.fromTo(
            ".navbar",
            { opacity: 0, y: -50 },
            { duration: 1, delay: 0.5, opacity: 1, y: 0 }
        );

        // Animate nav links
        gsap.fromTo(
            ".nav-links li",
            { y: -30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                delay: 1,
            }
        );

        // Animate banner content
        gsap.fromTo(
            ".banner-content",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, delay: 1.5 },
            { once: true },


        );

        // Scroll effect
        ScrollTrigger.create({
            trigger: ".navbar",
            start: "top -80",
            end: 99999,
            toggleClass: { className: "main-tool-bar--scrolled", targets: ".navbar" },
            markers: false,
            onEnter: () => {
                gsap.to(".navbar", { backgroundColor: "#fff", color: "#000" });
            }

        });
    }, []);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (open && !event.target.closest('.side-drawer') &&
                !event.target.closest('.menu-toggle')) {
                setOpen(false);
            }
        };


        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]);

    return (
        <>
            {/* Social Bar */}
            <div className="social-bar">
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
                    <a href="https://x.com/home" target="_blank" rel="noreferrer"><FaTwitter /></a>
                    <a href="https://www.instagram.com/indianyouthcongress/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                    <a href="https://www.whatsapp.com/channel/0029Va5dVeU0G0XidNVHiY1Z" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
                    <a href="https://www.youtube.com/IndianYouthCongress" target="_blank" rel="noreferrer"><FaYoutube /></a>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="navbar" ref={navRef}>
                {/* Left side - Logo */}
                <div className="navbar-left">
                    <img src="/logo.png" alt="logo" className="logo" />
                </div>

                {/* Right side - Menu */}
                <div className="navbar-right">
                    <ul className="nav-links">
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#initiatives">Initiatives</a></li>
                        <li><a href="#elections">Elections</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#multimedia">Multimedia</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#icc">ICC</a></li>
                        <li><a href="#donate">Join</a></li>
                        <li>
                                   <button
                            className="contrib-btn"
                            onClick={() => window.location.href = "/money"}
                        >
                            Contribute
                        </button>
                        </li>
                    </ul>

                    {/* Hamburger for mobile */}
                    <button className="menu-toggle" onClick={() => setOpen(!open)}>
                        {open ? "✖" : "☰"}
                    </button>
                </div>
            </nav>

            {/* Side Drawer for Mobile */}
            <div className={`side-drawer ${open ? "active" : ""}`}>
                <ul>
                    <li><a href="#about" onClick={() => setOpen(false)}>About Us</a></li>
                    <li><a href="#initiatives" onClick={() => setOpen(false)}>Initiatives</a></li>
                    <li><a href="#elections" onClick={() => setOpen(false)}>Elections</a></li>
                    <li><a href="#gallery" onClick={() => setOpen(false)}>Gallery</a></li>
                    <li><a href="#multimedia" onClick={() => setOpen(false)}>Multimedia</a></li>
                    <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
                    <li><a href="#icc" onClick={() => setOpen(false)}>ICC</a></li>
                    <li><a href="#donate" onClick={() => setOpen(false)}>Join</a></li>
                    <li>
                        <button
                            className="contrib-btn"
                            onClick={() => window.location.href = "/money"}
                        >
                            Contribute
                        </button>
                    </li>

                </ul>
            </div>

            {/* Overlay when menu is open */}
            {open && <div className="overlay" onClick={() => setOpen(false)}></div>}

            {/* Banner Section */}
            <section className="banner-section">
                <div className="banner-container">
                    <img src="/banne.png" alt="Indian Youth Congress Banner" className="banner-img" />
                    <div className="banner-overlay">
                        <div className="banner-content">
                            <h1 className="banner-title">WHO WE ARE</h1>
                            <h2 className="banner-subtitle">Welcome to Indian Youth Congress</h2>
                            <p className="banner-description">
                                Indian Youth Congress (YC) is the youth wing of the Indian National
                                Congress party.
                            </p>
                            <button className="banner-cta">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="content-section">
                <div className="section-container">
                    <div className="text-content">
                        <h2>Our History</h2>
                        <p>
                            Pre-independence: Students very prominently and positively participated in the National
                            Movement. This was very closely evident in 2005, when students presented against Lord
                            Courant's decision of the partition of Bengal. This also had echoes in Northern India,
                            where students came out at large numbers to participate in the freedom movement in
                            spike of the fact that the Indian National Congress at that time did not have a political
                            south for the youth of the country.
                        </p>
                    </div>
                    <div className="image-content">
                        <img src="/rahul.png" alt="Our History" />
                    </div>
                </div>
            </section>

            <section className="content-section alternate">
                <div className="section-container reverse">
                    <div className="text-content">
                        <h2>Our Mission</h2>
                        <p>
                            The Indian Youth Congress is committed to empowering the youth of India and providing
                            them with a platform to voice their opinions, contribute to nation-building, and
                            participate in the democratic process. We believe in inclusive growth, social justice,
                            and the values enshrined in our Constitution.
                        </p>
                    </div>
                    <div className="image-content">
                        <img src="/rahul.jpg" alt="Our History" />
                    </div>
                </div>
            </section>

            {/* Our Inspiration Section */}
            <section className="inspiration-section">
                <div className="section-heading">
                    <h2>OUR INSPIRATION</h2>
                </div>

                <div className="leaders-container">
                    <div className="leader-card">
                        <div className="leader-image">
                            <img src="/maha.png" alt="Mahatma Gandhi" />
                        </div>
                        <div className="leader-content">
                            <h3>MAHATMA GANDHI</h3>
                            <p>"In the history of India, there have been occasions when a cloud, no bigger than a man's hand, has soon covered the whole sky."</p>
                        </div>
                    </div>

                    <div className="leader-card">
                        <div className="leader-image">
                            <img src="/neha.jpg" alt="Pandit Jawaharlal Nehru" />
                        </div>
                        <div className="leader-content">
                            <h3>PANDIT JAWAHARLAL NEHRU</h3>
                            <p>India's first and longest serving Prime Minister, Pandit Jawaharlal Nehru, was a man of vision.</p>
                        </div>
                    </div>

                    <div className="leader-card">
                        <div className="leader-image">
                            <img src="/sardar.png" alt="Sardar Vallabhbhai Patel" />
                        </div>
                        <div className="leader-content">
                            <h3>SARDAR VALLABHBHAI PATEL</h3>
                            <p>Vallabhbhai Jhaverbhai Patel, one of the six children of Jhaverbhai Patel and Ladba, was born in Nadiad, Gujarat.</p>
                        </div>
                    </div>

                    <div className="leader-card">
                        <div className="leader-image">
                            <img src="/dr.jpeg" alt="Dr. B.R Ambedkar" />
                        </div>
                        <div className="leader-content">
                            <h3>DR. B.R AMBEDKAR</h3>
                            <p>It takes courage to break free from the shackles of social inequality. It takes enormous amounts of courage to believe.</p>
                        </div>
                    </div>
                    <div className="leader-card">
                        <div className="leader-image">
                            <img src="/indra.jpg" alt="Indira Gandhi" />
                        </div>
                        <div className="leader-content">
                            <h3>INDIRA GANDHI</h3>
                            <p>Forging a strong nation requires determination, resilience, and the courage to make bold decisions for the future.</p>
                        </div>
                    </div>


                    <div className="leader-card">
                        <div className="leader-image">
                            <img src="/drr.jpeg" alt="Dr. Manmohan Singh" />
                        </div>
                        <div className="leader-content">
                            <h3>DR. MANMOHAN SINGH</h3>
                            <p>True leadership lies in humility, wisdom, and unwavering dedication to the nation’s progress.</p>
                        </div>
                    </div>


                </div>
            </section>

            {/* Key Issues Section */}
            <section className="key-issues-section">
                <div className="section-heading">
                    <h2>KEY ISSUES</h2>
                </div>

                <div className="issues-container">
                    <div className="issue-card">
                        <h3>FARMERS OF INDIA</h3>
                        <p>The Moaf government must comply with the requirements of the Ministry of Justice and have to be asked if any change is made.</p>
                    </div>

                    <div className="issue-card">
                        <h3>FARMERS OF INDIA</h3>
                        <p>The Moaf government must revoke all three of the black agricultural laws and listen to the voice of our Amadstats:</p>
                        <ul>
                            <li><strong>FOREIGN POLICY</strong> - It is high time most government learned that muscular tactics are no substitute to mature and deft diplomacy.</li>
                            <li><strong>JOBS</strong> - Ever shrinking employment opportunities has made joblessness an epidemic.</li>
                            <li><strong>DEMONETISATION</strong> - It is the largest government-sbeitted money laundering scheme in history.</li>
                        </ul>
                    </div>

                    <div className="issue-card">
                        <h3>REIGN POLICY</h3>
                        <p><strong>FOREIGN POLICY</strong> - This High Time Moaf government is a leading member of the Institute for Sustainable Development, which has been responsible for the use of electricity.</p>
                    </div>

                    <div className="issue-card">
                        <h3>MONTISATIO</h3>
                        <p><strong>DEMONETISATIO</strong> - It is the largest government-sbeitted technology to deliver its history.</p>
                    </div>
                    <div className="issue-card">
                        <h3>JOBS</h3>
                        <p><strong>JOBS</strong> - Ever shrinking employment opportunities has made joblessness an epidemic.</p>
                    </div>
                    <div className="issue-card">
                        <h3>DEMONETISATION</h3>
                        <p><strong>DEMONETISATION</strong> - It is the largest government-sbeitted money laundering scheme in history.</p>
                    </div>
                </div>
            </section>

            {/* Additional Content Section */}
            <section className="additional-content-section">
                <div className="section-heading">
                    <h2>OUR COMMITMENTS</h2>
                </div>

                <div className="commitments-container">
                    <div className="commitment-item">
                        <div className="commitment-icon">📚</div>
                        <h3>Education For All</h3>
                        <p>We believe in providing quality education to every child in India, regardless of their socioeconomic background.</p>
                    </div>

                    <div className="commitment-item">
                        <div className="commitment-icon">💼</div>
                        <h3>Employment Generation</h3>
                        <p>Creating job opportunities for youth through skill development programs and supporting entrepreneurship.</p>
                    </div>

                    <div className="commitment-item">
                        <div className="commitment-icon">🌾</div>
                        <h3>Farmer Support</h3>
                        <p>Standing with our farmers for fair prices, better infrastructure, and sustainable agricultural practices.</p>
                    </div>

                    <div className="commitment-item">
                        <div className="commitment-icon">⚕️</div>
                        <h3>Healthcare Access</h3>
                        <p>Ensuring affordable and accessible healthcare for all citizens through improved public health systems.</p>
                    </div>
                </div>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/h8Fsd6R5iBY?si=5_HIQSAP-w8HNpDR"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                </div>

            </section>


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
        </>
    );
};

export default Navbar;