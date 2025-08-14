import React from 'react';
import bgImage from '../assets/bg-image.jpeg';

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-gray-900"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Hero content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Find Your Perfect
          <span className="block text-blue-400">Home in Pahrump</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-200">
          Discover your dream home in the heart of Nevada's beautiful desert landscape. 
          From cozy starter homes to luxury estates, let Marci guide you home.
        </p>
        
        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Browse Properties
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
            Contact Marci
          </button>
        </div>
        
        {/* Real Estate Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-300">Homes Sold</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-2">15+</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-300">Years Experience</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-2">98%</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-300">Client Satisfaction</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
