import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const openInbox = () => {
    window.open("https://mail.google.com", "_blank");
  };

  const handleAddApplication = () => {
    navigate("/dashboard");

    setTimeout(() => {
      const formSection = document.getElementById("add-application-form");
      if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo-container">
          <div className="logo-box">A</div>
          <h2 className="logo-text">ApplyMatrix</h2>
        </Link>
      </div>

      <div className="navbar-center">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/analytics" className="nav-link">Analytics</Link>
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/contact" className="nav-link">Contact Us</Link>
      </div>

      <div className="navbar-right">
        <button className="nav-btn mail-btn" onClick={openInbox}>
          📧 Mail
        </button>

        <button className="nav-btn add-btn" onClick={handleAddApplication}>
          + Add
        </button>

        <div className="profile-circle">V</div>
      </div>
    </nav>
  );
}

export default Navbar;
