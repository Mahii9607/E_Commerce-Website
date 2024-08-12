import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  // Import the CSS file for header styles

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <img src="/images/logo.png" alt="Logo" className="logo" />
      </Link>
      <nav className="header-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
      <Link to="/cart" className="header-cart nav-link">
        <img src="/images/cart-icon.png" alt="Cart" className="cart-icon" />
        <span className="cart-label">Cart</span>
      </Link>
    </header>
  );
}

export default Header;
