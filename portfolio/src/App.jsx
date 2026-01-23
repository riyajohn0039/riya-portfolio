import React from 'react';
import profilePic from './assets/profile.jpg'; 
import { photoData } from './data';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-gray-800 font-sans">
      
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl overflow-hidden animate-fade-in-up">
        
        {/* Header Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white flex flex-col items-center text-center">
          
          {/* PROFILE IMAGE */}
          <div className="w-32 h-32 mb-4 rounded-full border-4 border-white overflow-hidden shadow-lg">
            <img 
              src={profilePic} 
              alt="Riya John" 
              className="w-full h-full object-cover"
              // If you have NO photo, delete "src={profilePic}" and paste this URL inside src:
              // "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya"
            />
          </div>

          <h1 className="text-4xl font-bold mb-2">Riya John</h1>
          <p className="text-lg opacity-90">Java Developer | React Learner</p>
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-2">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
              Hello! I am a software engineer based in Kerala. Currently bridging the gap 
              between robust Java backends and modern frontend experiences. 
              This website is my playground for learning the full product lifecycle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-2">My Tech Stack</h2>
            <div className="flex gap-3 flex-wrap">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Java</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Spring Boot</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">React</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">GitHub Actions</span>
            </div>
          </section>
          {/* Gallery Section - Generating HTML from Data */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-2">My Favourites</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* This 'map' function is how React loops through data */}
              {photoData.map((photo) => (
                <div key={photo.id} className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer">
                  
                  {/* The Image from the Cloud URL */}
                  <img 
                    src={photo.url} 
                    alt={photo.desc} 
                    className="w-full h-48 object-cover transform transition duration-300 group-hover:scale-110"
                  />
                  
                  {/* The Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
                    <p className="text-white opacity-0 group-hover:opacity-100 font-medium transition duration-300">
                      
                    </p>
                  </div>
                  
                </div>
              ))}
              
            </div>
          </section>
        </div>

      </div>
      
      <footer className="mt-8 text-gray-400 text-sm">
        © 2026 Riya John. Built with React & Tailwind.
      </footer>
    </div>
  );
}

export default App;