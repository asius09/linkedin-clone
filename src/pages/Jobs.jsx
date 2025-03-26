import React, { useState } from "react";
import { DropDown } from "../components/form";
import { JobFilter, JobSearch } from "../components/JobsPage";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobFilter, setJobFilter] = useState("all");

  const featuredJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA (Remote)",
      logo: "https://randomuser.me/api/portraits/men/1.jpg",
      isEasyApply: true,
      postedTime: "2 days ago",
      applicants: 56,
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Innovation Labs",
      location: "New York, NY",
      logo: "https://randomuser.me/api/portraits/women/2.jpg",
      isEasyApply: false,
      postedTime: "1 day ago",
      applicants: 87,
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "DataWorks",
      location: "Boston, MA (Hybrid)",
      logo: "https://randomuser.me/api/portraits/men/3.jpg",
      isEasyApply: true,
      postedTime: "3 days ago",
      applicants: 124,
    },
  ];

  return (
    <div className="grid grid-cols-1 px-4 md:px-0 lg:grid-cols-[350px_1fr] gap-5 max-w-7xl mx-auto">
      {/* Left Sidebar - Job Search & Filters */}
      <div className="space-y-4">
        <JobSearch input={searchTerm} setInput={setSearchTerm} />
        <JobFilter />
      </div>

      {/* Main Content - Job Listings */}
      <div className="space-y-4">
        <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg border border-border dark:border-border-dark shadow-sm p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-xl text-primary-text dark:text-primary-text-dark">
              Recommended Jobs
            </h2>
            <div className="flex items-center space-x-2">
              <DropDown
                options={["All Jobs", "Most Recent", "Most Relevant"]}
                selectedOption={jobFilter}
                onSelect={setJobFilter}
              />
            </div>
          </div>

          <div className="space-y-4">
            {featuredJobs.map((job) => (
              <div
                key={job.id}
                className="border-b-1 border-border last:border-0 dark:border-border-dark rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-primary-text dark:text-primary-text-dark mb-1">
                      {job.title}
                    </h3>
                    <p className="text-primary font-medium">{job.company}</p>
                    <p className="text-secondary-text dark:text-secondary-text-dark text-sm">
                      {job.location}
                    </p>
                    <div className="flex items-center mt-2 text-xs text-secondary-text dark:text-secondary-text-dark">
                      <span>{job.postedTime}</span>
                      <span className="mx-2">•</span>
                      <span>{job.applicants} applicants</span>
                    </div>
                  </div>
                  <button
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      job.isEasyApply
                        ? "bg-primary text-white"
                        : "border border-primary text-primary"
                    }`}
                  >
                    {job.isEasyApply ? "Easy Apply" : "Apply"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-center">
            <button className="text-primary font-medium hover:underline">
              Show more jobs
            </button>
          </div>
        </div>

        <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg border border-border dark:border-border-dark shadow-sm p-4">
          <h2 className="font-semibold text-xl mb-4 text-primary-text dark:text-primary-text-dark">
            Job Alerts
          </h2>
          <p className="text-secondary-text dark:text-secondary-text-dark mb-3">
            Get notified when new jobs match your preferences
          </p>
          <button className="bg-primary hover:bg-primary-hover text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
            Create Job Alert
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
