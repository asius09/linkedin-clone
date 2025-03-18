import React, { useEffect, useState } from "react";
import RememberMeCheckbox from "../components/RememberMeCheckbox";
import Divider from "../components/Divider";
import Buttons from "../components/Buttons";
import InputField from "../components/InputField";
import authService from "../services/authService";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../features/authSlice";
import JoinNowLink from "../components/JoinNowLink";

const SignUp = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const signupData = {
      email: formData.email,
      password: formData.password,
      fullName: `${formData.firstName} ${formData.lastName}`,
    };
    setLoading(true);
    setError(null);
    try {
      const result = await authService.createAccount(signupData);
      if (result) dispatch(signin(signupData));
    } catch (error) {
      console.error("Error creating account:", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const user = await authService.getCurrentUser();
        console.log("Current user:", user);
      } catch (error) {
        console.error("Error getting current user:", error.message);
        setError(error.message);
      }
    };
    fetchCurrentUser();
  }, []);

  const handleGoogleSignUp = () => {
    console.log("Google sign-up initiated");
  };

  return (
    <div className="flex min-h-screen bg-primary-bg dark:bg-primary-bg-dark">
      <div className="w-full max-w-md m-auto bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg shadow-lg p-8">
        <div className="flex justify-center mb-6">
          <a
            href="/"
            className="text-primary text-3xl font-bold flex items-end transition-transform hover:scale-105"
          >
            LinkedIn
            <img src="/logo.svg" alt="logo" className="w-10 ml-1" />
          </a>
        </div>

        <div className="text-center mb-4 w-full">
          <h1 className="w-full text-xl font-bold text-primary-text dark:text-primary-text-dark">
            Join the world's largest professional network
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <InputField
                label="First name"
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="e.g. John"
                required
              />
            </div>
            <div>
              <InputField
                label="Last name"
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="e.g. Doe"
                required
              />
            </div>
          </div>
          <div>
            <InputField
              label="Email"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. youremail@gmail.com"
              required
            />
          </div>
          <div>
            <InputField
              label="Password"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
            />
          </div>
          <RememberMeCheckbox
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <Buttons variant="filled" className="font-semibold" type="submit">
            Agree & Join
          </Buttons>
        </form>
        <Divider />
        <Buttons
          variant="transparent"
          icon={
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google logo"
              className="w-5 h-5 mr-3"
            />
          }
          onClick={handleGoogleSignUp}
        >
          Sign up with Google
        </Buttons>
        <JoinNowLink
          title="Already have an account?"
          navigate="/login"
          actionText="Log in"
        />
      </div>
    </div>
  );
};

export default SignUp;
