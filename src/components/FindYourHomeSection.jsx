import React, { useState } from 'react';
import property1 from '../assets/properties/property1.jpg';
import property2 from '../assets/properties/property2.jpg';
import property3 from '../assets/properties/property3.jpg';
import property4 from '../assets/properties/property4.jpg';
import property5 from '../assets/properties/property5.jpg';
import property6 from '../assets/properties/property6.jpg';

const FindYourHomeSection = () => {
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    type: '',
    sortBy: 'newest',
    bedrooms: '',
    bathrooms: '',
    minPrice: '',
    maxPrice: '',
    minSqft: '',
    maxSqft: ''
  });

  const handleFilterChange = (key, value) => {
    setSearchFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };


  const sampleProperties = [
    {
      id: 1,
      image: property1,
      title: 'Modern Desert Oasis',
      price: '$485,000',
      location: 'Pahrump Valley, NV',
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 2150,
      type: 'Single Family',
      features: ['Pool', 'Mountain Views', 'Updated Kitchen'],
      daysListed: 5
    },
    {
      id: 2,
      image: property2,
      title: 'Luxury Ranch Estate',
      price: '$675,000',
      location: 'Mountain Falls, Pahrump',
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2850,
      type: 'Ranch',
      features: ['RV Parking', 'Horse Property', 'Workshop'],
      daysListed: 12
    },
    {
      id: 3,
      image: property3,
      title: 'Cozy Starter Home',
      price: '$295,000',
      location: 'Downtown Pahrump',
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1450,
      type: 'Townhouse',
      features: ['Move-in Ready', 'Low Maintenance', 'Community Pool'],
      daysListed: 8
    },
    {
      id: 4,
      image: property4,
      title: 'Spacious Family Home',
      price: '$425,000',
      location: 'Calvada Valley',
      bedrooms: 4,
      bathrooms: 2,
      sqft: 2300,
      type: 'Single Family',
      features: ['Large Lot', 'Garage', 'Covered Patio'],
      daysListed: 3
    },
    {
      id: 5,
      image: property5,
      title: 'Desert View Villa',
      price: '$750,000',
      location: 'Pahrump Hills',
      bedrooms: 5,
      bathrooms: 4,
      sqft: 3200,
      type: 'Villa',
      features: ['Guest House', 'Wine Cellar', 'Tennis Court'],
      daysListed: 15
    },
    {
      id: 6,
      image: property6,
      title: 'Charming Cottage',
      price: '$350,000',
      location: 'Homestead Road',
      bedrooms: 2,
      bathrooms: 1.5,
      sqft: 1200,
      type: 'Cottage',
      features: ['Garden', 'Fireplace', 'Vintage Charm'],
      daysListed: 7
    }
  ];

  return (
    <section id="properties" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Find Your <span className="text-blue-600">Dream Home</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the perfect home in Pahrump and surrounding areas. Use our advanced search 
            to filter properties by your specific needs and preferences.
          </p>
        </div>

        {/* Search Filters */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {/* Location */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Location</label>
              <select 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                value={searchFilters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
              >
                <option value="">All Areas</option>
                <option value="pahrump-valley">Pahrump Valley</option>
                <option value="mountain-falls">Mountain Falls</option>
                <option value="downtown-pahrump">Downtown Pahrump</option>
                <option value="calvada-valley">Calvada Valley</option>
                <option value="pahrump-hills">Pahrump Hills</option>
                <option value="homestead-road">Homestead Road</option>
              </select>
            </div>

            {/* Property Type */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Property Type</label>
              <select 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                value={searchFilters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
              >
                <option value="">All Types</option>
                <option value="single-family">Single Family</option>
                <option value="ranch">Ranch</option>
                <option value="townhouse">Townhouse</option>
                <option value="villa">Villa</option>
                <option value="cottage">Cottage</option>
                <option value="mobile">Mobile Home</option>
              </select>
            </div>

            {/* Bedrooms */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Bedrooms</label>
              <select 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                value={searchFilters.bedrooms}
                onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>

            {/* Bathrooms */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Bathrooms</label>
              <select 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                value={searchFilters.bathrooms}
                onChange={(e) => handleFilterChange('bathrooms', e.target.value)}
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="1.5">1.5+</option>
                <option value="2">2+</option>
                <option value="2.5">2.5+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>

            {/* Sort By */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Sort By</label>
              <select 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                value={searchFilters.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              >
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="sqft-large">Largest First</option>
                <option value="sqft-small">Smallest First</option>
              </select>
            </div>
          </div>

          {/* Price Range */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Min Price</label>
              <select 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                value={searchFilters.minPrice}
                onChange={(e) => handleFilterChange('minPrice', e.target.value)}
              >
                <option value="">No Min</option>
                <option value="200000">$200,000</option>
                <option value="300000">$300,000</option>
                <option value="400000">$400,000</option>
                <option value="500000">$500,000</option>
                <option value="600000">$600,000</option>
                <option value="700000">$700,000</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Max Price</label>
              <select 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                value={searchFilters.maxPrice}
                onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
              >
                <option value="">No Max</option>
                <option value="300000">$300,000</option>
                <option value="400000">$400,000</option>
                <option value="500000">$500,000</option>
                <option value="600000">$600,000</option>
                <option value="700000">$700,000</option>
                <option value="1000000">$1,000,000+</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Min Sq Ft</label>
              <select 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                value={searchFilters.minSqft}
                onChange={(e) => handleFilterChange('minSqft', e.target.value)}
              >
                <option value="">No Min</option>
                <option value="1000">1,000 sq ft</option>
                <option value="1500">1,500 sq ft</option>
                <option value="2000">2,000 sq ft</option>
                <option value="2500">2,500 sq ft</option>
                <option value="3000">3,000 sq ft</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">Max Sq Ft</label>
              <select 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                value={searchFilters.maxSqft}
                onChange={(e) => handleFilterChange('maxSqft', e.target.value)}
              >
                <option value="">No Max</option>
                <option value="1500">1,500 sq ft</option>
                <option value="2000">2,000 sq ft</option>
                <option value="2500">2,500 sq ft</option>
                <option value="3000">3,000 sq ft</option>
                <option value="4000">4,000 sq ft</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="mt-6 flex justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search Properties
            </button>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">6 properties</span> available in your area
            </p>
            <div className="flex items-center space-x-4">
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Save Search
              </button>
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Create Alert
              </button>
            </div>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sampleProperties.map((property) => (
            <div
              key={property.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden"
            >
              {/* Property Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* New Listing Badge */}
                {property.daysListed <= 7 && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                      New
                    </span>
                  </div>
                )}
                
                {/* Days Listed */}
                <div className="absolute top-4 right-4">
                  <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {property.daysListed} days
                  </span>
                </div>

                {/* Heart Icon */}
                <button className="absolute bottom-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-all duration-200 transform hover:scale-110">
                  <svg className="w-5 h-5 text-gray-600 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {property.title}
                  </h3>
                  <span className="text-2xl font-bold text-green-600">
                    {property.price}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {property.location}
                </p>

                {/* Property Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-gray-900">{property.bedrooms}</div>
                    <div className="text-xs text-gray-500 uppercase">Bedrooms</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-gray-900">{property.bathrooms}</div>
                    <div className="text-xs text-gray-500 uppercase">Bathrooms</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-gray-900">{property.sqft.toLocaleString()}</div>
                    <div className="text-xs text-gray-500 uppercase">Sq Ft</div>
                  </div>
                </div>

                {/* Property Type */}
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {property.type}
                  </span>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {property.features.map((feature, index) => (
                      <span key={index} className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-sm">
                    View Details
                  </button>
                  <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-sm">
                    Schedule Tour
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / Pagination */}
        <div className="mt-12 text-center">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-lg transition-all duration-300 mr-4">
            Load More Properties
          </button>
          <p className="text-gray-500 mt-4">Showing 6 of 24 properties</p>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Let Marci help you find the perfect home. With access to exclusive listings and deep local knowledge, 
            she can find properties that match your exact needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Contact Marci
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Custom Home Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindYourHomeSection;
