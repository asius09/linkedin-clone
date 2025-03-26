import React, { useState } from "react";

const Skills = ({ section }) => {
  const [showAll, setShowAll] = useState(false);
  const skills = section.content;
  const displaySkills = showAll ? skills : skills.slice(0, 5);

  return (
    <div className="bg-secondary-bg dark:bg-secondary-bg-dark shadow rounded-lg p-6 mb-6">
      <div className="w-full flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-primary-text dark:text-primary-text-dark">
          {section.title}
        </h2>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full hover:bg-primary-bg dark:hover:bg-primary-bg-dark transition-colors duration-200 flex items-center justify-center">
            <i className="ri-add-line text-2xl text-secondary-text dark:text-secondary-text-dark"></i>
          </button>
          <button className="w-10 h-10 rounded-full hover:bg-primary-bg dark:hover:bg-primary-bg-dark transition-colors duration-200 flex items-center justify-center">
            <i className="ri-pencil-line text-2xl text-secondary-text dark:text-secondary-text-dark"></i>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {displaySkills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
          >
            {skill}
          </span>
        ))}
      </div>
      {skills.length > 2 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 text-blue-600 hover:underline dark:text-blue-400 w-full cursor-pointer"
        >
          {showAll ? "Show Less" : `See All (${skills.length}) →`}
        </button>
      )}
    </div>
  );
};

export default Skills;
