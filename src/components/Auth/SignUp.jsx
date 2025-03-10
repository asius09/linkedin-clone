import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup submitted:", formData);
  };

  const handleGoogleSignUp = () => {
    // Handle Google sign-up logic here
    console.log("Google sign-up initiated");
  };

  return (
    <div className="flex min-h-screen bg-primary-bg dark:bg-primary-bg-dark">
      <div className="w-full max-w-md m-auto bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg shadow-lg p-8">
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <a
            href="/"
            className="text-primary text-3xl font-bold flex items-end transition-transform hover:scale-105"
          >
            LinkedIn
            <img src="/logo.svg" alt="logo" className="w-10 ml-1" />
          </a>
        </div>

        {/* Header Section */}
        <div className="text-center mb-4 w-full">
          <h1 className="w-full text-xl font-bold text-primary-text dark:text-primary-text-dark">
            Join the world's largest professional network
          </h1>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-primary-text dark:text-primary-text-dark mb-1"
              >
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-border dark:border-border-dark rounded-md bg-input-bg dark:bg-input-bg-dark text-primary-text dark:text-primary-text-dark focus:outline-none focus:ring-2 focus:ring-input-outline dark:focus:ring-input-outline-dark"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-primary-text dark:text-primary-text-dark mb-1"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-border dark:border-border-dark rounded-md bg-input-bg dark:bg-input-bg-dark text-primary-text dark:text-primary-text-dark focus:outline-none focus:ring-2 focus:ring-input-outline dark:focus:ring-input-outline-dark"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-primary-text dark:text-primary-text-dark mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-border dark:border-border-dark rounded-md bg-input-bg dark:bg-input-bg-dark text-primary-text dark:text-primary-text-dark focus:outline-none focus:ring-2 focus:ring-input-outline dark:focus:ring-input-outline-dark"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-primary-text dark:text-primary-text-dark mb-1"
            >
              Password (6+ characters)
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="6"
              className="w-full px-3 py-2 border border-border dark:border-border-dark rounded-md bg-input-bg dark:bg-input-bg-dark text-primary-text dark:text-primary-text-dark focus:outline-none focus:ring-2 focus:ring-input-outline dark:focus:ring-input-outline-dark"
            />
          </div>

          {/* Terms and Conditions */}
          <p className="text-xs text-secondary-text dark:text-secondary-text-dark">
            By clicking Agree & Join, you agree to the LinkedIn{" "}
            <a href="#" className="text-primary hover:underline">
              User Agreement
            </a>
            ,{" "}
            <a href="#" className="text-primary hover:underline">
              Privacy Policy
            </a>
            , and{" "}
            <a href="#" className="text-primary hover:underline">
              Cookie Policy
            </a>
            .
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-primary hover:bg-primary-hover text-white rounded-full transition-colors font-medium"
          >
            Agree & Join
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border dark:border-border-dark"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-secondary-bg dark:bg-secondary-bg-dark text-secondary-text dark:text-secondary-text-dark">
              or
            </span>
          </div>
        </div>

        {/* Google Sign-up Button */}
        <button
          type="button"
          onClick={handleGoogleSignUp}
          className="w-full flex items-center justify-center py-2.5 border border-border dark:border-border-dark rounded-full font-medium text-primary-text dark:text-primary-text-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Sign up with Google
        </button>

        {/* Login Link */}
        <div className="mt-6 text-center text-sm text-secondary-text dark:text-secondary-text-dark">
          Already on LinkedIn?{" "}
          <a href="/login" className="text-primary hover:underline font-medium">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
