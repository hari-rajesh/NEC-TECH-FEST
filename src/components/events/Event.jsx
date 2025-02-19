import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HeroSection from "./HeroSection";
import SearchBar from "./SearchBar";
import TagFilter from "./TagFilter";
import EventGrid from "./EventGrid";
import { useEvents } from "../../utils/eventData";
import { Navbar } from "../Navbar/Navbar";
import { ArrowLeft } from "lucide-react";

const Event = () => {
  const {  eventType } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);
  const { events, tags } = useEvents();

 
  const filterEvents = () => {
    return events.filter((event) => {
      // Handle category-specific events (non-tech, etc.)
      const matchesCategory = eventType ? event.category.toLowerCase() === eventType.toLowerCase() : true;

      const matchesSearch =
        event.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event?.description?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTag = 
        !selectedTag || 
        event.tags?.includes(selectedTag) || 
        event.organizer === selectedTag;

      return matchesCategory && matchesSearch && matchesTag;
    });
  };

  const getRelevantTags = () => {
    return tags[eventType];
  };

  const filteredEvents = filterEvents();

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTag(null);
  };

  const getHeroHeading = () => {
    if (eventType) {
      return `${eventType.charAt(0).toUpperCase() + eventType.slice(1)} Events`;
    }
    return "Events";
  };

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <div className="relative z-10 bg-gradient-to-br from-purple-600/20 via-transparent to-violet-500/20">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="fixed top-4 left-4 z-50 flex items-center gap-2 text-white hover:text-purple-300 transition-colors duration-300 mb-4 font-['Orbitron'] tracking-widest"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </button>

        <HeroSection title={getHeroHeading()} />
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col-reverse lg:flex-row gap-8">
            <div className="lg:w-3/4">
              <EventGrid filteredEvents={filteredEvents} />
            </div>
            <div className="lg:w-1/4 space-y-6">
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              {(searchQuery || selectedTag) && (
                <button
                  onClick={clearFilters}
                  className="w-full p-2 rounded bg-[#613aeb] text-white hover:bg-[#4f2ec7] transition-colors"
                >
                  Clear All Filters
                </button>
              )}
              <TagFilter
                tags={getRelevantTags()}
                selectedTag={selectedTag}
                onChange={setSelectedTag}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;