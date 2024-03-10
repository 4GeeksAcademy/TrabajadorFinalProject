import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/Trabajador.com_Logo.png';
import '../../styles/footer.css'

const Footer = () => {
  return (
    <footer className="container mt-5">
      <div className="row text-center g-4">
        <div className="col">
          <img src={logo} alt="Trabajador Logo" className="mb-2 tLogo" />
          <p>Trabajador.com</p>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="d-block">Facebook</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="d-block">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="d-block">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="d-block">Instagram</a>
        </div>
        <div className="col">
          <h5>About Us</h5> {/* Updated title as per description */}
          <Link to="/" className="d-block">Home</Link>
          <Link to="/about-us" className="d-block">About Us</Link>
          <Link to="/services" className="d-block">Services</Link>
          <Link to="/reviews" className="d-block">Reviews</Link>
          <Link to="/contact-us" className="d-block">Contact Us</Link>
        </div>
        <div className="col">
          <h5>Terms</h5> {/* Updated title and links as per description */}
          <Link to="/privacy-policy" className="d-block">Privacy Policy</Link>
          <Link to="/terms-conditions" className="d-block">Terms and Conditions</Link>
          <Link to="/copyright-policy" className="d-block">Copyright Policy</Link>
          <Link to="/code-of-conduct" className="d-block">Code of Conduct</Link>
          <Link to="/fees-charges" className="d-block">Fees and Charges</Link>
        </div>
        <div className="col">
          <h5>Company Partners</h5>
          <div className="company-logo mb-2">Logo 1</div>
          <div className="company-logo mb-2">Logo 2</div>
          <div className="company-logo mb-2">Logo 3</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;