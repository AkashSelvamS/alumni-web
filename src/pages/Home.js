import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">🎓 Paavai Alumni</div>
        <div className="nav-links">
          <Link to="/register" className="nav-button">Register</Link>
          <Link to="/signin" className="nav-button">Sign In</Link>
        </div>
      </nav>

      <header className="hero">
        <h1>Welcome to Paavai Alumni Network</h1>
        <p>Connecting past and present. Empowering the future.</p>
        <Link to="/register" className="cta-button">Join the Network</Link>
      </header>
    </div>
  );
};

export default Home;
