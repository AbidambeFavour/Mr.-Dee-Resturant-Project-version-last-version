import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LandingPage = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=1600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1600&h=600&fit=crop'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const recentActivities = [
    { id: 1, user: 'Dee', business: "Dee's Best Bites", rating: 5, time: '5 min ago', avatar: 'https://i.pravatar.cc/150?img=1', images: ['https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400', 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400'] },
    { id: 2, user: 'Mr. Dee', business: "Dee's Best Bites", rating: 4, time: '15 min ago', avatar: 'https://i.pravatar.cc/150?img=12' },
    { id: 3, user: 'Tumi', business: 'Chopstag Restaurant', rating: 5, time: '1 hour ago', avatar: 'https://i.pravatar.cc/150?img=33' },
    { id: 4, user: 'Adna', business: 'StarBoy Eatery', rating: 5, time: '2 hours ago', avatar: 'https://i.pravatar.cc/150?img=44' },
  ];

  const categories = [
    { name: 'Restaurants', icon: '🍽️' },
    { name: 'Beauty and Spa', icon: '💆' },
    { name: 'Shopping', icon: '🛍️' },
    { name: 'Hotels', icon: '🏨' },
    { name: 'Auto Repair', icon: '🔧' },
    { name: 'Cleaning', icon: '🧹' },
    { name: 'Home Services', icon: '🏠' },
    { name: 'Snack Bar', icon: '☕' },
    { name: 'Nightlife', icon: '🌙' },
    { name: 'Games', icon: '🎮' },
    { name: 'Night Club', icon: '🎵' },
    { name: 'More...', icon: '➕' },
  ];

  const popularItems = [
    { name: 'Fries', rating: 4.3, likes: '124k', image: 'https://images.unsplash.com/photo-1598679253544-2c97992403ea?w=400' },
    { name: 'Smoothie', rating: 3.8, likes: '98k', image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400' },
    { name: 'Kpati', rating: 4.2, likes: '156k', image: 'https://images.unsplash.com/photo-1596040033229-a0b55b2a6f50?w=400' },
  ];

  return (
    <div className="min-h-screen bg-pink-50">
      
      
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <img src={img} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-8">
            Experience the BEST bites around you.
          </h1>
          
          <div className="flex gap-3 w-full max-w-2xl">
            <div className="flex-1 flex items-center bg-white rounded-full px-6 py-3">
              <Search size={20} className="text-gray-400 mr-3" />
              <input type="text" placeholder="search" className="flex-1 outline-none" />
            </div>
            <div className="flex items-center bg-white rounded-full px-6 py-3 w-64">
              <MapPin size={20} className="text-gray-400 mr-3" />
              <input type="text" placeholder="location" className="flex-1 outline-none" />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? 'bg-white w-8' : 'bg-white bg-opacity-50'}`}
            />
          ))}
        </div>
      </div>

      {/* Recent Activities */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-2">Recent Activities</h2>
        <p className="text-gray-600 mb-8">Actions performed recently</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-3">
                <img src={activity.avatar} alt={activity.user} className="w-12 h-12 rounded-full" />
                <div className="flex-1">
                  <p className="text-sm"><span className="font-semibold">{activity.user}</span> wrote a review</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={i < activity.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />
                  ))}
                </div>
              </div>
              
              {activity.images && (
                <div className="grid grid-cols-2 gap-2">
                  {activity.images.map((img, idx) => (
                    <img key={idx} src={img} alt="" className="w-full h-32 object-cover rounded-lg" />
                  ))}
                </div>
              )}
              
              <h4 className="font-semibold mt-3">{activity.business}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Categories</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => navigate(`/${cat.name.toLowerCase().replace(/\s+/g, '-')}`)}
              className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-4xl mb-2">{cat.icon}</div>
              <p className="text-sm font-medium">{cat.name}</p>
            </button>
          ))}
        </div>
      </div>


      {/* Popular Items */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Popular Items</h2>
          <p className="text-gray-600 mb-8">Check out trending products</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularItems.map((item, idx) => (
              <div key={idx} className="bg-pink-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{item.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{item.rating} stars</span>
                    </div>
                    <span className="text-sm text-gray-600">{item.likes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      
    </div>
  );
};

export default LandingPage;
