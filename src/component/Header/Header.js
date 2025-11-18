import React, { useState } from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="header">
      <div className="header-content">
        {" "}
        <img src={logo} alt="best deals Logo" className="logo" />
        {/* Hamburger Menu Button */}
        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        {/* Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <a href="/shop" onClick={() => setIsMenuOpen(false)}>
            Shop
          </a>
          <a href="/order" onClick={() => setIsMenuOpen(false)}>
            Order
          </a>
          <a href="/inventory" onClick={() => setIsMenuOpen(false)}>
            Inventory
          </a>
          <a href="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
