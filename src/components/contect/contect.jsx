import React from "react";
import "./ContactPage.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <div className="contact-page">
      {/* Back Button */}
      <div className="back-btn-wrapper">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>

      {/* Header */}
      <div className="contact-header">
        <h2>We don’t learn from talking, we learn from listening.</h2>
      </div>

      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <form>
            <div className="form-row">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <div className="form-row">
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Your Phone" required />
            </div>
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <p>
            <strong>Address:</strong> 5 Raisina Road, New Delhi, India
          </p>
          <p>
            <strong>Phone:</strong> +91-11-23352472
          </p>
          <p>
            <strong>Email:</strong> support@iyc.in
          </p>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="#"><FaWhatsapp /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          {/* Brand */}
          <div className="footer-col">
            <h2 className="footer-logo">Congress</h2>
            <p className="footer-text">
              Pre-independence: Students very prominently and positively
              participated in the National Movement.
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

export default ContactPage;
