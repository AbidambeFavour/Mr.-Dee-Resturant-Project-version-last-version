import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  const services = ['Contractors', 'Electricians', 'Flooring', 'Handyman', 'Home Cleaning', 'Painters', 'Plumbers', 'Pest Control', 'Movers'];
  const projects = [
    { title: 'Optimize the heart of your home', description: 'Find kitchen experts', image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=400' },
    { title: 'Spruce up your curb appeal', description: 'Find landscapers', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400' },
    { title: 'Create a luxury bathroom', description: 'Find bathroom pros', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Abanji's Projects</h1>
          <p className="text-gray-600">Hire a local professional today</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex overflow-x-auto gap-4 pb-4">
            {services.map((service) => (
              <button key={service} className="px-6 py-3 bg-white rounded-lg border hover:border-primary whitespace-nowrap font-medium">
                {service}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">What else do you have to do?</h2>
          <div className="grid grid-cols-3 gap-6">
            {['Home Cleaning', 'Carpenter', 'Yard Cleaners'].map((project) => (
              <div key={project} className="bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold mb-4">{project}</h3>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-dark">Start Project</button>
                  <button className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50">Add to plan</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Project Ideas</h2>
          <div className="grid grid-cols-4 gap-6">
            {projects.concat(projects).map((project, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{project.title}</h3>
                  <button className="text-sm text-primary hover:underline font-medium">{project.description}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
