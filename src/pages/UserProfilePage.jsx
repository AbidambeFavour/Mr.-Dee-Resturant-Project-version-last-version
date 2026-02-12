import React, { useState } from 'react';
import { Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const UserProfilePage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow overflow-hidden sticky top-24">
              <div className="bg-gradient-to-r from-primary to-primary-dark h-24"></div>
              <div className="px-6 pb-6">
                <div className="relative -mt-12 mb-4">
                  <img src="https://i.pravatar.cc/150?img=47" alt="User" className="w-24 h-24 rounded-full border-4 border-white" />
                </div>
                <h2 className="text-xl font-bold mb-1">Small Bimme</h2>
                <p className="text-sm text-gray-600 mb-3">Simbock</p>
                <button className="w-full px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-dark">
                  Add Friend
                </button>
              </div>
              <nav className="border-t">
                {['overview', 'reviews', 'photos', 'friends'].map((tab) => (
                  <button key={tab} onClick={() => setActiveTab(tab)} className={`w-full px-6 py-3 text-left text-sm font-medium ${activeTab === tab ? 'bg-primary-light text-white' : 'hover:bg-gray-50'}`}>
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-2xl font-bold mb-6">Impact</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-4">Reviews reactions</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between"><span>Useful</span><span className="font-semibold">447</span></div>
                        <div className="flex justify-between"><span>Funny</span><span className="font-semibold">100</span></div>
                        <div className="flex justify-between"><span>Cool</span><span className="font-semibold">200</span></div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Stats</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between"><span>Photos</span><span className="font-semibold">189</span></div>
                        <div className="flex justify-between"><span>Friends</span><span className="font-semibold">52</span></div>
                        <div className="flex justify-between"><span>Reviews</span><span className="font-semibold">447</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-2xl font-bold mb-6">Recent Reviews</h3>
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="border-b pb-6">
                      <div className="flex items-start gap-4">
                        <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=80" alt="Business" className="w-20 h-20 rounded-lg" />
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">StarBoy Eatery</h4>
                          <div className="flex mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="text-gray-700">Great food and excellent service!</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'photos' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-2xl font-bold mb-6">Photos and Videos</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(21)].map((_, i) => (
                    <img key={i} src={`https://images.unsplash.com/photo-${1546069901 + i}-ba9599a7e63c?w=300`} alt={`Photo ${i}`} className="w-full h-32 object-cover rounded-lg" />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'friends' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-2xl font-bold mb-6">Friends</h3>
                <div className="grid grid-cols-3 gap-6">
                  {[...Array(24)].map((_, i) => (
                    <div key={i} className="text-center">
                      <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="Friend" className="w-24 h-24 rounded-full mx-auto mb-3" />
                      <h4 className="font-semibold">Guy Stephane</h4>
                      <p className="text-sm text-gray-600">Bastos, Yaoundé</p>
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

export default UserProfilePage;
