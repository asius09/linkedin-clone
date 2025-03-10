import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login submitted:", formData, "Remember me:", rememberMe);
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
    console.log("Google sign-in initiated");
  };

  return (
    <div className="flex min-h-screen bg-primary-bg dark:bg-primary-bg-dark">
      <div className="w-full max-w-md m-auto bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg shadow-lg p-8">
        <div className="flex justify-center mb-8">
          <a
            href="/"
            className="text-primary text-3xl font-bold flex items-end transition-transform hover:scale-105"
          >
            LinkedIn
            <img src="/logo.svg" alt="logo" className="w-10 ml-1" />
          </a>
        </div>
        <h2 className="text-2xl font-bold text-center text-primary-text dark:text-primary-text-dark mb-8">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-primary-text dark:text-primary-text-dark mb-2"
            >
              Email or Phone
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border dark:border-border-dark rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-input-bg dark:bg-input-bg-dark text-primary-text dark:text-primary-text-dark transition-all"
              placeholder="Enter your email or phone"
              required
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-primary-text dark:text-primary-text-dark"
              >
                Password
              </label>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border dark:border-border-dark rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-input-bg dark:bg-input-bg-dark text-primary-text dark:text-primary-text-dark transition-all"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-secondary-text dark:text-secondary-text-dark"
              >
                Remember me
              </label>
            </div>
            <a
              href="/forgot-password"
              className="text-primary hover:text-primary-hover text-sm font-medium transition-colors"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 px-4 rounded-full focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-[1.02]"
          >
            Sign in
          </button>
        </form>

        <div className="my-6 flex items-center justify-center">
          <div className="border-t border-border dark:border-border-dark w-full"></div>
          <span className="mx-4 text-sm text-secondary-text dark:text-secondary-text-dark font-medium">
            or
          </span>
          <div className="border-t border-border dark:border-border-dark w-full"></div>
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-bold py-3 px-4 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-[1.02]"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google logo"
            className="w-5 h-5 mr-3"
          />
          Sign in with Google
        </button>

        <div className="mt-8 text-center">
          <span className="text-secondary-text dark:text-secondary-text-dark">
            New to LinkedIn?
          </span>{" "}
          <a
            href="/signup"
            className="text-primary hover:text-primary-hover font-medium hover:underline transition-colors ml-1"
          >
            Join now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
