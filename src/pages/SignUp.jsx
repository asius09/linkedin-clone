import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  RememberMeCheckbox,
  Divider,
  Buttons,
  JoinNowLink,
} from "../components/ui";
import { InputField } from "../components/form";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../store/slices/authSlice";
import authService from "../services/authService";
import { setAlertMessage } from "../store/slices/alertSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSignUp, setIsSignUp] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signUp = async (data) => {
    if (loading) return;
    const signupData = {
      email: data.email,
      password: data.password,
      fullName: `${data.firstName} ${data.lastName}`,
    };
    console.log(signupData);
    setLoading(true);
    setError(null);
    try {
      const result = await authService.createAccount(signupData);
      if (result) {
        setIsSignUp(true);
        dispatch(signin(signupData));
        dispatch(
          setAlertMessage({
            id: "signupSuccess",
            state: true,
            message: "Account created successfully",
            type: "success",
          })
        );
      }
    } catch (error) {
      console.error("Error creating account:", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status) {
      window.location.href = "/home";
    }
  }, [status]);

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

        {error && <p className="text-scarlet-500 mb-4">{error}</p>}

        {isSignUp && (
          <p className="text-green-500 mb-4">Account created successfully</p>
        )}

        <form onSubmit={handleSubmit(signUp)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <InputField
                label="First name"
                type="text"
                id="firstName"
                {...register("firstName", { required: true })}
                placeholder="e.g. John"
                error={errors.firstName?.message}
              />
            </div>
            <div>
              <InputField
                label="Last name"
                type="text"
                id="lastName"
                {...register("lastName", { required: true })}
                placeholder="e.g. Doe"
                error={errors.lastName?.message}
              />
            </div>
          </div>
          <div>
            <InputField
              label="Email"
              type="email"
              id="email"
              {...register("email", { required: true })}
              placeholder="e.g. youremail@gmail.com"
              error={errors.email?.message}
            />
          </div>
          <div>
            <InputField
              label="Password"
              type="password"
              id="password"
              {...register("password", {
                required: true,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$/,
              })}
              placeholder="Create a password"
              error={errors.password?.message}
            />
          </div>
          <RememberMeCheckbox checked={false} onChange={() => {}} />
          <Buttons
            variant="filled"
            className="font-semibold w-full px-4 py-3"
            type="submit"
          >
            {loading ? (
              <>
                <i className="ri-loader-line animate-spin"></i>
                Signing up...
              </>
            ) : (
              "Agree & Join"
            )}
          </Buttons>
        </form>
        <Divider />
        <Buttons
          className="w-full px-4 py-3 flex items-center justify-center"
          variant="transparent"
          onClick={() => {}}
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google logo"
            className="w-5 h-5 mr-3"
          />
          <span>Sign up with Google</span>
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
