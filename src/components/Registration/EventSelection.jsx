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
  const [selectedEvents, setSelectedEvents] = useState([]);

  const eventSchedule = {
    "Day 1": {
      "9:30 AM - 10:45 AM": [{ id: 9 }, { id: 10 }, { id: 11 }, { id: 14 }, { id: 30 }, { id: 31 }, { id: 33 }, { id: 43 }, { id: 58 }, { id: 61 }, { id: 75 }, { id: 77 }, { id: 89 }, { id: 101 }, { id: 102 }, { id: 112 },{id:117}],
      "11:00 AM - 12:30 PM": [{ id: 12 }, { id: 34 }, { id: 48 }, { id: 62 }, { id: 105 }, { id: 113 }, { id: 104 }],
      "1:15 PM - 3:00 PM": [{ id: 1 }, { id: 2 }, { id: 13 }, { id: 15 }, { id: 16 }, { id: 35 }, { id: 40 }, { id: 45 }, { id: 46 }, { id: 47 }, { id: 63 }, { id: 64 }, { id: 65 }, { id: 81 }, { id: 82 }, { id: 92 }, { id: 93 }, { id: 106 }, { id: 114 }],
      "3:15 PM - 5:00 PM": [{ id: 7 }, { id: 17 }, { id: 24 }, { id: 25 }, { id: 26 }, { id: 27 }, { id: 36 }, { id: 39 }, { id: 44 }, { id: 54 }, { id: 55 }, { id: 69 }, { id: 70 }, { id: 71 }, { id: 80 }, { id: 85 }, { id: 86 }, { id: 94 }, { id: 97 }, { id: 98 }, { id: 108 }, { id: 109 }],
    },
    "Day 2": {
      "9:30 AM - 10:45 AM": [{ id: 3 }, { id: 4 }, { id: 18 }, { id: 22 }, { id: 23 }, { id: 32 }, { id: 59 }, { id: 60 }, { id: 76 }, { id: 78 }, { id: 79 }, { id: 90 }, { id: 91 }, { id: 103 },{id:117}],
      "11:00 AM - 12:30 PM": [{ id: 19 }, { id: 111 },{ id: 115 }],
      "1:15 PM - 3:00 PM": [{ id: 5 }, { id: 6 }, { id: 20 }, { id: 21 }, { id: 28 }, { id: 38 }, { id: 42 }, { id: 49 }, { id: 50 }, { id: 51 }, { id: 52 }, { id: 53 }, { id: 66 }, { id: 67 }, { id: 68 }, { id: 83 }, { id: 84 }, { id: 88 }, { id: 95 }, { id: 96 }, { id: 107 },{ id: 116 }],
      "3:15 PM - 5:00 PM": [{ id: 8 }, { id: 29 }, { id: 37 }, { id: 41 }, { id: 56 }, { id: 57 }, { id: 72 }, { id: 73 }, { id: 74 },{ id: 87 }, { id: 99 }, { id: 100 },{ id: 110 }],
    },
  };

  const paymentOptions = [
    { label: "Day 1", value: "Day 1", price: 200 },
    { label: "Day 2", value: "Day 2", price: 200 },
    { label: "Day 1 & 2 (both)", value: "Both", price: 300 },
  ];

  const handlePaymentSelection = (event) => {
    setSelectedOption(event.target.value);
    setSelectedEvents([]);
  };

  const handleEventSelection = (event) => {
    setSelectedEvents((prev) =>
      prev.some((e) => e.id === event.id)
        ? prev.filter((e) => e.id !== event.id)
        : [...prev, event]
    );
  };

  const handleViewEvent = (eventId) => {
    window.open(`/associations/event/${eventId}`, "_blank");
  };

  const handleNext = () => {
    userData.selectedOption = selectedOption;
    window.scrollTo(0, 0);
    navigate("/registration/payment", {
      state: { userData, selectedEvents },
    });
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
              Welcome, {userData.name || "Participant"}! Choose a <strong>payment option</strong> and then select events.
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

                  {Object.entries(sessions).map(([timeSlot, sessionEvents]) => (
                    <div key={timeSlot} className="mb-4">
                      <h3 className="text-xl font-semibold mb-2 text-purple-200">{timeSlot}</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {sessionEvents.map(({ id }) => {
                          const eventDetails = events.find((e) => e.id === id);
                          if (!eventDetails) return null;

                          const isSelected = selectedEvents.some((e) => e.id === eventDetails.id);

                          return (
                            <motion.div
                              key={eventDetails.id}
                              className="flex justify-between items-center p-3 rounded-md bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-700"
                              whileTap={{ scale: 0.95 }}
                            >
                              {/* Event Selection Radio Button */}
                              <input
                                type="radio"
                                name={timeSlot} 
                                checked={isSelected}
                                onChange={() => handleEventSelection(eventDetails)}
                                className="w-5 h-5 accent-purple-500"
                              />

                              <span
                                className="text-xs text-purple-100 w-full cursor-pointer ml-2 whitespace-normal break-words"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleViewEvent(eventDetails.id);
                                }}
                              >
                                {eventDetails.name}
                              </span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
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
            disabled={selectedEvents.length < 1}
            whileHover={{ scale: selectedEvents.length >= 1 ? 1.05 : 1 }}
            whileTap={{ scale: 0.95 }}
          >
            {selectedEvents.length < 1 ? <XCircleIcon size={24} /> : <CheckCircleIcon size={24} />}
            <span>Confirm Selection ({selectedEvents.length})</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default EventSelection;
