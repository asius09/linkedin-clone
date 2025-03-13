import {
  Hero,
  Features,
  Navbar,
  CallToAction,
  Testimonials,
  Footer,
} from "../components/Landing";
import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <div className="app-container w-screen">
      <Outlet />
    </div>
  );
}

export default AuthLayout;
