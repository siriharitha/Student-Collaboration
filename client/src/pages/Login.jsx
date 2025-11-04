import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Redirect logged-in user directly to /browse
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/browse");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    try {
      // ✅ Use environment variable (or fallback)
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

      const response = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Login successful!");
        localStorage.setItem("token", data.token || "sampleUserToken");
        navigate("/browse"); // ✅ Redirect after successful login
      } else {
        alert(data.message || "❌ Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("⚠️ Cannot connect to the backend. Please check your server.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-200">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-700 tracking-wide">
        Login
      </h1>

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-lg w-80 transition-all hover:shadow-2xl"
      >
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 active:scale-95 transition"
        >
          Login
        </button>
      </form>

      <p className="mt-4 text-gray-600 text-sm">
        Don't have an account?{" "}
        <span
          onClick={() => navigate("/register")}
          className="text-blue-700 font-semibold cursor-pointer hover:underline"
        >
          Register
        </span>
      </p>
    </div>
  );
};

export default Login;
