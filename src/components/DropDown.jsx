import React, { useState, useRef, useEffect } from "react";

const DropDown = ({ options, selectedOption, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full min-w-auto max-w-full" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {selectedOption ? selectedOption : "Select an option"}
        <i className="ri-arrow-down-s-line ml-2" />
      </button>
      {isOpen && (
        <div className="absolute right-1/2 translate-x-1/2 z-50 w-full min-w-56 mt-1 bg-secondary-bg dark:bg-secondary-bg-dark rounded-md shadow-lg text-primary-text dark:text-primary-text-dark border border-border dark:border-border-dark overflow-y-auto max-h-60">
          {options.map((option, index) => (
            <div
              key={index}
              className="block px-4 py-2 text-sm text-secondary-text dark:text-secondary-text-dark hover:bg-primary-bg dark:hover:bg-primary-bg-dark hover:text-primary-text dark:hover:text-primary-text-dark cursor-pointer text-nowrap"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
