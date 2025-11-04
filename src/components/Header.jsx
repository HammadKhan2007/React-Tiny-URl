import React from 'react';
// Import karein agar koi component-specific CSS file ho (optional)
// import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-text">TINYURL</div>
        <nav className="nav-menu">
          <a href="#" className="nav-link">? My URLs</a>
          <a href="#" className="nav-link">Plans</a>
          <a href="#" className="nav-link">Blog</a>
          <a href="#" className="nav-link">Features</a>
          <button className="btn btn-signup">Sign Up</button>
          <button className="btn btn-signin">Sign In</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;