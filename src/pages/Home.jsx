import React from "react";
import {
  CreateNewPost,
  NewPostCard,
  SidebarFooter,
  Feed,
} from "../components/Home";
import SidebarProfile from "../components/SidebarProfile";
import PeopleYouKnow from "../components/PeopleYouKnow";
import Notifications from "../components/Notifications";
import NewsCard from "../components/NewsCard";

const Home = () => {
  return (
    <div className="container mx-auto bg-primary-bg dark:bg-primary-bg-dark text-primary-text dark:text-primary-text-dark">
      <NewPostCard />
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[250px_1fr_350px] gap-5">
        <aside className="hidden md:block">
          <SidebarProfile />
        </aside>
        <main>
          <CreateNewPost />
          <Feed />
        </main>
        <aside className="hidden lg:block space-y-4">
          <Notifications />
          <NewsCard />
          <PeopleYouKnow />
          <SidebarFooter />
        </aside>
      </div>
    </div>
  );
};

export default Home;
