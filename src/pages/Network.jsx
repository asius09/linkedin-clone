import React from "react";
import {
  Invitation,
  PeopleYouKnow,
  NetworkLeftSidebar,
} from "../components/network";

const Network = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-5">
      <aside className="hidden px-4 md:block md:px-0 md:col-span-1">
        <NetworkLeftSidebar />
      </aside>
      <section className="space-y-4 px-4 md:col-span-1 md:px-0">
        <Invitation />
        <PeopleYouKnow grid />
      </section>
    </main>
  );
};

export default Network;
