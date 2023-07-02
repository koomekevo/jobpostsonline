import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to vacancies.today!</h1>
      <p className="mb-4">Find your dream job today.</p>
      <div className="space-x-4">
        <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Login</Link>
        <Link to="/register" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Register</Link>
      </div>
    </div>
  );
};

export default Home;
