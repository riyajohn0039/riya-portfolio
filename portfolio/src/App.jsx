import React, { useState, useEffect } from 'react';
import profilePic from './assets/profile.jpg'; // Ensure this matches your file name
import { photoData } from './data';

function App() {
  // 1. STATE: Remember if dark mode is on or off
  const [darkMode, setDarkMode] = useState(false);

  // 2. EFFECT: When 'darkMode' changes, add/remove the "dark" class from the body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    // The main container now has dark mode colors defined (dark:bg-gray-900)
    <div className={`min-h-screen flex flex-col items-center justify-center p-6 font-sans transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      
      {/* THE TOGGLE BUTTON */}
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:scale-110 transition-transform z-50"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

      {/* Main Card */}
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden animate-fade-in-up transition-colors duration-300">
        
        {/* Header Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white flex flex-col items-center text-center">
          <div className="w-32 h-32 mb-4 rounded-full border-4 border-white overflow-hidden shadow-lg">
            <img 
              src={profilePic} 
              alt="Riya John" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-2">Riya John</h1>
          <p className="text-lg opacity-90">Java Developer | React Learner</p>
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Hello! I am a software engineer based in Kerala. Currently bridging the gap 
              between robust Java backends and modern frontend experiences. 
              This website is my playground for learning the full product lifecycle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">My Tech Stack</h2>
            <div className="flex gap-3 flex-wrap">
              {/* We use a helper map here to avoid repeating classes */}
              {['Java', 'Spring Boot', 'React', 'GitHub Actions'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Gallery Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">My Favourites</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {photoData.map((photo) => (
                <div key={photo.id} className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer">
                  <img 
                    src={photo.url} 
                    alt={photo.title} 
                    className="w-full h-48 object-cover transform transition duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
                    <p className="text-white opacity-0 group-hover:opacity-100 font-medium transition duration-300">
                      {photo.title}
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