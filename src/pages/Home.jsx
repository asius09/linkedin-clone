import React from "react";
import { Outlet } from "react-router";
import { ContentComposePanel } from "../components/post";
import { SidebarFooter } from "../components/ui";
import { PostFeed } from "../components/post";
import { SidebarProfile, PeopleYouMayKnow } from "../components/profile";
import { PostDeleteModel } from "../components/post";
import { TrendingArticleCard } from "../components/articles";

const Home = () => {
  return (
    <div className="container mx-auto bg-primary-bg dark:bg-primary-bg-dark text-primary-text dark:text-primary-text-dark">
      <Outlet />
      <div className="grid grid-cols-1 px-5 md:grid-cols-[250px_1fr] md:px-0 lg:grid-cols-[250px_1fr_300px] xl:grid-cols-[250px_1fr_350px] gap-5">
        <aside className="hidden md:block">
          <SidebarProfile />
        </aside>
        <main className="pb-8">
          <ContentComposePanel />
          <PostFeed />
        </main>
        <aside className="hidden lg:block space-y-4">
          <TrendingArticleCard />
          <PeopleYouMayKnow suggestions={3} />
          <SidebarFooter />
        </aside>
      </div>
      <PostDeleteModel />
    </div>
  );
};

export default Home;
