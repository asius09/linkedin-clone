import React from "react";
import {
  CreateNewPost,
  SidebarFooter,
  Feed,
  SidebarProfile,
  PeopleYouKnow,
  Notifications,
  NewsCard,
  PostDeleteModel,
} from "../components";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <div className="container mx-auto bg-primary-bg dark:bg-primary-bg-dark text-primary-text dark:text-primary-text-dark">
      <Outlet />
      <div className="grid grid-cols-1 px-5 md:grid-cols-[250px_1fr] md:px-0 lg:grid-cols-[250px_1fr_300px] xl:grid-cols-[250px_1fr_350px] gap-5">
        <aside className="hidden md:block">
          <SidebarProfile />
        </aside>
        <main>
          <CreateNewPost />
          <Feed />
        </main>
        <aside className="hidden lg:block space-y-4">
          <NewsCard />
          <PeopleYouKnow suggestions={3} />
          <SidebarFooter />
        </aside>
      </div>
      <PostDeleteModel />
    </div>
  );
};

export default Home;
