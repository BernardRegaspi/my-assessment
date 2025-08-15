import React, { useState, useEffect } from 'react';

// Import gallery images
import gallery1 from '../assets/gallery/gallery1.jpg';
import gallery2 from '../assets/gallery/gallery2.jpg';
import gallery3 from '../assets/gallery/gallery3.jpg';
import gallery4 from '../assets/gallery/gallery4.jpg';
import gallery5 from '../assets/gallery/gallery5.jpg';
import gallery6 from '../assets/gallery/gallery6.jpg';
import gallery7 from '../assets/gallery/gallery7.jpg';

const GallerySection = () => {
  const galleryImages = [
    { src: gallery1, alt: 'Beautiful Pahrump Home 1', title: 'Luxury Desert Estate' },
    { src: gallery2, alt: 'Beautiful Pahrump Home 2', title: 'Modern Family Home' },
    { src: gallery3, alt: 'Beautiful Pahrump Home 3', title: 'Cozy Ranch Style' },
    { src: gallery4, alt: 'Beautiful Pahrump Home 4', title: 'Spacious Villa' },
    { src: gallery5, alt: 'Beautiful Pahrump Home 5', title: 'Desert Oasis' },
    { src: gallery6, alt: 'Beautiful Pahrump Home 6', title: 'Mountain View Home' },
    { src: gallery7, alt: 'Beautiful Pahrump Home 7', title: 'Contemporary Design' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // 5 seconds
    }
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, galleryImages.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Property <span className="text-blue-400">Gallery</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our stunning collection of homes in Pahrump and surrounding areas. 
            Each property offers unique features and breathtaking desert views.
          </p>
        </div>

        {/* Main Gallery Container */}
        <div className="relative">
          {/* Image Display */}
          <div className="relative h-96 sm:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-2xl">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentIndex 
                    ? 'opacity-100 transform scale-100' 
                    : 'opacity-0 transform scale-105'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Image Title */}
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 transform transition-all duration-700 delay-300">
                    {image.title}
                  </h3>
                  <div className="w-24 h-1 bg-blue-400 transform transition-all duration-700 delay-500"></div>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Auto-play Toggle */}
            <button
              onClick={toggleAutoPlay}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              {isAutoPlaying ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-400 scale-125 shadow-lg'
                    : 'bg-gray-600 hover:bg-gray-400 hover:scale-110'
                }`}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              />
            ))}
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-8 hidden lg:block">
            <div className="grid grid-cols-7 gap-4">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentIndex
                      ? 'ring-4 ring-blue-400 shadow-xl scale-105'
                      : 'ring-2 ring-gray-600 hover:ring-gray-400 hover:scale-102'
                  }`}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  {index !== currentIndex && (
                    <div className="absolute inset-0 bg-black/40"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className="bg-blue-400 h-full rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / galleryImages.length) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-gray-400 mt-2">
              <span>{currentIndex + 1} of {galleryImages.length}</span>
              {/* <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span> */}
            </div>
          </div>
        </div>

        {/* Gallery Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 text-lg mb-6">
            Want to see more properties or schedule a viewing?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
              View All Properties
            </button>
            <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
              Schedule a Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
