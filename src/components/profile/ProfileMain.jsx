import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import Buttons from "../ui/Buttons";
import UserAvatar from "../common/UserAvatar";

const UserProfile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

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
        <div className="h-52 bg-gradient-to-r from-primary/80 to-primary rounded-t-lg"></div>

        <UserAvatar
          size={150}
          iconSize={6}
          imgURL={currentUser?.avatar || ""}
          className="absolute top-28 left-6 border-2 border-primary-text dark:border-primary-text-dark"
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
            <h1 className="text-2xl md:text-3xl font-bold text-primary-text dark:text-primary-text-dark">
              {currentUser?.name || ""}
            </h1>
            <p className="text-secondary-text dark:text-secondary-text-dark">
              {currentUser?.role || ""}
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
              <span aria-hidden="true">{currentUser?.location || ""}</span>
            </address>
            {currentUser?.contactInfo && (
              <Link
                to="/contact-info"
                className="text-primary dark:text-primary-text-dark font-bold text-md hover:underline"
                aria-label="View contact information"
              >
                Contact info
              </Link>
            )}
          </div>
          {currentUser?.portfolio && (
            <a
              href={currentUser?.portfolio || ""}
              className="block font-bold text-primary hover:underline text-md"
              aria-label="GitHub profile"
            >
              {currentUser?.portfolio || ""}
            </a>
          )}

          <a
            href="#connections"
            className="flex items-center font-bold text-primary hover:underline cursor-pointer"
            aria-label="1,543 connections"
          >
            {currentUser?.connections || "0"} connections
          </a>
        </div>
        {/* End Contact Info */}

        {/* Buttons */}
        <div className="w-full flex items-center justify-start mt-3 flex-wrap gap-2">
          {windowWidth > 768 &&
            profileBtns.map((btn, index) => (
              <Buttons
                key={index}
                title={btn.title}
                variant="hollow"
                className="px-4 py-2"
              >
                {btn.title}
              </Buttons>
            ))}
          {windowWidth <= 768 && (
            <div className="w-full flex items-center justify-start mt-3 flex-wrap gap-2">
              {profileBtns.slice(0, 2).map((btn, index) => (
                <Buttons
                  key={index}
                  title={btn.title}
                  variant="hollow"
                  className="px-4 py-2"
                >
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
