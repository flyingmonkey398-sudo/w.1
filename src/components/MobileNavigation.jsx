import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navigation">
        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <a href="#" className="nav-item">Chat or Forum</a>
          <a href="#" className="nav-item">Wallet</a>
          <a href="#" className="nav-item">Smart Contract</a>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-nav-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-item" onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
        <a href="#" className="nav-item" onClick={() => setIsMenuOpen(false)}>
          Chat or Forum
        </a>
        <a href="#" className="nav-item" onClick={() => setIsMenuOpen(false)}>
          Wallet
        </a>
        <a href="#" className="nav-item" onClick={() => setIsMenuOpen(false)}>
          Smart Contract
        </a>
      </div>
    </>
  );
};

export default MobileNavigation;
