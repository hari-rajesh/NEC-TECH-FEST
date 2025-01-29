import React from 'react';
import { NumberTicker } from "@/components/ui/number-ticker";

const NumberCounter = () => {
  return (
    <div className="w-full bg-gradient-to-br from-purple-900/20 to-transparent backdrop-blur-sm rounded-xl p-2 md:p-4 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-[0_8px_32px_rgba(31,38,135,0.15)] hover:shadow-[0_8px_32px_rgba(139,92,246,0.3)]">
      <div className="flex flex-row justify-between items-center px-2 md:px-4 gap-2 md:gap-4">
        
        {/* Events Counter */}
        <div className="stat-card transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-out cursor-pointer">
          <div className="flex flex-col items-center p-2 md:p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors shadow-lg hover:shadow-purple-500/20">
            <div className="flex items-baseline font-orbitron">
              <NumberTicker
                className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"
                value={180}
                duration={2000}
              />
              <span className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">+</span>
            </div>
            <span className="text-purple-200 text-xs md:text-lg mt-1 md:mt-2 font-space-grotesk tracking-wider">Events</span>
          </div>
        </div>

        {/* Prize Pool Counter */}
        <div className="stat-card transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-out cursor-pointer">
          <div className="flex flex-col items-center p-2 md:p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors shadow-lg hover:shadow-purple-500/20">
            <div className="flex items-baseline font-orbitron">
              <span className="text-lg md:text-3xl font-bold text-purple-400 mr-1">₹</span>
              <NumberTicker
                className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"
                value={200000}
                duration={100}
              />
            </div>
            <span className="text-purple-200 text-xs md:text-lg mt-1 md:mt-2 font-space-grotesk tracking-wider">Worth Prizes</span>
          </div>
        </div>

        {/* Hackathons Counter */}
        <div className="stat-card transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-out cursor-pointer">
          <div className="flex flex-col items-center p-2 md:p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors shadow-lg hover:shadow-purple-500/20">
            <div className="flex items-baseline font-orbitron">
            <span className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">0</span>
              <NumberTicker
                className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"
                value={8}
                duration={3000}
              />
              <span className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">+</span>
            </div>
            <span className="text-purple-200 text-xs md:text-lg mt-1 md:mt-2 font-space-grotesk tracking-wider">Hackathons</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberCounter;