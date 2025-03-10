import React from "react";
import Invitation from "./Invitation";
import PeopleYouKnow from "./PeopleYouKnow";
import LeftSidebar from "./LeftSidebar";

const Network = () => {
  return (
    <div className="bg-primary-bg dark:bg-primary-bg-dark min-h-screen py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
          <div className="hidden md:block">
            <LeftSidebar />
          </div>
          <div className="space-y-4">
            <Invitation />
            <PeopleYouKnow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
