import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import hero from "../assets/hero.jpg";
import AuthModal from "../components/AuthModal";

const LandingPage = () => {
  const navigate = useNavigate();
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div className="landing-container">
      {/* ✅ Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="overlay">
          <div className="badges">
            <span className="badge">500+ Active Students</span>
            <span className="badge">200+ Events</span>
          </div>

          <h1 className="hero-title">Find Your Perfect Team</h1>
          <p className="hero-subtitle">
            Connect with fellow students for hackathons, internships, and
            workshops. Build amazing projects together.
          </p>

          <div className="buttons">
            <button
              className="primary-btn"
              onClick={() => setShowAuth(true)} // ✅ Open login/signup modal
            >
              Get Started Free
            </button>
            <button
              className="secondary-btn"
              onClick={() => navigate("/browse")}
            >
              Browse Events
            </button>
          </div>
        </div>
      </section>

      {/* ✅ Features Section */}
      <section className="features-section">
        <h2>Everything You Need to Collaborate</h2>
        <p>
          Powerful features to help you find teammates, join events, and build
          your network
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <i className="fas fa-calendar"></i>
            <h3>Browse Events</h3>
            <p>
              Discover hackathons, internships, and workshops tailored to your
              interests and skills.
            </p>
          </div>

          <div className="feature-card">
            <i className="fas fa-search"></i>
            <h3>Find Teammates</h3>
            <p>
              Search for students with complementary skills and shared interests
              for your projects.
            </p>
          </div>

          <div className="feature-card">
            <i className="fas fa-comments"></i>
            <h3>Real-time Chat</h3>
            <p>
              Connect instantly with potential teammates through our built-in
              messaging system.
            </p>
          </div>

          <div className="feature-card">
            <i className="fas fa-bolt"></i>
            <h3>Smart Matching</h3>
            <p>
              Get personalized recommendations for events and teammates based on
              your profile.
            </p>
          </div>

          <div className="feature-card">
            <i className="fas fa-user"></i>
            <h3>Rich Profiles</h3>
            <p>
              Showcase your skills, interests, and past projects to attract the
              right team.
            </p>
          </div>

          <div className="feature-card">
            <i className="fas fa-lock"></i>
            <h3>Secure & Private</h3>
            <p>
              Your data is protected with industry-standard security and
              authentication.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ How It Works Section */}
      <section className="how-section">
        <h2>How It Works</h2>
        <p>Get started in three simple steps</p>

        <div className="how-cards">
          <div className="how-card">
            <span className="step-number">1</span>
            <h3>Create Your Profile</h3>
            <p>
              Sign up and build your profile with your skills, branch,
              interests, and project experience.
            </p>
          </div>

          <div className="how-card">
            <span className="step-number">2</span>
            <h3>Discover & Connect</h3>
            <p>
              Browse events and collaboration posts. Search for teammates with
              the skills you need.
            </p>
          </div>

          <div className="how-card">
            <span className="step-number">3</span>
            <h3>Build Together</h3>
            <p>
              Form your team, chat in real-time, and create amazing projects
              together.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className="footer">
        <p>© 2024 TeamUp. Connecting students for success.</p>
      </footer>

      {/* ✅ Login / Signup Modal */}
      <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} />
    </div>
  );
};

export default LandingPage;
