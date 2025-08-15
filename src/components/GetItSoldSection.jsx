import React from 'react';
import getItSold1 from '../assets/get-it-sold1.jpg';
import getItSold2 from '../assets/get-it-sold2.jpg';
import getItSold3 from '../assets/get-it-sold3.jpg';

const GetItSoldSection = () => {
  const properties = [
    {
      id: 1,
      image: getItSold1,
      title: "Luxury Desert Estate",
      description: "This stunning 4-bedroom luxury home in prestigious Pahrump Hills sold in just 15 days! Featuring panoramic mountain views, custom finishes, and a resort-style backyard with pool and spa.",
      price: "$850,000",
      status: "SOLD",
      daysOnMarket: "15 Days",
      features: ["4 Bed", "3.5 Bath", "3,200 sq ft", "Pool & Spa"]
    },
    {
      id: 2,
      image: getItSold2,
      title: "Modern Family Haven",
      description: "A beautiful 3-bedroom family home with open-concept living and upgraded kitchen. Located in a quiet cul-de-sac with excellent schools nearby. Sold above asking price!",
      price: "$425,000",
      status: "SOLD",
      daysOnMarket: "8 Days",
      features: ["3 Bed", "2 Bath", "2,100 sq ft", "2-Car Garage"]
    },
    {
      id: 3,
      image: getItSold3,
      title: "Charming Ranch Style",
      description: "Classic single-story ranch home with large lot and RV parking. Perfect for first-time buyers or those seeking a peaceful desert lifestyle. Sold quickly due to competitive pricing strategy.",
      price: "$320,000",
      status: "SOLD",
      daysOnMarket: "12 Days",
      features: ["2 Bed", "2 Bath", "1,650 sq ft", "RV Parking"]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get It <span className="text-blue-600">SOLD!</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how Marci's proven marketing strategy and local expertise gets properties sold fast! 
            These recent success stories show what dedication and experience can achieve.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Image Container with Overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* SOLD Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg animate-pulse">
                    {property.status}
                  </span>
                </div>
                
                {/* Price Tag */}
                <div className="absolute top-4 right-4">
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg">
                    {property.price}
                  </span>
                </div>
                
                {/* Days on Market - appears on hover */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {property.daysOnMarket}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {property.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {property.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <button className="w-full bg-gray-100 hover:bg-blue-600 text-gray-700 hover:text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-lg">
                  View Success Story
                </button>
              </div>

              {/* Animated Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 rounded-2xl transition-all duration-500"></div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-blue-400 blur-xl -z-10 group-hover:animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetItSoldSection;
