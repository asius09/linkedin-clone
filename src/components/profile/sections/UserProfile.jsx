import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Buttons from "../../Buttons";

const UserProfile = () => {
  const [contactInfo, setContactInfo] = useState(true);
  const [portfolio, setPortfolio] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`bg-secondary-bg dark:bg-secondary-bg-dark border border-border dark:border-border-dark shadow-sm w-full ${
        windowWidth <= 768 ? "rounded-none" : "rounded-lg"
      }`}
    >
      <div className="relative">
        <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-700 rounded-t-lg"></div>
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-white absolute -bottom-12 left-4 md:left-6 object-cover"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            className="w-10 h-10 bg-white rounded-full shadow-md hover:bg-gray-100"
            onClick={() => setIsEditMode(!isEditMode)}
          >
            <i className="ri-pencil-line text-gray-700 text-xl"></i>
          </button>
          <button
            className="w-10 h-10 bg-white rounded-full shadow-md hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-gray-700 text-xl"></i>
          </button>
        </div>
      </div>

      {/* User Details */}
      <div className="mt-16 px-6 pb-6 md:px-8 md:pb-8">
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
        <div className="w-full flex items-center justify-start mt-3 flex-wrap gap-2">
          {windowWidth > 768 &&
            profileBtns.map((btn, index) => (
              <Buttons key={index} title={btn.title} variant="hollow">
                {btn.title}
              </Buttons>
            ))}
          {windowWidth <= 768 && (
            <div className="w-full flex items-center justify-start mt-3 flex-wrap gap-2">
              {profileBtns.slice(0, 2).map((btn, index) => (
                <Buttons key={index} title={btn.title} variant="hollow">
                  {btn.title}
                </Buttons>
              ))}
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-input-bg dark:hover:bg-input-bg-dark transition-colors duration-200">
                <i className="ri-more-2-fill text-2xl text-primary-text dark:text-primary-text-dark"></i>
              </button>
            </div>
          )}
        </div>
        {/* End Buttons */}
      </div>
      {/* End User Details */}
    </div>
  );
};

export default UserProfile;
