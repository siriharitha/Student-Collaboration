import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  Search,
  MessageCircle,
  Zap,
  Users,
  Shield,
} from "lucide-react";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Calendar className="icon calendar" />,
      title: "Browse Events",
      description:
        "Discover hackathons, internships, and workshops tailored to your interests and skills",
    },
    {
      icon: <Search className="icon search" />,
      title: "Find Teammates",
      description:
        "Search for students with complementary skills and shared interests for your projects",
    },
    {
      icon: <MessageCircle className="icon chat" />,
      title: "Real-time Chat",
      description:
        "Connect instantly with potential teammates through our built-in messaging system",
    },
    {
      icon: <Zap className="icon match" />,
      title: "Smart Matching",
      description:
        "Get personalized recommendations for events and teammates based on your profile",
    },
    {
      icon: <Users className="icon profile" />,
      title: "Rich Profiles",
      description:
        "Showcase your skills, interests, and past projects to attract the right team",
    },
    {
      icon: <Shield className="icon secure" />,
      title: "Secure & Private",
      description:
        "Your data is protected with industry-standard security and authentication",
    },
  ];

  return (
    <div className="dashboard">
      <nav className="navbar">
        <div className="logo">TeamUp</div>
        <div className="nav-buttons">
          <button
            className="logout-btn"
            onClick={() => navigate("/")}
          >
            Logout
          </button>
        </div>
      </nav>

      <header className="header">
        <h1>Everything You Need to Collaborate</h1>
        <p>
          Powerful features to help you find teammates, join events, and build your network
        </p>
      </header>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            {feature.icon}
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
