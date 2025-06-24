import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>ClothZy</h3>
        <p>Your one-stop fashion store. Trendy, quality, and affordable.</p>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <p className="footer-bottom">
          &copy; {new Date().getFullYear()} ClothZy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
