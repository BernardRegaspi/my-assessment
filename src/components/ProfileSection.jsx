import React from 'react';

const ProfileSection = () => {
  return (
    <section id="about" className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Column - Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src="/images/profile.jpg"
                alt="Marci Metzger - Professional Realtor"
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] 2xl:w-[32rem] 2xl:h-[32rem] object-cover rounded-full shadow-2xl border-4 border-white"
              />
            </div>
          </div>

          {/* Right Column - Profile Information */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              MARCI METZGER
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-6">
              REALTOR FOR NEARLY 3 DECADES!
            </h3>
            
            {/* Contact Information */}
            <div className="mb-8">
              <a 
                href="tel:206-919-6886" 
                className="inline-flex items-center text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300"
              >
                <svg className="w-6 h-6 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                206-919-6886
              </a>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              With nearly three decades of experience in the Pahrump real estate market, 
              Marci brings unparalleled expertise and local knowledge to every transaction. 
              Her commitment to excellence and personalized service has made her one of the 
              most trusted realtors in the area. Whether you're buying your first home or 
              selling a cherished property, Marci's dedication ensures a smooth and 
              successful experience.
            </p>

            {/* Key Features/Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Local Market Expert</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Personalized Service</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">30+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Proven Track Record</span>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Schedule Consultation
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                View Listings
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
