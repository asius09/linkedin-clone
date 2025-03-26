import React, { useRef } from "react";
import { useState } from "react";
import DropDown from "../form/DropDown";

const JobFilter = () => {
  const [selectedDatePosted, setSelectedDatePosted] = useState("Any Time");
  const [selectedExperienceLevel, setSelectedExperienceLevel] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("");

  const datePostedRef = useRef(null);
  const experienceLevelRef = useRef(null);
  const jobTypeRef = useRef(null);

  const handleDatePostedChange = (option) => {
    setSelectedDatePosted(option);
  };

  const handleExperienceLevelChange = (option) => {
    setSelectedExperienceLevel(option);
  };

  const handleJobTypeChange = (option) => {
    setSelectedJobType(option);
  };

  return (
    <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg border border-border dark:border-border-dark shadow-sm p-4">
      <h2 className="font-semibold text-lg mb-3 text-primary-text dark:text-primary-text-dark">
        Job Filters
      </h2>

      <div className="space-y-4">
        <div>
          <h3 className="font-medium text-primary-text dark:text-primary-text-dark mb-2">
            Date Posted
          </h3>
          <DropDown
            ref={datePostedRef}
            options={["Past 24 hours", "Past Week", "Past Month", "Any Time"]}
            selectedOption={selectedDatePosted}
            onSelect={handleDatePostedChange}
          />
        </div>

        <div>
          <h3 className="font-medium text-primary-text dark:text-primary-text-dark mb-2">
            Experience Level
          </h3>
          <DropDown
            ref={experienceLevelRef}
            options={[
              "Internship",
              "Entry level",
              "Associate",
              "Mid-Senior",
              "Director",
            ]}
            selectedOption={selectedExperienceLevel}
            onSelect={handleExperienceLevelChange}
            isMulti
          />
        </div>

        <div>
          <h3 className="font-medium text-primary-text dark:text-primary-text-dark mb-2">
            Job Type
          </h3>
          <DropDown
            ref={jobTypeRef}
            options={[
              "Full-time",
              "Part-time",
              "Contract",
              "Temporary",
              "Volunteer",
              "Internship",
            ]}
            selectedOption={selectedJobType}
            onSelect={handleJobTypeChange}
            isMulti
          />
        </div>
      </div>
    </div>
  );
};

export default JobFilter;
