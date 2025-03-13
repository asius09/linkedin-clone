import React from "react";

const Experience = ({ section }) => {
  return (
    <div className="bg-secondary-bg dark:bg-secondary-bg-dark shadow-lg rounded-lg p-8 my-2">
      <div className="w-full flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-primary-text dark:text-primary-text-dark">
          {section.title}
        </h2>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full hover:bg-primary-bg dark:hover:bg-primary-bg-dark transition-colors duration-200 flex items-center justify-center">
            <i className="ri-add-line text-2xl text-secondary-text dark:text-secondary-text-dark"></i>
          </button>
          <button className="w-10 h-10 rounded-full hover:bg-primary-bg dark:hover:bg-primary-bg-dark transition-colors duration-200 flex items-center justify-center">
            <i className="ri-pencil-line text-2xl text-gray-600 dark:text-gray-400"></i>
          </button>
        </div>
      </div>
      <div>
        {section.content.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center justify-between py-3 border-b border-border dark:border-border-dark last:border-b-0"
          >
            <div className="flex flex-col items-start justify-start">
              <h3 className="text-xl font-semibold text-primary-text dark:text-primary-text-dark">
                {exp.title}
              </h3>
              <p className="text-sm text-primary-text dark:text-primary-text-dark">
                {exp.company} •{" "}
                <span className="font-semibold text-primary-text dark:text-primary-text-dark">
                  Full Time
                </span>
              </p>
              <p className="text-sm text-secondary-text dark:text-secondary-text-dark">
                {exp.duration}
              </p>
              <p className=" text-sm text-secondary-text dark:text-secondary-text-dark">
                {exp.location} • {exp.mode}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
