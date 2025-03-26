import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { InputField } from "../components/form";
import {
  RememberMeCheckbox,
  JoinNowLink,
  Buttons,
  Divider,
} from "../components/ui";
import authService from "../services/authService";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { signin } from "../store/slices/authSlice";
import { setAlertMessage } from "../store/slices/alertSlice";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const signInRef = useRef(null);
  const googleSignInRef = useRef(null);

  const onSubmit = async (data) => {
    try {
      const isLogin = await authService.signin(data.email, data.password);
      if (isLogin) {
        setIsLoginSuccess(true);
        dispatch(
          setAlertMessage({
            state: true,
            message: "Login successful",
            type: "success",
            id: "loginSuccess",
          })
        );
        const user = await authService.getCurrentUser();
        dispatch(signin(user));
        navigate("/home");
      }
    } catch (error) {
      setError(error.message);
    }
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
        {error && <p className="text-red-600 w-full text-center">{error}</p>}
        {isLoginSuccess && !error && (
          <p className="text-green-600 w-full text-center">Login successful</p>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <InputField
            label="Email or Phone"
            type="text"
            id="email"
            {...register("email", { required: true })}
            placeholder="Enter your email or phone"
          />
          <InputField
            label="Password"
            type="password"
            id="password"
            {...register("password", { required: true })}
            placeholder="Enter your password"
          />
          <RememberMeCheckbox
            checked={watch("rememberMe")}
            onChange={(e) => setValue("rememberMe", e.target.checked)}
          />
          <Buttons
            className="w-full px-4 py-3 font-semibold"
            variant="filled"
            type="submit"
            ref={signInRef}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center space-x-2">
                <i className="ri-loader-2-line animate-spin w-5 h-5"></i>
                <span>Signing in...</span>
              </span>
            ) : (
              "Sign in"
            )}
          </Buttons>
        </form>

        <Divider />

        {/* Google Login Button */}
        <Buttons
          className="w-full px-4 py-3 flex items-center justify-center"
          ref={googleSignInRef}
          variant="transparent"
          disabled={isSubmitting}
          onClick={handleGoogleSignIn}
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google logo"
            className="w-5 h-5 mr-3"
          />
          <span>Sign in with Google</span>
        </Buttons>
        <JoinNowLink
          title="New to LinkedIn?"
          navigate="/signup"
          actionText="Join now"
        />
      </div>
    </div>
  );
};

export default Login;
