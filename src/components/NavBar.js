import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-xl font-bold">
          vacancies.today
        </Link>
        <div>
          <Link
            to="/login"
            className="text-white text-sm mr-4 py-2 px-4 rounded hover:bg-white hover:text-blue-500"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-white text-sm py-2 px-4 rounded hover:bg-white hover:text-blue-500"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
