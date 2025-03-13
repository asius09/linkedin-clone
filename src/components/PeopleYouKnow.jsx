import React, { useState } from "react";

const PeopleYouKnow = ({ grid = false }) => {
  const [showAll, setShowAll] = useState(false);

  const connections = [
    {
      id: 1,
      name: "Emily Johnson",
      title: "Product Manager at Tech Innovations",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop",
      mutualConnections: 12,
    },
    {
      id: 2,
      name: "David Chen",
      title: "Software Engineer at CodeCraft",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop",
      mutualConnections: 8,
    },
    {
      id: 3,
      name: "Sophia Rodriguez",
      title: "UX Designer at Creative Solutions",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop",
      mutualConnections: 5,
    },
    {
      id: 4,
      name: "Michael Taylor",
      title: "Data Scientist at Analytics Pro",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop",
      mutualConnections: 3,
    },
    {
      id: 5,
      name: "Olivia Wilson",
      title: "Marketing Director at Brand Forward",
      img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&auto=format&fit=crop",
      mutualConnections: 7,
    },
    {
      id: 6,
      name: "James Martinez",
      title: "Frontend Developer at WebWorks",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop",
      mutualConnections: 4,
    },
    {
      id: 7,
      name: "Ava Thompson",
      title: "Project Manager at Agile Inc.",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop",
      mutualConnections: 9,
    },
    {
      id: 8,
      name: "Daniel Kim",
      title: "Backend Engineer at ServerStack",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop",
      mutualConnections: 6,
    },
    {
      id: 9,
      name: "Isabella Garcia",
      title: "Content Strategist at Media Magic",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop",
      mutualConnections: 11,
    },
  ];

  const displayConnections = showAll ? connections : connections.slice(0, 8);
  if (grid) {
    return (
      <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg border border-border dark:border-border-dark shadow-sm p-4">
        <div className="flex items-center justify-between mb-4 text-xl">
          <h3 className="font-semibold text-primary-text dark:text-primary-text-dark">
            People you may know
          </h3>
          <a href="#" className="text-sm text-primary hover:underline">
            See all
          </a>
        </div>
        <div className="w-full grid grid-cols-4 gap-4">
          {displayConnections.map((connection) => (
            <div
              key={connection.id}
              className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg shadow-md p-4 flex flex-col items-center relative overflow-hidden border border-border dark:border-border-dark"
            >
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-primary-hover h-18 rounded-t-lg"></div>
              <img
                src={connection.img}
                alt={connection.name}
                className="w-24 h-24 rounded-full object-cover mb-1 mt-2 border-2 border-border dark:border-border-dark z-10"
              />
              <div className="text-center h-1/2">
                <p className="text-lg font-semibold text-primary-text dark:text-primary-text-dark">
                  {connection.name}
                </p>
                <p className="text-xs text-secondary-text dark:text-secondary-text-dark mb-2">
                  {connection.title}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-xs text-secondary-text dark:text-secondary-text-dark mb-3">
                  {connection.mutualConnections} mutual connections
                </p>
                <button className="w-full text-xs px-4 py-2 bg-primary text-primary-text-dark rounded-full hover:bg-primary-hover transition-colors cursor-pointer">
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg border border-border dark:border-border-dark shadow-sm p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-primary-text dark:text-primary-text-dark">
          People you may know
        </h3>
        <a href="#" className="text-sm text-primary hover:underline">
          See all
        </a>
      </div>
      <div className="space-y-4">
        {displayConnections.map((connection) => (
          <div
            key={connection.id}
            className="flex items-start py-2 border-b border-border dark:border-border-dark last:border-0"
          >
            <img
              src={connection.img}
              alt={connection.name}
              className="w-12 h-12 rounded-full object-cover mr-3"
            />
            <div className="flex-1">
              <p className="text-sm font-medium text-primary-text dark:text-primary-text-dark">
                {connection.name}
              </p>
              <p className="text-xs text-secondary-text dark:text-secondary-text-dark">
                {connection.title}
              </p>
              <button className="mt-1 text-xs px-3 py-1 border border-primary text-primary rounded-full hover:bg-primary hover:text-primary-text-dark transition-colors">
                Connect
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleYouKnow;
