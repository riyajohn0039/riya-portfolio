import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-gray-800 font-sans">
      
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white text-center">
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
        </div>

      </div>
      
      <footer className="mt-8 text-gray-400 text-sm">
        © 2026 Riya John. Built with React & Tailwind.
      </footer>
    </div>
  );
}

export default App;