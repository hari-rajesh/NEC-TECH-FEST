import React from 'react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden py-12 px-4 bg-gradient-to-br from-black via-purple-600/40 to-black text-gray-400">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(117,29,232,0.15),transparent_50%),radial-gradient(circle_at_80%_50%,rgba(209,86,240,0.15),transparent_50%)] blur-[30px] animate-aurora pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex justify-center items-center relative z-10">
        <nav className="flex flex-wrap justify-center gap-10">
          <a href="#" className="text-gray-400 no-underline text-lg px-4 py-2 relative transition-all duration-400 hover:text-white hover:shadow-[0_0_15px_rgba(209,86,240,0.7)] group">
            About Us
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#751de8] to-[#d156f0] transform -translate-x-1/2 transition-all duration-400 group-hover:w-4/5"></span>
          </a>
          <a href="#" className="text-gray-400 no-underline text-lg px-4 py-2 relative transition-all duration-400 hover:text-white hover:shadow-[0_0_15px_rgba(209,86,240,0.7)] group">
            Booking
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#751de8] to-[#d156f0] transform -translate-x-1/2 transition-all duration-400 group-hover:w-4/5"></span>
          </a>
          <a href="#" className="text-gray-400 no-underline text-lg px-4 py-2 relative transition-all duration-400 hover:text-white hover:shadow-[0_0_15px_rgba(209,86,240,0.7)] group">
            Events
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#751de8] to-[#d156f0] transform -translate-x-1/2 transition-all duration-400 group-hover:w-4/5"></span>
          </a>
          <a href="#" className="text-gray-400 no-underline text-lg px-4 py-2 relative transition-all duration-400 hover:text-white hover:shadow-[0_0_15px_rgba(209,86,240,0.7)] group">
            Contact
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#751de8] to-[#d156f0] transform -translate-x-1/2 transition-all duration-400 group-hover:w-4/5"></span>
          </a>
        </nav>
      </div>
      
      <div className="text-center mt-8 relative z-10 pt-4 text-sm text-gray-600">
        <p>&copy; 2025 NEC TECH FEST</p>
      </div>
    </footer>
  );
};

export default Footer;