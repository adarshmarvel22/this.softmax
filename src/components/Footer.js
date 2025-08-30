import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/LandingPage.css';

const Footer = () => {
  return (
    <footer className="landing-footer">
    <div className="container">
      <div className="footer-logo">This.SoftMax</div>
      <div className="footer-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
      <div className="social-links">
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
        <a href="#"><i className="fab fa-github"></i></a>
      </div>
      <p className="copyright">© 2023 This.SoftMax. All rights reserved.</p>
    </div>
  </footer>
  );
};

export default Footer;