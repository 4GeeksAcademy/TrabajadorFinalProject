import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';
import logo from '../../img/Trabajador.com_Logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ps-2 sticky-top">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="Trabajador Logo" />
      </Link>
      <div className="container-fluid">
        <div className='container-fluid'>
          <ul className="navbar-nav justify-content-end pe-2">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about-us">About Us</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/reviews">Reviews</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact-us">Contact Us</Link></li>
            <li className="nav-item">
              <Link className="nav-link" to="/checkout">
                <i className="fas fa-shopping-cart"></i> Checkout
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <i className="fas fa-user"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
