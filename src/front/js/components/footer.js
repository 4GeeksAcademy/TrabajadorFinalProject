import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/Trabajador.com_Logo.png';

const Footer = () => {
  return (
    <footer className="container">
      <div className="row">
        <div className="col">
          <img src={logo} alt="Trabajador Logo" />
          <p>Trabajador.com</p>
          {/* Social media links */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className="col">
          <h5>Quick Links</h5>
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
        <div className="col">
          <h5>Top Company Partners</h5>
          <p>Compania Uno</p>
          <p>Empresa Dos</p>
          <p>Negocio Tres</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
