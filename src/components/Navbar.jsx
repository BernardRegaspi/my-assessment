import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    if (isOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 500); // Match transition duration
    } else {
      setIsOpen(true);
      setIsAnimating(true);
      // Allow the DOM to update, then start the entrance animation
      setTimeout(() => {
        setIsAnimating(false);
      }, 10); // Small delay to ensure DOM has updated
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'properties', label: 'Properties', href: '#properties' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'gallery', label: 'Gallery', href: '#gallery' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        // Get dynamic navbar height based on screen size
        const getNavHeight = () => {
          if (window.innerWidth >= 768) { // md and up
            return 80;
          } else if (window.innerWidth >= 640) { // sm
            return 72;
          } else { // mobile
            return 64;
          }
        };
        
        const navHeight = getNavHeight();
        const elementPosition = element.offsetTop - navHeight;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
    }
    
    // Close menu after clicking (only if it's open)
    if (isOpen) {
      toggleMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id).filter(id => id !== 'home');
      const scrollPosition = window.scrollY + 100;

      if (scrollPosition < 200) {
        setActiveSection('home');
        return;
      }

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
          {/* Brand */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center focus:outline-none"
            >
              <div>
                <h1 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">MARCI METZGER</h1>
                <p className="text-xs sm:text-xs md:text-sm text-blue-600 font-semibold">THE RIDGE REALTY GROUP</p>
              </div>
            </button>
          </div>

          {/* Desktop Menu - Hidden on mobile and small tablets */}
          <div className="hidden lg:block">
            <div className="ml-6 xl:ml-10 flex items-baseline space-x-4 xl:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 xl:px-4 py-2 rounded-md text-sm xl:text-base font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 xl:px-6 py-2 xl:py-3 rounded-md text-sm xl:text-base font-medium transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Call Now
              </button>
            </div>
          </div>

          {/* Tablet Menu - Visible on medium tablets only */}
          <div className="hidden md:block lg:hidden">
            <div className="ml-4 flex items-baseline space-x-3">
              {/* Show only key navigation items on tablets */}
              {navItems.slice(0, 4).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-2 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button - Hidden on large tablets and desktop */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2 rounded-md transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Sidebar Overlay */}
        {(isOpen || isAnimating) && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <div
              className={`fixed inset-0 transition-opacity duration-300 ease-in-out ${
                isOpen && !isAnimating ? 'bg-black/40 md:bg-black/30' : 'bg-black/0'
              }`}
              onClick={toggleMenu}
            ></div>

            {/* Sidebar - Responsive width and positioning */}
            <div className={`fixed left-0 top-0 h-full w-80 sm:w-96 md:w-80 bg-white shadow-2xl transform transition-all duration-500 ease-in-out ${
              isOpen && !isAnimating ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}>
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">MARCI METZGER</h2>
                  <p className="text-xs sm:text-sm text-blue-600 font-semibold">THE RIDGE REALTY GROUP</p>
                </div>
                <button
                  onClick={toggleMenu}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-2 rounded-md hover:bg-gray-100"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="py-4 sm:py-6 max-h-[calc(100vh-200px)] overflow-y-auto">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-200 border-l-4 hover:pl-6 sm:hover:pl-8 ${
                      activeSection === item.id
                        ? 'text-blue-600 bg-blue-50 border-blue-600 pl-6 sm:pl-8'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50 border-transparent hover:border-blue-200'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Contact Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gray-50 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-3">Ready to get started?</p>
                  <div className="space-y-2">
                    <button 
                      onClick={() => {
                        scrollToSection('contact');
                        window.open('tel:(206) 919-6886', '_self');
                      }}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
                    >
                      Call (206) 919-6886
                    </button>
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
