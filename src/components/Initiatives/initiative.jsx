import React, { useState, useEffect, useRef } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";
import "./OurInitiatives.css";

const OurInitiatives = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState("");
  const [modalAlt, setModalAlt] = useState("");
  const modalInnerRef = useRef(null);

  // Open modal with image src + alt (used as caption)
  const openModal = (src, alt = "") => {
    setModalSrc(src);
    setModalAlt(alt);
    setModalOpen(true);
  };

  // Close modal and clear state
  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => {
      setModalSrc("");
      setModalAlt("");
    }, 220);
  };

  // Close when Esc pressed
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && modalOpen) closeModal();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  // Lock page scroll when modal open
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = prevOverflow || "";
    }
    return () => {
      document.body.style.overflow = prevOverflow || "";
    };
  }, [modalOpen]);

  // Click overlay to close (only when clicking the overlay, not the image)
  const handleOverlayMouseDown = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
    <div className={`initiatives-container ${modalOpen ? "blur-background" : ""}`}>
      {/* 🔙 Back Button */}
      <div className="back-btn-container">
        <button className="back-btn" onClick={() => window.history.back()}>
          ← Back
        </button>
      </div>

      {/* Header Section */}
      <div className="initiatives-header">
        <h2>Our Initiatives</h2>
        <p>
          These initiatives are demonstration of our commitment to addressing
          societal concerns and promoting our vision for a better community and
          country.
        </p>
      </div>

      <div className="initiatives-content">
        {/* Left Section - Main Initiative */}
        <div className="left-section">
          <img
            src="https://scontent.fdel72-1.fna.fbcdn.net/v/t39.30808-6/538328099_1363828158436589_754312683434958180_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Q0x6-LpH70QQ7kNvwHZTueB&_nc_oc=AdnmzBeOgn9KQgdYNcVjM_abq4AFQi1u1WJpWBn-1KMdNmB0INqDyLt-ty7Tr3Z1T9A&_nc_zt=23&_nc_ht=scontent.fdel72-1.fna&_nc_gid=qVf0zACxzn4oX2wst2qsyQ&oh=00_AfXq2Ydyj5Zrg6GO0rhuoASfDwrnqkkRhjRThOlgx4Q4jw&oe=68BC5948"
            alt="Shakti Super She"
            className="main-image zoomable"
            onClick={(e) => openModal(e.currentTarget.src, e.currentTarget.alt)}
          />
          <h3>Shakti Super She</h3>
          <p>
            Shakti Super SHE is an initiative of the Indian Youth Congress aimed
            at building and strengthening nationwide association and engagement
            of women with the Congress party.
          </p>
          <p>
            With Shakti Super She, we intend to enable and empower every women
            and nurture the leaders within you. We are building a platform, a
            community and a conversation for the women, by the women and of the
            women. A revolution that empowers the Shakti within every woman.
          </p>
        </div>

        {/* Right Section - Other Initiatives */}
        <div className="right-section">
          <div className="initiative-card">
            <img
              src="./raga.jpg"
              alt="Bharat Jodo Leadership Program"
              className="zoomable"
              onClick={(e) => openModal(e.currentTarget.src, e.currentTarget.alt)}
            />
            <div>
              <h4>Bharat Jodo Leadership Program</h4>
              <p>
                The Bharat Jodo Leadership Program is an initiative of the
                Indian Youth Congress designed to empower the advocates of
                democracy who are committed to fostering national progress
                rooted in constitutional values.
              </p>
            </div>
          </div>

          <div className="initiative-card">
            <img
              src="./image.jpg"
              alt="Pehla Vote"
              className="zoomable"
              onClick={(e) => openModal(e.currentTarget.src, e.currentTarget.alt)}
            />
            <div>
              <h4>Pehla Vote</h4>
              <p>
                This is an initiative to promote the importance of voting amongst
                the first-time voters.
              </p>
            </div>
          </div>

          <div className="initiative-card">
            <img
              src="./indera.jpg"
              alt="Indira Fellowship"
              className="zoomable"
              onClick={(e) => openModal(e.currentTarget.src, e.currentTarget.alt)}
            />
            <div>
              <h4>Indira Fellowship</h4>
              <p>
                The Indira Fellowship is an initiative in honour of the visionary
                leader, Smt. Indira Gandhi to amplify the voices of women in the
                political arena & drive a much-needed transformation in our
                society.
              </p>
            </div>
          </div>

          <div className="initiative-card">
            <img
              src="./youth.jpg"
              alt="Raising Voice For Youth Rights"
              className="zoomable"
              onClick={(e) => openModal(e.currentTarget.src, e.currentTarget.alt)}
            />
            <div>
              <h4>Raising Voice For Youth Rights</h4>
              <p>
                IYC regularly highlights the issues of the youth and launches
                agitations against the Government to draw the attention towards
                it. It keeps an eye on all the anti-people policies of the
                Government and takes sincere effort to take it to the masses.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <div
        className={`image-modal ${modalOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={modalAlt || "Image preview"}
        onMouseDown={handleOverlayMouseDown}
      >
        <div
          className="modal-inner"
          ref={modalInnerRef}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <button
            className="close-btn"
            aria-label="Close preview"
            onClick={closeModal}
          >
            ✕
          </button>

          {modalSrc && <img src={modalSrc} alt={modalAlt} draggable={false} />}

          {modalAlt && <div className="caption">{modalAlt}</div>}

          <div className="click-hint">
            Click outside image or press Esc to close
          </div>
        </div>
      </div>

      {/* ===== Footer ===== */}
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

export default OurInitiatives;
