import React, { useState } from "react";
import InputField from "../components/InputField";
import Divider from "../components/Divider";
import Buttons from "../components/Buttons";
import RememberMeCheckbox from "../components/RememberMeCheckbox";
import authService from "../services/authService";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData, "Remember me:", rememberMe);
    // Dispatch action to handle signin logic here
    authService
      .signin(formData.email, formData.password)
      .then((isLogin) => {
        console.log("Login response:", isLogin);
        if (isLogin) dispatch(signin(formData));
        navigate("/home");
      })
      .catch((error) => {
        dispatch(setError(error.message));
      });
  };

  const handleGoogleSignIn = () => {
    console.log("Google sign-in initiated");
    // Dispatch action or logic for Google sign-in
  };

  if (status) return <Navigate to="/home" />;

  return (
    <div className="flex min-h-screen bg-primary-bg dark:bg-primary-bg-dark">
      <div className="w-full max-w-md m-auto bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg shadow-lg p-8">
        <div className="flex justify-center mb-4">
          <a
            href="/"
            className="text-primary text-3xl font-bold flex items-end transition-transform hover:scale-105"
          >
            LinkedIn
            <img src="/logo.svg" alt="logo" className="w-10 ml-1" />
          </a>
        </div>
        <h2 className="text-2xl font-bold text-center text-primary-text dark:text-primary-text-dark mb-6">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField
            label="Email or Phone"
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email or phone"
            required
          />
          <InputField
            label="Password"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
          <RememberMeCheckbox
            checked={rememberMe}
            onChange={() => setRememberMe((prev) => !prev)}
          />
          <Buttons variant="filled" className="font-semibold" type="submit">
            Sign in
          </Buttons>
        </form>
        <Divider />

        {/* Google Login Button */}
        <Buttons
          variant="transparent"
          icon={
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google logo"
              className="w-5 h-5 mr-3"
            />
          }
          onClick={handleGoogleSignIn}
        >
          Sign in with Google
        </Buttons>
        <JoinNowLink />
      </div>
    </div>
  );
};

const JoinNowLink = () => (
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
);

export default Login;
