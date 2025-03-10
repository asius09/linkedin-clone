import React from "react";
import Navbar from "../NavigationBar/Navbar";
import SideProfile from "./Profile/SideProfile";
import CreateNewPost from "./CreateNewPost";
import Feed from "./Feed/Feed";
import RightSidebar from "./RightSidebar";

const Home = () => {
  return (
        <main className="grid grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[250px_1fr_350px] gap-5">
          <aside className="hidden md:block">
            <SideProfile />
          </aside>
          <section>
            <CreateNewPost />
            <Feed />
          </section>
          <aside className="hidden lg:block">
            <RightSidebar />
          </aside>
        </main>
  );
};

export default Home;
