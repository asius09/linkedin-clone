import React from "react";
import { signout } from "../../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Signout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.auth);

  const hanldeSignOut = async () => {
    if (!status) return;
    try {
      const isSignout = await authService.signout();
      if (isSignout) {
        dispatch(signout());
        navigate("/login");
      }
    } catch (error) {
    } finally {
    }
  };
  return <button className="hover:text-red-500">Signout</button>;
};

export default Signout;
