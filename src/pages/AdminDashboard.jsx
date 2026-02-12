import React from 'react';
import { Bell, X, User, CheckCircle, Search, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-pink-50">
      
      
      <div className="flex">
        <div className="w-64 bg-white shadow-lg min-h-screen sticky top-0">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
            <nav className="space-y-2">
              {['Dashboard', 'Users', 'Products', 'Reviews', 'Analytics'].map((item) => (
                <button key={item} className={`w-full text-left px-4 py-3 rounded-lg font-medium ${item === 'Dashboard' ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}>
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex-1 p-8">
          <div className="bg-white rounded-lg shadow p-6 mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="https://i.pravatar.cc/150?img=33" alt="Admin" className="w-16 h-16 rounded-full" />
              <div>
                <h3 className="text-xl font-bold">Admin User</h3>
                <p className="text-gray-600">Full access to admin features</p>
              </div>
            </div>
            <button className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark">Edit Profile</button>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold mb-4">Recent Activities</h3>
              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-pink-50 rounded-lg">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Bell size={20} className="text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">New User Registered</h4>
                      <p className="text-sm text-gray-600">John Doe created an account</p>
                      <p className="text-xs text-gray-500">10 minutes ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold mb-6">Admin Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-6 bg-red-50 hover:bg-red-100 rounded-lg text-center">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <X size={24} className="text-white" />
                  </div>
                  <p className="font-semibold">Delete Business</p>
                </button>
                <button className="p-6 bg-blue-50 hover:bg-blue-100 rounded-lg text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <User size={24} className="text-white" />
                  </div>
                  <p className="font-semibold">Suspend Account</p>
                </button>
                <button className="p-6 bg-gray-50 hover:bg-gray-100 rounded-lg text-center">
                  <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MessageCircle size={24} className="text-white" />
                  </div>
                  <p className="font-semibold">Delete Comment</p>
                </button>
                <button className="p-6 bg-green-50 hover:bg-green-100 rounded-lg text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle size={24} className="text-white" />
                  </div>
                  <p className="font-semibold">Approve Business</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default AdminDashboard;
