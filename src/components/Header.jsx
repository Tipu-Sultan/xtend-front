// src/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">Quiz App</Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Add File</Link>
          <Link to="/questions" className="navbar-link">Show Questions</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
