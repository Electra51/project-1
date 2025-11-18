import React from "react";
import "./Footer.css";
import logo from "../../images/Logo.svg";
const Footer = () => {
  return (
    <div>
      {" "}
      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-column">
              <div className="footer-logo">
                <img src={logo} alt="Ema-John Logo" className="logo" />
              </div>
              <p className="footer-description">
                Your trusted online shopping destination for quality products at
                amazing prices. Shop with confidence and style.
              </p>
              <div className="payment-methods">
                <span className="payment-text">We Accept:</span>
                <div className="payment-icons">
                  <div className="payment-icon">VISA</div>
                  <div className="payment-icon">MC</div>
                  <div className="payment-icon">AMEX</div>
                  <div className="payment-icon">PayPal</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#faq">FAQs</a>
                </li>
                <li>
                  <a href="#careers">Careers</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div className="footer-column">
              <h4 className="footer-heading">Customer Service</h4>
              <ul className="footer-links">
                <li>
                  <a href="#returns">Return Policy</a>
                </li>
                <li>
                  <a href="#shipping">Shipping Info</a>
                </li>
                <li>
                  <a href="#track">Track Order</a>
                </li>
                <li>
                  <a href="#size">Size Guide</a>
                </li>
                <li>
                  <a href="#terms">Terms & Conditions</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-column">
              <h4 className="footer-heading">Get In Touch</h4>
              <ul className="footer-contact">
                <li>
                  <span className="contact-icon">📍</span>
                  <span>123 Shopping Street, NY 10001</span>
                </li>
                <li>
                  <span className="contact-icon">📞</span>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li>
                  <span className="contact-icon">✉️</span>
                  <span>support@emajohn.com</span>
                </li>
                <li>
                  <span className="contact-icon">🕒</span>
                  <span>Mon - Fri: 9AM - 6PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              © 2024 EmaJohn. All rights reserved. Made with ❤️ by Developer
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                Facebook
              </a>
              <a href="#" aria-label="Twitter">
                Twitter
              </a>
              <a href="#" aria-label="Instagram">
                Instagram
              </a>
              <a href="#" aria-label="LinkedIn">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
