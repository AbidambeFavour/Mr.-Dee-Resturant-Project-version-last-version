import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

// Import all pages from pages folder
import LandingPage from './pages/LandingPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import RestaurantsPage from './pages/RestaurantsPage.jsx';
import BusinessDetailPage from './pages/BusinessDetailPage.jsx';
import UserProfilePage from './pages/UserProfilePage.jsx';
import WriteReviewPage from './pages/WriteReviewPage.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import BusinessOwnerDashboard from './pages/BusinessOwnerDashboard.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import GuaranteePage from './pages/GuaranteePage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/spa" element={<RestaurantsPage category="spa" />} />
        <Route path="/cleaning" element={<RestaurantsPage category="cleaning" />} />
        <Route path="/auto-services" element={<RestaurantsPage category="auto" />} />
        <Route path="/business/:id" element={<BusinessDetailPage />} />
        <Route path="/business/:id/review" element={<WriteReviewPage />} />
        <Route path="/profile/:id" element={<UserProfilePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/business-owner" element={<BusinessOwnerDashboard />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/guarantee" element={<GuaranteePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
