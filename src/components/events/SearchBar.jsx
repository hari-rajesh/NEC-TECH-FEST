import { Search } from "lucide-react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search events, categories, or tags..."
        className="w-full p-3 pl-10 rounded-lg bg-[#0d0c0c] text-white border border-[#17141d] focus:outline-none focus:border-[#613aeb]"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Search className="absolute left-3 top-3 text-gray-400" size={20} />
    </div>
  );
};

export default SearchBar;
