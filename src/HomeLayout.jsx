import { Outlet } from "react-router";
import Navbar from "./components/NavigationBar/Navbar";

const HomeLayout = () => {
  return (
    <div className="bg-primary-bg dark:bg-primary-bg-dark min-h-screen">
      <Navbar />
      <div className="container mx-auto py-5">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
