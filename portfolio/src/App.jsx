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
      
      {/* Footer with Social Icons */}
      <footer className="mt-8 mb-6 flex flex-col items-center space-y-4">
        <div className="flex space-x-6">
          
          {/* GitHub Icon */}
          <a 
            href="https://github.com/riyajohn0039" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors transform hover:scale-110"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>

          {/* LinkedIn Icon */}
          <a 
            href="https://www.linkedin.com/in/riyajohn09/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 transition-colors transform hover:scale-110"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
          </a>

        </div>
        <p className="text-gray-400 text-sm">
          © 2026 Riya John. Built with React & Tailwind.
        </p>
      </footer>
    </div>
  );
}

export default App;