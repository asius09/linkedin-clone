import React from "react";
import {
  Invitation,
  PeopleYouKnow,
  NetworkLeftSidebar,
} from "../components/network";
import HomeRightSidebar from "../components/NewsCard";
const Network = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-5">
      <aside className="hidden md:block">
        <NetworkLeftSidebar />
      </aside>
      <section className="space-y-4">
        <Invitation />
        <PeopleYouKnow grid={true} />
      </section>
    </main>
  );
};

export default Network;
