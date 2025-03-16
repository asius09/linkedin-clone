import { Outlet } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "../services/authService";
import { signin, signout, setLoading, setError } from "../features/authSlice";
import { useNavigate } from "react-router";

function AuthLayout() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);
  const navigate = useNavigate(); // Corrected variable name to follow camelCase

  useEffect(() => {
    const checkSession = async () => {
      dispatch(setLoading(true));
      try {
        const user = await authService.getCurrentUser();
        if (user) {
          dispatch(signin(user));
          navigate("/home"); // Corrected variable name to follow camelCase
        }
      } catch (error) {
        console.error("Error getting current user:", error.message);
        dispatch(signout());
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

    checkSession();
  }, [dispatch]);

  return (
    <div className="app-container w-screen">
      <Outlet />
    </div>
  );
}

export default AuthLayout;
