import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AuthModal.css";

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = isLogin
        ? "http://localhost:5001/api/login"
        : "http://localhost:5001/api/register";

      const payload = isLogin
        ? { email, password }
        : { name, email, password };

      const res = await axios.post(url, payload);

      // ✅ If Login
      if (isLogin && res.data.message === "Login successful!") {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        onClose();
        navigate("/browse");
        return;
      }

      // ✅ If Register
      if (!isLogin) {
        if (res.data.message === "User registered successfully!") {
          alert("✅ Registered successfully! Logging you in...");
          // auto-login after register
          const loginRes = await axios.post("http://localhost:5001/api/login", {
            email,
            password,
          });

          if (loginRes.data.message === "Login successful!") {
            localStorage.setItem("user", JSON.stringify(loginRes.data.user));
            onClose();
            navigate("/browse");
          }
        } else if (res.data.message === "User already exists") {
          alert("⚡ Account already exists. Logging you in...");
          // auto-login existing user
          const loginRes = await axios.post("http://localhost:5001/api/login", {
            email,
            password,
          });

          if (loginRes.data.message === "Login successful!") {
            localStorage.setItem("user", JSON.stringify(loginRes.data.user));
            onClose();
            navigate("/browse");
          }
        }
      }
    } catch (err) {
      console.error("❌ Error:", err.response?.data || err.message);

      if (err.response && err.response.data && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        alert("Something went wrong. Please try again!");
      }
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>
          Welcome to <span className="highlight">TeamUp</span>
        </h2>
        <p>Sign in to connect with fellow students and find your team</p>

        <div className="tabs">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </>
          )}

          <label>Email</label>
          <input
            type="email"
            placeholder="your.email@university.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">{isLogin ? "Sign In" : "Sign Up"}</button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
