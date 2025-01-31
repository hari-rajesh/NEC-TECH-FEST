import React, { useState } from "react";
import { Check } from "lucide-react";

const TagFilter = ({ tags, selectedTags, handleTagClick }) => {
  const [hoveredTag, setHoveredTag] = useState(null);
  let hoverTimer = null;

  const handleMouseEnter = (tag) => {
    setHoveredTag(tag);
  };

  const handleMouseLeave = (tag) => {
    hoverTimer = setTimeout(() => {
      if (hoveredTag === tag) {
        setHoveredTag(null);
      }
    }, 500);
  };

  return (
    <div className="p-4 rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800">
      <h2 className="text-xl font-bold text-white mb-4">Tags</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => {
          const isSelected = selectedTags.includes(tag);
          const isHovered = hoveredTag === tag;

          return (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              onMouseEnter={() => handleMouseEnter(tag)}
              onMouseLeave={() => handleMouseLeave(tag)}
              className={`
                px-3 py-1 text-sm rounded-full transition-all duration-300
                flex items-center gap-1
                ${
                  isSelected
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium border-2 border-violet-400 shadow-lg shadow-violet-500/20"
                    : isHovered
                    ? "bg-gradient-to-r from-gray-700 to-gray-600 text-white border-2 border-gray-500"
                    : "bg-gray-800 text-gray-300 border-2 border-transparent hover:border-gray-600"
                }
              `}
            >
              {isSelected && <Check className="w-3 h-3" />}
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TagFilter;
