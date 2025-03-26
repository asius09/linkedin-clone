import React from "react";

const InvitationsCard = () => {
  const pendingInvitations = [
    {
      id: 1,
      name: "Alex Johnson",
      title: "Software Engineer at Tech Co",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop",
      mutualConnections: 3,
    },
    {
      id: 2,
      name: "Sarah Williams",
      title: "UX Designer at Creative Agency",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop",
      mutualConnections: 5,
    },
  ];

  return (
    <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg border border-border dark:border-border-dark shadow-sm p-4 mb-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-lg text-primary-text dark:text-primary-text-dark">
          Invitations{`(${pendingInvitations?.length})`}
        </h2>
        <button className="text-primary hover:underline text-sm font-medium">
          View all
        </button>
      </div>

      <div className="space-y-4">
        {pendingInvitations.map((invitation) => (
          <div
            key={invitation.id}
            className="flex items-start justify-center border-b border-border dark:border-border-dark pb-4 last:border-0 last:pb-0"
          >
            <img
              src={invitation.img}
              alt={invitation.name}
              className="w-12 h-12 mt-2 md:mt-0 md:w-18 md:h-18 rounded-full object-cover mr-3"
            />
            <div className="flex-1 flex flex-col md:flex-row justify-between items-center">
              <div className="w-full md:w-auto">
                <h3 className="font-medium text-primary-text dark:text-primary-text-dark">
                  {invitation.name}
                </h3>
                <p className="text-sm text-secondary-text dark:text-secondary-text-dark mb-1">
                  {invitation.title}
                </p>
                <p className="text-xs text-secondary-text dark:text-secondary-text-dark mb-2">
                  {invitation.mutualConnections} mutual connections
                </p>
              </div>
              <div className="w-full md:w-auto flex justify-start space-x-2">
                <button className="px-4 py-1.5 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-hover transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1">
                  Accept
                </button>
                <button className="px-4 py-1.5 border border-gray-300 dark:border-gray-600 rounded-full text-sm font-medium text-primary-text dark:text-primary-text-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600">
                  Ignore
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvitationsCard;
