import React, { useState } from "react";
import { Link } from "react-router";

const UserProfile = () => {
  const [contactInfo, setContactInfo] = useState(true);
  const [portfolio, setPortfolio] = useState(true);
  const profileBtns = [
    {
      title: "Open to",
    },
    {
      title: "Add Profile section",
    },
    {
      title: "Enhance profile",
    },
    {
      title: "Resources",
    },
  ];

  return (
    <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg border border-border dark:border-border-dark shadow-sm">
      <div className="relative">
        <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-700 rounded-t-lg"></div>
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-white absolute -bottom-16 left-6 object-cover"
        />
        <button
          className="w-12 h-12 absolute right-4 top-4 bg-white rounded-full shadow-md hover:bg-gray-100"
          onClick={() => setIsEditMode(!isEditMode)}
        >
          <i className="ri-pencil-line text-gray-700 text-xl"></i>
        </button>
      </div>

      {/* User Details */}
      <div className="mt-18 px-6 pb-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-primary-text dark:text-primary-text-dark">
              Amilly Johnson
            </h1>
            <p className="text-secondary-text dark:text-secondary-text-dark">
              Senior Product Designer at Design Co.
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-4 text-sm text-secondary-text dark:text-secondary-text-dark flex flex-col gap-y-1">
          <div className="flex items-center gap-0.5">
            <address
              className="flex items-center gap-1 not-italic"
              aria-label="Location"
            >
              <span aria-hidden="true">San Francisco, California</span>
            </address>
            <span className="text-gray-400" aria-hidden="true">
              •
            </span>
            {contactInfo && (
              <Link
                to="/contact-info"
                className="text-primary dark:text-primary-text-dark font-bold text-md hover:underline"
                aria-label="View contact information"
              >
                Contact info
              </Link>
            )}
          </div>
          {portfolio && (
            <a
              href="https://github.com/asius09"
              className="block font-bold text-primary hover:underline text-md"
              aria-label="GitHub profile"
            >
              github.com/asius09
            </a>
          )}

          <a
            href="#connections"
            className="flex items-center font-bold text-primary hover:underline cursor-pointer"
            aria-label="1,543 connections"
          >
            1,543 connections
          </a>
        </div>
        {/* End Contact Info */}

        {/* Buttons */}
        <div className="flex items-center justify-start mt-3">
          {profileBtns.map((btn, index) => (
            <button
              key={index}
              className={`${
                btn.title === "Open to"
                  ? "bg-primary hover:bg-primary/80 text-white"
                  : "border border-primary text-primary hover:bg-primary/20"
              } px-4 py-2 rounded-full font-medium mr-2`}
            >
              {btn.title}
            </button>
          ))}
        </div>
        {/* End Buttons */}
      </div>
      {/* End User Details */}
    </div>
  );
};

export default UserProfile;
