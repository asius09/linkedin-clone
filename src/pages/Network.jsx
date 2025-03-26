import React from "react";
import { InvitationCard, NetworkPageLeftSidebar } from "../components/network";
import { PeopleYouMayKnow } from "../components/profile";

const Network = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-5">
      <aside className="hidden md:block md:col-span-1">
        <NetworkPageLeftSidebar />
      </aside>
      <section className="space-y-4 px-4 md:col-span-1 md:px-0">
        <InvitationCard />
        <PeopleYouMayKnow grid suggestions={6} />
      </section>
    </main>
  );
};

export default Network;
