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
  const { department, eventType } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const { events, tags, departments } = useEvents();

  // Convert URL department name to proper format
  const getDepartmentName = () => {
    if (!department) return null;
    // Find the matching department from our departments list
    const dept = departments.find(d => d.id === department);
    return dept ? dept.name : department;
  };

  const filterEvents = () => {
    return events.filter((event) => {
      const deptName = getDepartmentName();

      // Handle department-specific events
      const matchesDept = department ? event.department === deptName : true;

      // Handle category-specific events (non-tech, etc.)
      const matchesCategory = eventType ? event.category.toLowerCase() === eventType.toLowerCase() : true;

      const matchesSearch =
        event.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event?.description?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => event.tags?.includes(tag)) ||
        selectedTags.every((tag) => event.organizer === tag);

      return matchesDept && matchesCategory && matchesSearch && matchesTags;
    });
  };

  const getRelevantTags = () => {
    const deptName = getDepartmentName();
      return tags[deptName || eventType ];

  };

  const filteredEvents = filterEvents();

  const handleTagClick = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
  };

  const getHeroHeading = () => {
    if (department) {
      const deptName = getDepartmentName();
      return `${deptName} Events`;
    }
    if (eventType) {
      return `${eventType.charAt(0).toUpperCase() + eventType.slice(1)} Events`;
    }
    return "Events";
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <div className="relative z-10 bg-gradient-to-br from-purple-600/20 via-transparent to-violet-500/20">
        {/* Back Button */}
        <button
          onClick={handleBack}
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
              {(searchQuery || selectedTags.length > 0) && (
                <button
                  onClick={clearFilters}
                  className="w-full p-2 rounded bg-[#613aeb] text-white hover:bg-[#4f2ec7] transition-colors"
                >
                  Clear All Filters
                </button>
              )}
              <TagFilter
                tags={getRelevantTags()}
                selectedTags={selectedTags}
                handleTagClick={handleTagClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
