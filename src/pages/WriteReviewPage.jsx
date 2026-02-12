import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Camera } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WriteReviewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Review submitted:', { rating, reviewText });
    navigate(`/business/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-8">
          <div className="flex items-center gap-4 mb-8">
            <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=80" alt="Business" className="w-20 h-20 rounded-lg" />
            <div>
              <h2 className="text-2xl font-bold">StarBoy Eatery</h2>
              <p className="text-gray-600">West Block, Oyster Market</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">How would you rate your experience?</h3>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} type="button" onClick={() => setRating(star)}>
                    <Star size={40} className={star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />
                  </button>
                ))}
              </div>
              {rating > 0 && <p className="text-sm text-gray-600 mt-2">{rating} stars</p>}
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Tell us about your experience</h3>
              <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} placeholder="Start your review" rows={8} className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none" required />
              <p className="text-sm text-gray-500 mt-2">Reviews need to be at least 85 characters.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Add photos and videos</h3>
              <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                <Camera size={48} className="mx-auto text-gray-400 mb-3" />
                <p className="text-gray-600">Drop photos/videos here or click to browse</p>
              </div>
            </div>

            <button type="submit" className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark font-semibold">
              Post Review
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WriteReviewPage;
