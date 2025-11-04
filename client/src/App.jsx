import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import BrowseEvents from "./pages/BrowseEvents";
import Features from "./pages/Features";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Router>
      <Navbar />

      <Routes>
        {/* ✅ Home Page */}
        <Route path="/" element={<LandingPage />} />

        {/* ✅ Login & Register Routes */}
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/browse" replace />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/register"
          element={
            isAuthenticated ? (
              <Navigate to="/browse" replace />
            ) : (
              <Register />
            )
          }
        />

        {/* ✅ Browse Events Page */}
        <Route
          path="/browse"
          element={
            isAuthenticated ? (
              <BrowseEvents />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* ✅ Dashboard (protected) */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <Dashboard />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* ✅ Features Page */}
        <Route path="/features" element={<Features />} />

        {/* ✅ Contact Page Placeholder */}
        <Route
          path="/contact"
          element={
            <h2 style={{ textAlign: "center", marginTop: "100px" }}>
              Contact Us Page Coming Soon!
            </h2>
          }
        />

        {/* ✅ Redirect unknown paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* ✅ Footer always visible */}
      <Footer />
    </Router>
  );
};

export default App;
