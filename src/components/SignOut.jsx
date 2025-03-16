import React from "react";
import { signout, setLoading, setError } from "../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Signout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.auth);

  const hanldeSignOut = async () => {
    if (!status) return;
    dispatch(setLoading(true));
    dispatch(setError(null));
    try {
      const isSignout = await authService.signout();
      if (isSignout) {
        dispatch(signout());
        navigate("/login");
      }
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };
  return <button className="hover:text-red-500">Signout</button>;
  return <button className="hover:text-red-500">Signout</button>;
};

export default Signout;
