import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  // ✅ Scroll to Team Section in /browse page
  const handleTeamFinderClick = () => {
    if (location.pathname !== "/browse") {
      navigate("/browse");
      // Wait for navigation, then scroll to team section
      setTimeout(() => {
        const section = document.getElementById("team-section");
        section?.scrollIntoView({ behavior: "smooth" });
      }, 600);
    } else {
      // If already on /browse, just scroll directly
      const section = document.getElementById("team-section");
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      {/* === Left Logo === */}
      <div className="logo" onClick={() => navigate("/")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="#2563eb"
          className="logo-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17a4 4 0 1 0 6 0m-6 0h6m-6 0a4 4 0 0 1-4-4m10 4a4 4 0 0 0 4-4m-7-4a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
          />
        </svg>
        Team<span>Up</span>
      </div>

      {/* === Center Links === */}
      <div className="nav-links">
        <span
          onClick={() => navigate("/")}
          className={isActive("/") ? "active" : ""}
        >
          Home
        </span>

        <span
          onClick={() => navigate("/browse")}
          className={isActive("/browse") ? "active" : ""}
        >
          Events
        </span>

        <span
          onClick={handleTeamFinderClick}
          className="teamfinder-link"
        >
          Team Finder
        </span>

        <span
          onClick={() => navigate("/faq")}
          className={isActive("/faq") ? "active" : ""}
        >
          FAQ
        </span>

        <span
          onClick={() => navigate("/contact")}
          className={isActive("/contact") ? "active" : ""}
        >
          Contact
        </span>
      </div>

      {/* === Right Section === */}
      <div className="nav-buttons">
        <button
          className="login-btn"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
