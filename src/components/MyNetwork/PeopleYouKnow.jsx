import React, { useState } from "react";

const PeopleYouKnow = () => {
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

  const displayConnections = showAll ? connections : connections.slice(0, 6);

  const renderCard = ({ person }) => {
    return (
      <div
        key={person.id}
        className="border border-border dark:border-border-dark rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="h-12 bg-gradient-to-r from-blue-400 to-blue-600"></div>
        <div className="px-4 pt-10 pb-4 relative">
          <img
            src={person.img}
            alt={person.name}
            className="w-16 h-16 rounded-full object-cover absolute -top-8 left-4 border-2 border-white dark:border-gray-800"
          />
          <div className="mb-3">
            <h3 className="font-medium text-primary-text dark:text-primary-text-dark">
              {person.name}
            </h3>
            <p className="text-xs text-secondary-text dark:text-secondary-text-dark mt-1">
              {person.title}
            </p>
            <div className="flex items-center mt-2 text-xs text-secondary-text dark:text-secondary-text-dark">
              <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
              <span>{person.mutualConnections} mutual connections</span>
            </div>
          </div>
          <button className="w-full bg-white dark:bg-gray-800 border border-primary text-primary hover:bg-primary hover:text-white dark:hover:bg-primary rounded-full py-1.5 px-3 text-sm font-medium transition-colors">
            Connect
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg border border-border dark:border-border-dark shadow-sm p-4">
      <h2 className="font-semibold text-xl text-primary-text dark:text-primary-text-dark mb-4">
        People you may know
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {displayConnections.map((person) => renderCard({ person }))}
      </div>
      <div className="text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-primary hover:underline text-sm font-medium"
        >
          {showAll ? "Show less" : "See more"}
        </button>
      </div>
    </div>
  );
};

export default PeopleYouKnow;
