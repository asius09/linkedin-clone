import React, { useState } from "react";
import Search from "../components/Search";

const Messages = () => {
  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop",
      lastMessage:
        "Thanks for connecting! Would you like to discuss the project?",
      time: "2:30 PM",
      unread: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop",
      lastMessage: "Let's schedule a meeting next week",
      time: "Yesterday",
      unread: false,
    },
    {
      id: 3,
      name: "Emily Wilson",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop",
      lastMessage: "I've attached the files you requested",
      time: "Tuesday",
      unread: false,
    },
  ]);

  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messageText, setMessageText] = useState("");
  const [searchMessage, setSearchMessage] = useState("");

  return (
    <div className="flex h-[calc(100vh-64px)] bg-secondary-bg dark:bg-secondary-bg-dark">
      {/* Sidebar */}
      <div className="w-80 border-r border-border dark:border-border-dark flex flex-col">
        <div className="p-4 border-b border-border dark:border-border-dark">
          <h2 className="text-xl font-semibold text-primary-text dark:text-primary-text-dark">
            Messaging
          </h2>
          <div className="mt-2 relative">
            <Search
              value={searchMessage}
              onChange={(e) => setSearchMessage(e.target.value)}
              placeholder="Search messages"
            />
          </div>
        </div>
        <div className="overflow-y-auto flex-grow">
          {conversations.map((convo) => (
            <div
              key={convo.id}
              className={`p-3 border-b border-border dark:border-border-dark hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer flex items-start ${
                selectedConversation?.id === convo.id
                  ? "bg-gray-100 dark:bg-gray-800"
                  : ""
              }`}
              onClick={() => setSelectedConversation(convo)}
            >
              <img
                src={convo.avatar}
                alt={convo.name}
                className="w-12 h-12 rounded-full mr-3"
              />
              <div className="flex-grow min-w-0">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-primary-text dark:text-primary-text-dark truncate">
                    {convo.name}
                  </h3>
                  <span className="text-xs text-secondary-text dark:text-secondary-text-dark">
                    {convo.time}
                  </span>
                </div>
                <p
                  className={`text-sm truncate ${
                    convo.unread
                      ? "font-semibold text-primary-text dark:text-primary-text-dark"
                      : "text-secondary-text dark:text-secondary-text-dark"
                  }`}
                >
                  {convo.lastMessage}
                </p>
              </div>
              {convo.unread && (
                <div className="w-2 h-2 bg-primary rounded-full ml-1 mt-2"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Conversation area */}
      {selectedConversation ? (
        <div className="flex-grow flex flex-col">
          <div className="p-4 border-b border-border dark:border-border-dark flex items-center">
            <img
              src={selectedConversation.avatar}
              alt={selectedConversation.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <h3 className="font-semibold text-primary-text dark:text-primary-text-dark">
                {selectedConversation.name}
              </h3>
              <p className="text-xs text-secondary-text dark:text-secondary-text-dark">
                Online
              </p>
            </div>
            <div className="ml-auto flex space-x-3">
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                <i className="ri-phone-line text-primary"></i>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                <i className="ri-video-line text-primary"></i>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                <i className="ri-more-2-fill text-primary"></i>
              </button>
            </div>
          </div>
          <div className="flex-grow overflow-y-auto p-4">
            {/* Messages would go here */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-end">
                <img
                  src={selectedConversation.avatar}
                  alt={selectedConversation.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg max-w-xs">
                  <p className="text-primary-text dark:text-primary-text-dark">
                    {selectedConversation.lastMessage}
                  </p>
                  <span className="text-xs text-secondary-text dark:text-secondary-text-dark mt-1 block">
                    {selectedConversation.time}
                  </span>
                </div>
              </div>
              <div className="flex items-end justify-end">
                <div className="bg-primary text-white p-3 rounded-lg max-w-xs">
                  <p>Thanks for reaching out! I'd be happy to discuss.</p>
                  <span className="text-xs text-white opacity-70 mt-1 block">
                    2:35 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-border dark:border-border-dark">
            <div className="flex items-center">
              <button className="p-2 text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                <i className="ri-attachment-2 text-lg"></i>
              </button>
              <button className="p-2 text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full mr-1">
                <i className="ri-emotion-line text-lg"></i>
              </button>
              <input
                type="text"
                placeholder="Write a message..."
                className="flex-grow p-2 bg-input-bg dark:bg-input-bg-dark rounded-md border-none focus:ring-1 focus:ring-primary"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
              />
              <button
                className="ml-2 p-2 bg-primary text-white rounded-full hover:bg-primary-hover disabled:opacity-50"
                disabled={!messageText.trim()}
              >
                <i className="ri-send-plane-fill"></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-message-3-line text-2xl text-gray-500 dark:text-gray-400"></i>
            </div>
            <h3 className="text-xl font-semibold text-primary-text dark:text-primary-text-dark mb-2">
              Your messages
            </h3>
            <p className="text-secondary-text dark:text-secondary-text-dark max-w-md">
              Select a conversation or start a new one to send private messages
              to your connections
            </p>
            <button className="mt-4 px-4 py-2 border border-primary text-primary rounded-full hover:bg-blue-50 dark:hover:bg-gray-800 font-medium">
              Start a new message
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
