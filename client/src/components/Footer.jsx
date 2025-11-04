import React from "react";
import { FaTwitter, FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-section">
          <h2 className="footer-logo">👥 TeamUp</h2>
          <p>
            Connecting students with opportunities and teammates for amazing
            collaborations.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Events</li>
            <li>Team Finder</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="footer-section">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      <hr />
      <p className="footer-bottom">© 2025 TeamUp. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
