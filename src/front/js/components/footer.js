import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/Trabajador.com_Logo.png';
import '../../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer-container container-fluid p-5">
      <div className="footer-row">
        <div className="footer-col logo-col">
          <img src={logo} alt="Trabajador Logo" className="footer-logo tLogo" />
          <p>© 2024 Trabajador.com</p>
          {/* Social media icons */}
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        <div className="footer-col quick-links">
          <h5>Quick Links</h5>
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
        <div className="footer-col newsletter">
          <h5>Stay Informed</h5>
          <p>Join our newsletter to receive updates and news.</p>
          {/* Placeholder for newsletter form */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;