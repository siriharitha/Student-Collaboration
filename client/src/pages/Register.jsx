import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ✅ Use environment variable (configured in .env)
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

      const response = await fetch(`${API_URL}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Handle response
      const data = await response.json();

      if (response.ok) {
        alert("✅ Registered successfully!");
        if (data.token) {
          localStorage.setItem("token", data.token);
        }
        navigate("/browse");
      } else {
        alert(data.message || "❌ Registration failed!");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("⚠️ Cannot connect to the backend. Please check your server.");
    }
  };

  return (
    <div className="register-modal">
      <div className="register-card">
        <h2>Welcome to TeamUp</h2>
        <p>Sign up to connect with fellow students and build your dream team</p>

        {/* Tabs */}
        <div className="tabs">
          <button className="tab" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="tab active">Sign Up</button>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="your.email@university.edu"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Create a strong password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
