import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-gray-900 mb-4">About Us</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary">Contact Us</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Discover</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary">Events</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-primary">Blog</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-primary">Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Business</h4>
            <ul className="space-y-2">
              <li><Link to="/business-owner" className="text-gray-600 hover:text-primary">Business Login</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-primary">Advertise</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Languages</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary">English</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-primary">Français</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>© 2024 LocalLynk Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
