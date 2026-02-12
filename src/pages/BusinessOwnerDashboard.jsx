import React, { useState } from 'react';
import { Plus, Clock, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BusinessOwnerDashboard = () => {
  const [activeTab, setActiveTab] = useState('images');

  const tabs = ['images', 'hours', 'services', 'contacts', 'reviews', 'favorites', 'verification'];

  return (
    <div className="min-h-screen bg-pink-50">
      
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-8 mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Manage Your Business Profile</h1>
          <p className="text-gray-600 mb-6">Update your business information</p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50">View Analytics</button>
            <button className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark">Edit Profile</button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="border-b">
            <nav className="flex overflow-x-auto">
              {tabs.map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-4 font-medium whitespace-nowrap ${activeTab === tab ? 'border-b-2 border-primary text-primary' : 'text-gray-600'}`}>
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {activeTab === 'images' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Uploaded Images</h2>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark flex items-center gap-2">
                    <Plus size={20} /> Upload Image
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-pink-50 rounded-lg overflow-hidden">
                      <img src={`https://images.unsplash.com/photo-${1565299624946 + i}-b28f40a0ae38?w=400`} alt={`Image ${i}`} className="w-full h-48 object-cover" />
                      <div className="p-4">
                        <p className="font-semibold">Image {i}</p>
                        <p className="text-sm text-gray-600">Uploaded on 25 Jan 2023</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'hours' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Operation Hours</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-pink-50 rounded-lg p-6 flex items-center gap-4">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                      <Clock size={32} className="text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Monday - Friday</h3>
                      <p className="text-gray-700">9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-6 flex items-center gap-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <Clock size={32} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Saturday</h3>
                      <p className="text-gray-700">10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'services' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Services Offered</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-pink-50 rounded-lg p-6">
                    <h3 className="font-bold mb-2">Catering Services</h3>
                    <p className="text-gray-700">Available for events and parties</p>
                    <button className="mt-4 px-4 py-2 border border-gray-300 rounded-full hover:bg-white">Update</button>
                  </div>
                  <div className="bg-pink-50 rounded-lg p-6">
                    <h3 className="font-bold mb-2">Private Dining</h3>
                    <p className="text-gray-700">Book for special occasions</p>
                    <button className="mt-4 px-4 py-2 border border-gray-300 rounded-full hover:bg-white">Update</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'favorites' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Favorites</h2>
                <div className="grid grid-cols-2 gap-6">
                  {[1, 2].map((i) => (
                    <div key={i} className="bg-pink-50 rounded-lg p-6 text-center">
                      <Heart size={48} className="mx-auto text-red-500 mb-4" />
                      <h3 className="font-bold mb-2">User {i}</h3>
                      <p className="text-gray-700 mb-4">Favorited your business</p>
                      <button className="px-4 py-2 border border-gray-300 rounded-full hover:bg-white">View Profile</button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default BusinessOwnerDashboard;
