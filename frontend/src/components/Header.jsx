import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaBars, FaHome, FaSearch } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <header className="header">
      {/* Left: Logo */}
      <div className="header-left">
        <img className="logo" src="https://chlothzy.shop/assets/logo-C9jKJhBG.png" alt="Logo" />
      </div>

      {/* Center: Navigation */}
      <div className="header-center">
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </div>
        <nav className={menuOpen ? "nav open" : "nav"}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      </div>

      {/* Right: Icons / Auth */}
      <div className="header-right">
        <FaSearch className="nav-icon" />
        <Link to="/cart">
          <FaShoppingCart className="nav-icon" />
        </Link>

        {isLoggedIn ? (
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        ) : (
          <Link to="/login">
            <FaUser className="nav-icon" />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
