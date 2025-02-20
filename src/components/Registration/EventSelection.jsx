import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircleIcon, XCircleIcon, EyeIcon } from "lucide-react";
import { events } from "../../utils/eventData";

const EventSelection = () => {
  const location = useLocation();
  const userData = location.state || {};
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState("");
  const [selectedEventsByTimeSlot, setSelectedEventsByTimeSlot] = useState({});

  const eventSchedule = {
    "Day 1": {
      "9:30 AM - 11:00 AM": [{ id: 9 }, { id: 17 }, { id: 34 }, { id: 36 }, { id: 39 }, { id: 40 }, { id: 42 }, { id: 81 }, { id: 98 }, { id: 99 }, { id: 104 }, { id: 106 }, { id: 108 }, { id: 109 }, { id: 110 }, { id: 111 }, { id: 116 }, { id: 117 }],
      "11:30 AM - 1:30 PM": [{ id: 1 }, { id: 2 }, { id: 48 }, { id: 52 }, { id: 58 }, { id: 84 }, { id: 85 }, { id: 94 }, { id: 95 }, { id: 107 }, { id: 113 }],
      "2:00 PM - 3:30 PM": [{ id: 10 }, { id: 11 }, { id: 18 }, { id: 19 }, { id: 20 }, { id: 51 }, { id: 57 }, { id: 61 }, { id: 62 }, { id: 68 }, { id: 86 }, { id: 87 }, { id: 88 }, { id: 97 }, { id: 72 }, { id: 73 }, { id: 76 }, { id: 77 }, { id: 80 }, { id: 115 }],
      "3:30 PM - 5:00 PM": [{ id: 3 }, { id: 48 }, { id: 49 }, { id: 50 }, { id: 66 }, { id: 67 }, { id: 74 }, { id: 102 }, { id: 101 }],
    },
    "Day 2": {
      "9:30 AM - 11:00 AM": [{ id: 4 }, { id: 5 }, { id: 12 }, { id: 35 }, { id: 37 }, { id: 38 }, { id: 41 }, { id: 43 }, { id: 44 }, { id: 93 }, { id: 82 }, { id: 83 }, { id: 103 }, { id: 112 }, { id: 118 }, { id: 119 }, { id: 120 }],
      "11:30 AM - 1:30 PM": [{ id: 6 }, { id: 7 }, { id: 13 }, { id: 21 }, { id: 45 }, { id: 46 }, { id: 55 }, { id: 63 }, { id: 64 }, { id: 65 }, { id: 69 }, { id: 70 }, { id: 71 }, { id: 89 }, { id: 90 }, { id: 96 }, { id: 100 }, { id: 114 }],
      "2:00 PM - 3:30 PM": [{ id: 8 }, { id: 14 }, { id: 22 }, { id: 47 }, { id: 53 }, { id: 75 }, { id: 78 }, { id: 79 }, { id: 105 }],
      "3:30 PM - 5:00 PM": [{ id: 56 }, { id: 91 }, { id: 92 }],
    },
  };

  const paymentOptions = [
    { label: "Day 1", value: "Day 1", price: 200 },
    { label: "Day 2", value: "Day 2", price: 200 },
    { label: "Day 1 & 2 (both)", value: "Both", price: 300 },
  ];

  const handlePaymentSelection = (event) => {
    setSelectedOption(event.target.value);
    setSelectedEventsByTimeSlot({});
  };

  // Handle selection of one event per time slot (mutual exclusion like radio buttons)
  const handleEventSelection = (eventDetails, day, timeSlot) => {
    setSelectedEventsByTimeSlot(prev => {
      const timeSlotKey = `${day}-${timeSlot}`;
      
      // If clicking the already selected event, deselect it
      if (prev[timeSlotKey]?.id === eventDetails.id) {
        const newState = { ...prev };
        delete newState[timeSlotKey];
        return newState;
      }
      
      // Otherwise, select this event for this time slot (replacing any previous selection)
      return {
        ...prev,
        [timeSlotKey]: eventDetails
      };
    });
  };

  const handleViewEvent = (e, eventId, eventName) => {
    // Prevent the parent div's click handler from being triggered
    e.stopPropagation();
    e.preventDefault();
    
    // Find the event details to check its category
    const eventDetails = events.find(event => event.id === eventId);
    
    if (eventDetails.category === "workshops") {
      // Open workshop page in new tab
      window.open(`/workshop/${encodeURIComponent(eventName)}`, '_blank');
    } else {
      // Default redirection for other event categories in new tab
      window.open(`/associations/event/${eventId}`, '_blank');
    }
  };
  
  

  const handleNext = () => {
    const selectedEvents = Object.values(selectedEventsByTimeSlot);
    userData.selectedOption = selectedOption;
    navigate("/registration/payment", {
      state: { userData, selectedEvents },
    });
  };

  // Helper function to check if an event is selected for a specific time slot
  const isEventSelected = (eventId, day, timeSlot) => {
    const timeSlotKey = `${day}-${timeSlot}`;
    return selectedEventsByTimeSlot[timeSlotKey]?.id === eventId;
  };

  // Get total number of selected events
  const totalSelectedEvents = Object.keys(selectedEventsByTimeSlot).length;

  // Custom checkbox component
  const Checkbox = ({ checked, onChange }) => {
    return (
      <div 
        className={`w-5 h-5 flex-shrink-0 border rounded flex items-center justify-center transition-colors cursor-pointer
          ${checked 
            ? "bg-purple-600 border-purple-400" 
            : "bg-purple-900/30 border-purple-700"}`}
        onClick={onChange}
      >
        {checked && (
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
        )}
      </div>
    );
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#1E0F2D] via-[#2A1B3D] to-[#14092A] text-purple-200 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-purple-100 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
            Event Selection
          </h1>
          <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/30 p-4 rounded-lg border border-purple-800/30">
            <p className="text-lg">
              Welcome, {userData.name || "Participant"}! Choose a <strong>payment option</strong> and select <strong>one event</strong> per time slot.
            </p>
          </div>
        </div>

        {/* Payment Options Table */}
        <div className="mb-6">
          <table className="w-full border border-purple-800 text-purple-100">
            <thead>
              <tr className="bg-purple-900/50">
                <th className="p-3 border border-purple-700">Option</th>
                <th className="p-3 border border-purple-700">Price</th>
                <th className="p-3 border border-purple-700">Select</th>
              </tr>
            </thead>
            <tbody>
              {paymentOptions.map((option) => (
                <tr key={option.value} className="text-center bg-purple-900/30">
                  <td className="p-3 border border-purple-700">{option.label}</td>
                  <td className="p-3 border border-purple-700">₹{option.price}</td>
                  <td className="p-3 border border-purple-700">
                    <input
                      type="radio"
                      name="paymentOption"
                      value={option.value}
                      checked={selectedOption === option.value}
                      onChange={handlePaymentSelection}
                      className="w-5 h-5 accent-purple-500"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Events Based on Payment Selection */}
        {selectedOption && (
          <div className="space-y-6">
            {Object.entries(eventSchedule)
              .filter(([day]) => selectedOption === "Both" || selectedOption === day)
              .map(([day, sessions]) => (
                <motion.div
                  key={day}
                  className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-xl p-6 shadow-lg border border-purple-800/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold mb-4 text-purple-100">{day}</h2>

                  {Object.entries(sessions).map(([timeSlot, sessionEvents]) => {
                    const timeSlotKey = `${day}-${timeSlot}`;
                    const hasSelectionForTimeSlot = !!selectedEventsByTimeSlot[timeSlotKey];
                    
                    return (
                      <div key={timeSlot} className="mb-8">
                        <div className="flex items-center mb-3">
                          <h3 className="text-xl font-semibold text-purple-200">{timeSlot}</h3>
                          {hasSelectionForTimeSlot && (
                            <span className="ml-3 text-xs bg-purple-700/50 px-2 py-1 rounded-full text-purple-100">
                              1 event selected
                            </span>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {sessionEvents.map(({ id }) => {
                            const eventDetails = events.find((e) => e.id === id);
                            if (!eventDetails) return null;
                            
                            const isSelected = isEventSelected(eventDetails.id, day, timeSlot);

                            return (
                              <div className="relative" key={eventDetails.id}>
                                <motion.div
                                  className={`flex items-start p-4 rounded-md border min-h-16 cursor-pointer
                                    ${isSelected 
                                      ? "bg-gradient-to-br from-purple-700/40 to-purple-600/30 border-purple-500" 
                                      : "bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-purple-700"}`}
                                  whileTap={{ scale: 0.98 }}
                                  onClick={() => handleEventSelection(eventDetails, day, timeSlot)}
                                >
                                  {/* Custom Checkbox (visual only) */}
                                  <div className="flex-shrink-0 mr-3 mt-1">
                                    <Checkbox 
                                      checked={isSelected}
                                      onChange={() => handleEventSelection(eventDetails, day, timeSlot)}
                                    />
                                  </div>
                                  
                                  {/* Event Name - Text wrapping enabled */}
                                  <div className="flex-grow">
                                    <p className="text-sm text-purple-100 break-words mr-6">
                                      {eventDetails.name}
                                    </p>
                                  </div>
                                </motion.div>

                                {/* IMPORTANT: Eye button is now absolutely positioned and isolated from parent */}
                                <div 
                                  className="absolute top-0 right-0 p-2" 
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <button
                                    onClick={(e) => handleViewEvent(e, eventDetails.id,eventDetails.name)}
                                    className="text-purple-300 hover:text-purple-100 transition-colors p-2"
                                    aria-label="View event details"
                                  >
                                    <EyeIcon size={18} />
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              ))}
          </div>
        )}

        {/* Confirm Selection Button */}
        <div className="mt-8 flex justify-center">
          <motion.button
            className="px-10 py-4 bg-gradient-to-br from-purple-600 to-purple-900 text-white rounded-xl font-bold
              hover:from-purple-700 hover:to-purple-950 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
              flex items-center space-x-2 border border-purple-500/30"
            onClick={handleNext}
            disabled={totalSelectedEvents < 1}
            whileHover={{ scale: totalSelectedEvents >= 1 ? 1.05 : 1 }}
            whileTap={{ scale: 0.95 }}
          >
            {totalSelectedEvents < 1 ? <XCircleIcon size={24} /> : <CheckCircleIcon size={24} />}
            <span>Confirm Selection ({totalSelectedEvents})</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default EventSelection;