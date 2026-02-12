import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Heart, Play } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RestaurantsPage = ({ category = 'restaurants' }) => {
  const navigate = useNavigate();
  
  const businesses = [
    { id: 1, name: 'Tume Burger', category: 'African Location, Fast Food', rating: 4.6, reviews: 234, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400', description: "Such a lovely place. My friends and I had the most pleasant time here" },
    { id: 2, name: 'African Best', category: 'African Location', rating: 4.7, reviews: 178, image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400', description: "Such a lovely place. My friends and I had the most pleasant time here" },
    { id: 3, name: 'Achu Fish', category: 'Restaurants', rating: 4.2, reviews: 89, image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400', description: "Such a lovely place. My friends and I had the most pleasant time here" },
    { id: 4, name: "Dee's Burger", category: 'Burgers, Fast Food', rating: 4.9, reviews: 445, image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400', description: "Such a lovely place. My friends and I had the most pleasant time here" },
    { id: 5, name: "Dee's Burger", category: 'Burgers, Fast Food', rating: 4.8, reviews: 356, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400', description: "Such a lovely place. My friends and I had the most pleasant time here" },
  ];

  return (
    <div className="min-h-screen bg-pink-50">
      
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Top 10 Restaurants in Yaoundé</h1>
          <div>
            <label className="text-sm font-medium mr-2">Sort By:</label>
            <select className="px-4 py-2 border rounded-lg">
              <option>Recommended</option>
              <option>Highest Rated</option>
              <option>Most Reviewed</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {businesses.map((business) => (
            <div key={business.id} className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow flex gap-4 cursor-pointer" onClick={() => navigate(`/business/${business.id}`)}>
              <div className="relative w-32 h-32 flex-shrink-0">
                <img src={business.image} alt={business.name} className="w-full h-full object-cover rounded-lg" />
                <button className="absolute top-2 left-2 bg-white rounded-full p-1.5 shadow">
                  <Heart size={16} className="text-gray-600" />
                </button>
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">{business.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className={i < Math.floor(business.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{business.rating}</span>
                  <span className="text-sm text-gray-500">({business.reviews} reviews)</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{business.category}</p>
                <p className="text-sm text-gray-700">{business.description}</p>
                <div className="flex gap-2 mt-3">
                  <button className="px-4 py-1.5 border border-gray-300 rounded-full text-sm hover:bg-gray-50">WhatsApp</button>
                  <button className="px-4 py-1.5 bg-primary text-white rounded-full text-sm hover:bg-primary-dark">Website</button>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <button className="p-2 hover:bg-gray-100 rounded"><Star size={20} /></button>
                <button className="p-2 hover:bg-gray-100 rounded"><Play size={20} /></button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mt-12">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((page) => (
            <button key={page} className={`w-8 h-8 rounded ${page === 1 ? 'bg-primary text-white' : 'bg-white hover:bg-gray-100'}`}>
              {page}
            </button>
          ))}
          <button className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark">Next Page</button>
        </div>
      </div>

      
    </div>
  );
};

export default RestaurantsPage;
