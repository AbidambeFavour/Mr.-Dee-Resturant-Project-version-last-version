import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Apple } from 'lucide-react';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', email, password);
    navigate('/');
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Transparent Form */}
      <div className="relative z-10 glass-effect rounded-2xl p-8 w-full max-w-md shadow-2xl animate-slide-up">
        {/* Logo */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin size={32} className="text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            One <span className="text-primary">Platform</span> Promoting
          </h2>
          <h3 className="text-2xl font-bold mb-2">
            African <span className="text-primary">food</span> Across Cameroon
          </h3>
          <p className="text-gray-600">
            Meet and enjoy your experience with others across the food space of cameroon
          </p>
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email Address"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary bg-white"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Passwords</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Passwords"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary bg-white"
          />
        </div>

        {/* Confirm Password Input */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2">Confirm Passwords</label>
          <input
            type="password"
            placeholder="Enter your Passwords again"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary bg-white"
          />
        </div>

        {/* Login Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-lg transition-colors mb-6"
        >
          Log In
        </button>

        {/* Sign In Link */}
        <p className="text-center text-sm text-gray-700 mb-6">
          Already have an account?{' '}
          <button onClick={() => navigate('/signup')} className="text-blue-600 hover:underline font-medium">
            Sign In
          </button>
        </p>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">Or Continue with Google</span>
          </div>
        </div>

        {/* Social Login Buttons */}
        <div className="flex justify-center gap-6">
          <button className="w-14 h-14 bg-white rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <Apple size={28} />
          </button>
          <button className="w-14 h-14 bg-white rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"/>
              <path fill="#34A853" d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"/>
              <path fill="#4A90E2" d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"/>
              <path fill="#FBBC05" d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"/>
            </svg>
          </button>
          <button className="w-14 h-14 bg-white rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
