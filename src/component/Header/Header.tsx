import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-gray-800 text-white">
      <div className="flex items-center space-x-4">
        <a href="/" className="text-white hover:text-gray-300">Home</a>
        <a href="/about" className="text-white hover:text-gray-300">About</a>
        <Link to="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
        <Link to="/auth" className="text-white hover:text-gray-300">Authentication</Link>
        
      </div>
      <div>
        <h1>Hi this one</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
