import React from "react";

const About = ({ section }) => {
  return (
    <div className="bg-secondary-bg dark:bg-secondary-bg-dark shadow-lg rounded-lg p-8 my-2">
      <h2 className="text-2xl font-bold mb-4 text-primary-text dark:text-primary-text-dark">
        {section.title}
      </h2>
      <p className="text-primary-text dark:text-primary-text-dark">
        {section.content}
      </p>
    </div>
  );
};

export default About;
