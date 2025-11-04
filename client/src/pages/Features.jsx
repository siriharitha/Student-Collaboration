import React from "react";
import {
  Users,
  Calendar,
  MessageSquare,
  Brain,
  User,
  Shield,
} from "lucide-react";
import "./Features.css";

const Features = () => {
  const features = [
    {
      icon: <Calendar size={32} color="#007bff" />,
      title: "Browse Events",
      description:
        "Discover hackathons, internships, and workshops tailored to your interests and skills.",
    },
    {
      icon: <Users size={32} color="#28a745" />,
      title: "Find Teammates",
      description:
        "Search for students with complementary skills and shared interests for your projects.",
    },
    {
      icon: <MessageSquare size={32} color="#17a2b8" />,
      title: "Real-time Chat",
      description:
        "Connect instantly with potential teammates through our built-in messaging system.",
    },
    {
      icon: <Brain size={32} color="#ffc107" />,
      title: "Smart Matching",
      description:
        "Get personalized recommendations for events and teammates based on your profile.",
    },
    {
      icon: <User size={32} color="#6f42c1" />,
      title: "Rich Profiles",
      description:
        "Showcase your skills, interests, and past projects to attract the right team.",
    },
    {
      icon: <Shield size={32} color="#dc3545" />,
      title: "Secure & Private",
      description:
        "Your data is protected with industry-standard security and authentication.",
    },
  ];

  return (
    <section className="features-section">
      <h2>Everything You Need to Collaborate</h2>
      <p>
        Powerful features to help you find teammates, join events, and build your
        network
      </p>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            {feature.icon}
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
