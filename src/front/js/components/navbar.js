import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';
import logo from '../../img/Trabajador.com_Logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="Trabajador Logo" />
      </Link>
      <div className="container-fluid">
        {/* I need to find a way to right align the navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about-us">About Us</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/reviews">Reviews</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contact-us">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
