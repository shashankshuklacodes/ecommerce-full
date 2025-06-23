import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>ClothZy</h3>
        <p>Your one-stop fashion store. Trendy, quality, and affordable.</p>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/cart">Cart</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <p className="footer-bottom">&copy; {new Date().getFullYear()} ClothZy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
