import React, { useEffect, useRef } from "react";
import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { setIsProfileCardOpen } from "../features/navigationSlice";
import { toggleThemeCard } from "../features/themeSlice";
import { signout } from "../features/authSlice";
import authService from "../services/authService";

const ProfileCard = () => {
  const profileCardRef = useRef(null);
  const dispatch = useDispatch();
  const { isProfileCardOpen } = useSelector((state) => state.navigation);

  const handleClose = () => {
    dispatch(setIsProfileCardOpen(false));
  };

  const handleToggleThemeCard = () => {
    dispatch(toggleThemeCard());
    handleClose();
  };

  const handleSignOut = () => {
    dispatch(signout());
    authService.signout();
    handleClose();
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (
        isProfileCardOpen &&
        profileCardRef.current &&
        !profileCardRef.current.contains(e.target)
      ) {
        dispatch(setIsProfileCardOpen(false));
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isProfileCardOpen, dispatch]);

  if (!isProfileCardOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end pt-20 pr-4">
      <div
        ref={profileCardRef}
        className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg shadow-lg p-4 w-72"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Profile"
              className="w-14 h-14 rounded-full object-cover border-2 border-primary"
            />
            <div className="ml-3">
              <h3 className="font-semibold text-primary-text dark:text-primary-text-dark">
                Amilly Johnson
              </h3>
              <p className="text-xs text-secondary-text dark:text-secondary-text-dark">
                Senior Product Designer
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-secondary-text hover:text-primary-text dark:text-secondary-text-dark dark:hover:text-primary-text-dark"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>

        <Link
          onClick={handleClose}
          to="/profile"
          className="block text-center bg-transparent border border-primary text-primary hover:bg-input-bg dark:hover:bg-input-bg-dark rounded-full py-1.5 mb-4 text-sm font-medium"
        >
          View Profile
        </Link>

        {["Account", "Manage"].map((section, index) => (
          <div
            key={section}
            className={`border-t border-border dark:border-border-dark ${
              index === 0 ? "pt-3" : "mt-3 pt-3"
            }`}
          >
            <h4 className="text-sm font-medium text-primary-text dark:text-primary-text-dark mb-2">
              {section}
            </h4>
            <ul className="space-y-2">
              {section === "Account"
                ? [
                    {
                      title: "Settings & Privacy",
                      to: "/",
                    },
                    {
                      title: "Help",
                      to: "/",
                    },
                    {
                      title: "Language & Theme",
                      onClick: handleToggleThemeCard,
                    },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="text-sm text-secondary-text dark:text-secondary-text-dark hover:text-primary cursor-pointer"
                    >
                      {item.onClick ? (
                        <button onClick={item.onClick}>{item.title}</button>
                      ) : (
                        <Link to={item.to}>{item.title}</Link>
                      )}
                    </li>
                  ))
                : ["Posts & Activity", "Job Posting Activity"].map(
                    (item, index) => (
                      <li
                        key={index}
                        className="text-sm text-secondary-text dark:text-secondary-text-dark hover:text-primary cursor-pointer"
                      >
                        {item}
                      </li>
                    )
                  )}
            </ul>
          </div>
        ))}

        <div className="border-t border-border dark:border-border-dark mt-3 pt-3">
          <Link
            to="/login"
            onClick={handleSignOut}
            className="w-full text-left text-sm text-secondary-text dark:text-secondary-text-dark hover:text-scarlet-500"
          >
            Sign Out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
