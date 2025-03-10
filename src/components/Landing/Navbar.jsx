import React from "react";

const Navbar = () => {
  const navLinks = ["Find people", "Find jobs", "Articles", "More"];
  return (
    <nav className="w-full sticky top-0 z-50 bg-secondary-bg dark:bg-secondary-bg-dark border-b border-border dark:border-border-dark py-3 px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto max-w-7xl flex items-center justify-between">
        <div className="flex items-end">
          <a href="/" className="text-primary text-2xl font-bold">
            LinkedIn
          </a>
          <img src="/logo.svg" alt="logo" className="w-9" />
        </div>

        <div className="flex items-center justify-center space-x-8">
          {navLinks.map((link, index) => {
            if (link === "More") {
              return (
                <div key={index} className="relative group">
                  <button className="flex items-center text-secondary-text dark:text-secondary-text-dark hover:text-primary text-sm space-x-4 cursor-pointer">
                    {link}
                    <i className="ri-arrow-down-s-line"></i>
                  </button>
                </div>
              );
            }
            return (
              <a
                key={index}
                href={`/${link.toLowerCase().replace(" ", "")}`}
                className="flex items-center text-secondary-text dark:text-secondary-text-dark hover:text-primary text-sm cursor-pointer"
              >
                {link}
              </a>
            );
          })}
        </div>

        <div className="flex items-center space-x-5">
          <a
            href="/signup"
            className="text-md text-primary-text dark:text-primary-text-dark hover:text-primary transition-colors cursor-pointer"
          >
            Create account
          </a>
          <a
            href="/login"
            className="text-primary transition-colors cursor-pointer"
          >
            Sign in
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
