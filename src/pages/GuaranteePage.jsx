import React from 'react';
import { MapPin, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GuaranteePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <MapPin size={64} className="mx-auto mb-6" />
          <div className="inline-block bg-white text-gray-900 px-6 py-2 rounded-full font-semibold mb-6">
            LocalLynk Guaranteed
          </div>
          <h1 className="text-5xl font-bold mb-4">Hire Pros Backed by us</h1>
          <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100">
            Get started
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">We've got you covered</h2>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-16">
          {[
            { title: 'substandard', description: "You weren't satisfied with the work" },
            { title: 'Damages', description: 'You suffered any damages or loss at the hands of your guaranteed pro' },
            { title: 'Added Costs', description: 'You were charged fees outside the scope of your guaranteed quote' }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-8 text-center">
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Start your next project with<br />LocalLynk Guaranteed Coverage
          </h2>

          <div className="max-w-2xl mx-auto space-y-8">
            <div className="bg-gray-50 rounded-lg p-8 flex items-center gap-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle size={40} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Look for Pros with verified badges</h3>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold">
                Hire the business through Request a Quote or LocalLynk Assistant.
              </h3>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GuaranteePage;
