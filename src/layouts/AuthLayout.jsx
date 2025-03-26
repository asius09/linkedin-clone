import { Outlet } from "react-router";
const AuthLayout = () => {

  return (
    <div className="app-container w-screen">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
