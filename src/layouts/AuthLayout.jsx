import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "../services/authService";
import { signin, signout } from "../features/authSlice";
import { useNavigate } from "react-router";

const AuthLayout = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      setLoading(true);
      try {
        const user = await authService.getCurrentUser();
        if (user) {
          dispatch(signin({ ...user }));
          navigate("/home");
        }
      } catch (error) {
        // console.error("Error getting current user:", error.message);
        dispatch(signout());
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, [dispatch, navigate]);

  return (
    <div className="app-container w-screen">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
