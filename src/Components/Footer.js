import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h4>About</h4>
          <p>Explore our extensive listings of cricket grounds.</p>
          <div className="contact">
            <span><i className="fas fa-map-marker-alt"></i> 11 Adamstown Boulevard, Adamstown Castle, Lucan, K78 V446</span>
            <span><i className="fas fa-envelope"></i> stephenangeloirl@gmail.com</span>
          </div>
        </div>
        <div className="footer-section links">
          
        </div>
        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/stephen.angelo.581/"><i className="fab fa-facebook"></i></a>
            <a href="https://twitter.com/StephenAng67731"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/stephennangelo/"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 GroundBooking | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;