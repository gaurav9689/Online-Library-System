import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img
          src="https://clipground.com/images/library-logo-png-9.png" // Replace with your actual logo path
          alt="Library Logo"
          className="logo-img"
        />
        <span className="logo-text">Online Book Library</span>
      </div>

      {/* Hamburger Button */}
      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Navigation Links */}
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" className="nav-btn" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/browseBooks" className="nav-btn" onClick={() => setMenuOpen(false)}>Browse Books</Link>
        <Link to="/addBook" className="nav-btn" onClick={() => setMenuOpen(false)}>Add Book</Link>
      </div>
    </nav>
  );
};

export default Navbar;
