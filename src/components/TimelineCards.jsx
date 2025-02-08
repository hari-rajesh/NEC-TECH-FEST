import React from 'react';
import { useNavigate } from 'react-router-dom';

export const TimelineCard = ({ title, description, icon }) => {
  const navigate = useNavigate();

  const getNavigationLink = () => {
    switch (title) {
      case "Workshops & Sessions":
        return "/events/workshops";
      case "Technical Events":
        return "/associations/department/computer-science";
      default:
        return null;
    }
  };

  const handleClick = () => {
    const link = getNavigationLink();
    if (link) {
      navigate(link);
    }
  };

  const link = getNavigationLink();

  return (
    <div className="group relative p-4 md:p-6 bg-black/40 rounded-xl transition-all duration-500 
                    hover:bg-gradient-to-br from-purple-900/30 to-transparent
                    hover:scale-105 hover:-translate-y-2 
                    backdrop-blur-sm border border-purple-500/20 
                    hover:border-purple-500/40 
                    shadow-[0_8px_32px_rgba(31,38,135,0.15)] 
                    hover:shadow-[0_8px_32px_rgba(139,92,246,0.3)]
                    before:absolute before:inset-0 before:rounded-xl 
                    before:bg-gradient-to-r before:from-purple-500/20 before:to-transparent 
                    before:opacity-0 before:transition-opacity before:duration-500 
                    hover:before:opacity-100">
      
      <div className="flex flex-col items-center gap-3 md:gap-4 relative z-10">
        <div className="p-3 bg-gradient-to-br from-purple-900 to-purple-700 rounded-full 
                      shadow-lg shadow-purple-500/20 
                      group-hover:shadow-purple-500/40 
                      group-hover:scale-110 transition-all duration-500
                      transform group-hover:rotate-6">
          {icon}
        </div>

        <div className="flex flex-col items-center w-full">
          <h3 className="text-xl md:text-2xl font-orbitron font-bold 
                         bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 
                         text-transparent bg-clip-text 
                         group-hover:bg-gradient-to-r 
                         group-hover:from-purple-300 
                         group-hover:to-pink-300 
                         transition-all duration-300
                         text-center">
            {title}
          </h3>

          <p className="mt-3 md:mt-4 text-sm md:text-base text-purple-200/90 
                        font-space-grotesk leading-relaxed
                        group-hover:text-purple-100
                        transition-colors duration-300
                        text-center">
            {description}
          </p>

          {link && (
            <button 
              onClick={handleClick}
              className="mt-4 opacity-0 group-hover:opacity-100 
                         transition-all duration-300 ease-in-out
                         px-6 py-2 rounded-lg
                         bg-gradient-to-r from-purple-600 to-pink-600
                         hover:from-purple-500 hover:to-pink-500
                         text-white font-space-grotesk text-sm
                         transform translate-y-2 group-hover:translate-y-0
                         shadow-lg hover:shadow-purple-500/50
                         w-fit cursor-pointer">
              View Events
            </button>
          )}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                      rounded-xl pointer-events-none" />
    </div>
  );
};