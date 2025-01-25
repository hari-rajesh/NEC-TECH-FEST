import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-box">
          <img src="/logos/NEC-LOGO.png" alt="" className='footer-logo' />
          <span>NEC</span>
        </div>
        <nav className="nav-links">
          <a href="#">About Us</a>
          <a href="#">Booking</a>
          <a href="#">Events</a>
          <a href="#">Contact</a>
        </nav>
        <div className="social-links">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  