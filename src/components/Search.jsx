import React from "react";

const Search = ({ placeholder, value, onChange }) => {
  return (
    <div className="relative flex items-center w-full">
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        className="w-full bg-input-bg dark:bg-input-bg-dark rounded-md py-3 px-4 pl-9 text-sm text-primary-text dark:text-primary-text-dark focus:outline-none focus:ring-input-outline dark:focus:ring-input-outline-dark"
      />
      <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 dark:text-gray-400"></i>
    </div>
  );
};

export default Search;
