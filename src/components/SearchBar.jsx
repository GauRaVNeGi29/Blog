import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const categories = useSelector((state) => state.blogs.categories);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?s=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  // Handle category navigation
  const handleCategoryClick = (category) => {
    setIsDropdownOpen(false);
    navigate(`/${category.slug}`);
  };

  // Determine dropdown label
  let dropdownLabel = "Blog Categories";

  if (location.pathname.startsWith("/")) {
    const slug = location.pathname.split("/")[1]; // get slug from URL
    const currentCategory = categories.find((c) => c.slug === slug);
    if (currentCategory) dropdownLabel = currentCategory.name;
  }

  return (
    <div className="relative w-full z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-center py-4 px-4 md:px-8">
        {/* Blog Categories / Current Category Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="flex items-center gap-2 font-semibold text-gray-800 hover:text-teal-600 transition cursor-pointer"
          >
            {dropdownLabel}
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
  <motion.div
    key="dropdown"
    initial={{ opacity: 0, y: -15, scaleY: 0.9 }}
    animate={{ opacity: 1, y: 0, scaleY: 1 }}
    exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    className="absolute top-full left-0 mt-3 origin-top bg-white shadow-lg rounded-xl border border-gray-200 p-8 w-[90vw] md:w-[60vw] grid grid-cols-1 md:grid-cols-2 gap-10 z-50"
  >
    {/* Left side: Blog Categories */}
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Blog Categories</h3>
      <div className="grid grid-cols-2 gap-y-3 gap-x-6">
        {categories.map((category) => (
          <button
            key={category.slug}
            onClick={() => handleCategoryClick(category)}
            className="text-left text-gray-800 hover:text-teal-600 font-medium transition-colors cursor-pointer"
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>

    {/* Right side: Trending Tags */}
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Trending Tags</h3>
      <div className="flex flex-wrap gap-3 max-h-[300px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-300">
  {[
    "handmade products",
    "artisan stories",
    "eco-friendly",
    "sustainable living",
    "indian craftsmanship",
    "global marketplace",
    "small business success",
    "import export guide",
    "australian market",
    "cultural connection",
    "cross-border trade",
    "ecommerce trends",
    "shop local support global",
    "handcrafted decor",
    "authentic design",
    "green business"
  ].map((tag) => (
    <button
      key={tag}
      onClick={() =>
        navigate(`/search?s=${encodeURIComponent(tag)}`)
      }
      className="px-4 py-1.5 border border-teal-500 text-teal-600 rounded-full text-sm font-medium hover:bg-teal-50 transition cursor-pointer"
    >
      {tag}
    </button>
  ))}
</div>

    </div>
  </motion.div>
)}
          </AnimatePresence>
        </div>

        {/* Search Input */}
        <form
          onSubmit={handleSearchSubmit}
          className="flex items-center border-b-2 border-gray-600 focus-within:border-teal-600 transition w-full max-w-md ml-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-gray-600 mr-3"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="17" y1="17" x2="21" y2="21" />
          </svg>

          <input
            type="text"
            placeholder="Search Blog"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full outline-none text-gray-700 placeholder-gray-400 bg-transparent py-1"
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
