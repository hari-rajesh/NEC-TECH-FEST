import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const floatingAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
    exit: { opacity: 0, y: -20 },
    whileHover: { y: -8 },
    whileInView: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const handleViewDetails = () => {
    if(event.category === "workshops") {
      navigate(`/workshop/${event.title}`);
    } else {
      navigate(`/associations/event/${event.id}`);
    }
  };

  return (
    <motion.div {...floatingAnimation} className="relative group">
      <div className="relative aspect-[4/5] sm:aspect-[3/4]">
        {/* Wave effect container */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-[2rem]">
          <div className="absolute inset-[-4px] rounded-2xl sm:rounded-[2rem] bg-gradient-to-r from-[#ff00ff] to-[#00ffff] opacity-0 group-hover:opacity-100 animate-wave-spin1" />
          <div className="absolute inset-[-4px] rounded-2xl sm:rounded-[2rem] bg-gradient-to-r from-[#00ffff] to-[#ff00ff] opacity-0 group-hover:opacity-75 animate-wave-spin2" />
          <div className="absolute inset-[-4px] rounded-2xl sm:rounded-[2rem] bg-gradient-to-r from-[#ff00ff] to-[#00ffff] opacity-0 group-hover:opacity-50 animate-wave-spin3" />
        </div>

        {/* Main container with dynamic shape */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] p-[2px] rounded-2xl sm:rounded-[2rem] overflow-hidden">
          <div className="w-full h-full relative bg-black rounded-2xl sm:rounded-[2rem] overflow-hidden">
            {/* Curved shape overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
            
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                e.target.src = "/api/placeholder/400/400";
                e.target.onerror = null;
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <button
                  onClick={handleViewDetails}
                  className="px-6 py-3 bg-gradient-to-r from-[#613aeb] to-[#9e00b7] text-white rounded-xl text-sm hover:opacity-90 transition-opacity shadow-lg"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4 className="text-center text-white mt-4 font-semibold">
        {event.name}
      </h4>
    </motion.div>
  );
};

export default EventCard;