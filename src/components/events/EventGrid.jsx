// EventGrid.jsx
import { motion, AnimatePresence } from "framer-motion";
import EventCard from "./EventCard";

const EventGrid = ({ filteredEvents }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50,
      rotateX: -30
    },
    show: { 
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      y: -50,
      rotateX: 30,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="relative overflow-hidden py-8"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mx-3">
        <AnimatePresence mode="popLayout">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              layout
              variants={itemVariants}
              style={{
                perspective: 1000
              }}
            >
              <EventCard event={event} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {filteredEvents.length === 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <div className="text-gray-400 text-lg font-medium">No events found</div>
          <div className="text-gray-600 mt-2">Try adjusting your filters</div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default EventGrid;

