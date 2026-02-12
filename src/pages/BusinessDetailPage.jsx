import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Phone, Mail, MapPin, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BusinessDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const business = {
    name: 'StarBoy Eatery',
    rating: 4.5,
    reviews: 312,
    category: 'Restaurants',
    location: 'West Block, Oyster Market',
    phone: '+237 678853198',
    email: 'info@starboyeatery.com',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800',
    hours: {
      monday: '8:00 AM - 12:00 AM',
      saturday: '8:00 AM - 12:00 AM',
    },
    amenities: ['Offers delivery services', 'Offers take-out', 'Takes reservation']
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="relative h-80 bg-gray-900">
        <img src={business.image} alt={business.name} className="w-full h-full object-cover opacity-75" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white bg-gradient-to-t from-black">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">{business.name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className={i < Math.floor(business.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'} />
                ))}
                <span className="ml-2 font-semibold">{business.rating}</span>
                <span className="text-gray-300">({business.reviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-4 mb-6 flex gap-3">
              <button onClick={() => navigate(`/business/${id}/review`)} className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark">
                Write a review
              </button>
              <button className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50">Add photos</button>
              <button className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50">Share</button>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">About the business</h3>
              <p className="text-gray-700">Such a lovely place. My friends and I had the most pleasant time here. The food was amazing and the service was excellent!</p>
            </div>

            {business.hours && (
              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Location and Hours</h3>
                <div className="space-y-2">
                  {Object.entries(business.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between py-2 border-b">
                      <span className="font-medium capitalize">{day}</span>
                      <span className="text-gray-600">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {business.amenities && (
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-4">Amenities and More</h3>
                <div className="space-y-2">
                  {business.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="bg-white rounded-lg shadow p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primary" />
                  <span>{business.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary" />
                  <span className="break-all">{business.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-primary" />
                  <span>{business.location}</span>
                </div>
              </div>
              <button className="w-full mt-4 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark">
                Message the business
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BusinessDetailPage;
