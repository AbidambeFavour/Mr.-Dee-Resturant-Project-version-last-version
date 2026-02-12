import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, User } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <MapPin className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold">
              <span className="text-primary">Local</span>
              <span className="text-gray-800">Lynk</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-primary font-medium">Home</Link>
            <Link to="/restaurants" className="text-gray-700 hover:text-primary">Restaurants</Link>
            <Link to="/auto-services" className="text-gray-700 hover:text-primary">Auto Services</Link>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/login')} className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50">
              Login
            </button>
            <button onClick={() => navigate('/signup')} className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
              Sign up
            </button>


             {/* this is temporarily for testing component*/}
<div className="flex gap-4">
  <Link to="/admin" className="text-red-600">Admin</Link>
  <Link to="/business-owner" className="text-blue-600">Business</Link>
  <Link to="/profile/1" className="text-green-600">Profile</Link>
</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
