import React from "react";

const Educations = ({ section }) => {
  return (
    <div className="bg-secondary-bg dark:bg-secondary-bg-dark shadow-lg rounded-lg p-8 my-2">
      <div className="w-full flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-primary-text dark:text-primary-text-dark">
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
      <div className="space-y-6">
        {section.content.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col space-y-1 pb-4 mb-4 border-b border-border dark:border-border-dark last:border-b-0 last:mb-0 last:pb-0"
          >
            <h3 className="text-md font-semibold text-primary-text dark:text-primary-text-dark">
              {edu.school}
            </h3>
            <p className="text-sm text-secondary-text dark:text-secondary-text-dark">
              {edu.degree}
            </p>
            <p className="text-sm text-secondary-text dark:text-secondary-text-dark mb-1">
              {edu.years}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Educations;
