import { useState } from "react";
import InputField from "../components/InputField";
import Divider from "../components/Divider";
import Buttons from "../components/Buttons";
import RememberMeCheckbox from "../components/RememberMeCheckbox";
import authService from "../services/authService";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { signin, setIsLogin } from "../features/authSlice";
import JoinNowLink from "../components/JoinNowLink";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { status, isLogin } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const isLogin = await authService.signin(email, password);
      if (isLogin) {
        setIsLoginSuccess(true);
        dispatch(setIsLogin({ state: true, message: "Login successful" }));
        const user = await authService.getCurrentUser();
        dispatch(signin(user));
        navigate("/home");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
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
        <form onSubmit={onSubmit} className="space-y-6">
          <InputField
            label="Email or Phone"
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email or phone"
          />
          <InputField
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <RememberMeCheckbox
            checked={rememberMe}
            onChange={() => setRememberMe((prev) => !prev)}
          />
          <Buttons
            variant="filled"
            className="font-semibold"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <i className="ri-loader-2-line animate-spin w-5 h-5"></i>
            ) : (
              "Sign in"
            )}
          </Buttons>
        </form>

        <Divider />

        {/* Google Login Button */}
        <Buttons
          variant="transparent"
          disabled={loading}
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
