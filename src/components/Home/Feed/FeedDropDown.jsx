import React, { useState } from "react";

const FeedDropDown = ({ options, filter, setFilter }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const filterOptions = options || [
    { id: "recent", label: "Most Recent" },
    { id: "popular", label: "Most Popular" },
    { id: "trending", label: "Trending" },
    { id: "commented", label: "Most Commented" },
  ];

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-2 text-sm text-secondary-text dark:text-secondary-text-dark hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-full transition-colors"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <i className="ri-filter-3-line"></i>
        <span className="text-secondary-text dark:text-secondary-text-dark">
          Sort By
        </span>
        <i
          className={`ri-arrow-down-s-line transition-transform ${
            showDropdown ? "rotate-180" : ""
          }`}
        ></i>
      </button>
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-900 rounded-md shadow-lg z-10 py-1 border border-border dark:border-border-dark overflow-hidden">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              className="w-full text-left px-4 py-3 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center"
              onClick={() => {
                setFilter(option.id);
                setShowDropdown(false);
              }}
            >
              <div
                className={`w-2 h-2 rounded-full mr-3 ${
                  filter === option.id
                    ? "bg-blue-500"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
              ></div>
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeedDropDown;
