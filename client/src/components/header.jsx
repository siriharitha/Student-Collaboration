import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <div className="bg-blue-600 text-white text-2xl rounded-xl p-2 flex items-center justify-center w-10 h-10">
          👥
        </div>
        <h1 className="text-2xl font-extrabold text-gray-900">
          Team<span className="text-blue-600">Up</span>
        </h1>
      </div>

      {/* Right Section (Only Login Button) */}
      <div>
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
