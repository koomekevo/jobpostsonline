import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          VacanciesToday
        </Link>
        <div>
          <Link
            to="/login"
            className="text-white py-2 px-4 mx-2 rounded hover:bg-gray-700"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-white py-2 px-4 mx-2 rounded hover:bg-gray-700"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
