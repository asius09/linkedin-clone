import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import FeedDropDown from "./FeedDropDown";

const Feed = () => {
  const [filter, setFilter] = useState("recent");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const posts = [
    {
      id: 1,
      author: {
        name: "John Doe",
        title: "Senior Developer at Tech Co.",
        profileImage:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      },
      content:
        "Just launched our new product! Check it out and let me know what you think.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      likes: 42,
      timestamp: "2 hours ago",
      comments: [
        {
          id: 1,
          author: "Sarah Johnson",
          content: "Looks amazing! Congrats on the launch!",
        },
        {
          id: 2,
          author: "Mike Chen",
          content: "Great work! The interface is so intuitive.",
        },
      ],
    },
    {
      id: 2,
      author: {
        name: "Emma Wilson",
        title: "UX Designer at Design Studio",
        profileImage:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      },
      content:
        "Just finished this design case study on improving user onboarding flows. What do you think?",
      likes: 28,
      timestamp: "5 hours ago",
      comments: [],
    },
    {
      id: 3,
      author: {
        name: "Alex Rodriguez",
        title: "Product Manager at SaaS Inc.",
        profileImage:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      },
      content:
        "We're hiring! Looking for talented developers to join our team. DM me for details.",
      likes: 15,
      timestamp: "1 day ago",
      comments: [
        { id: 1, author: "David Kim", content: "Just sent you a message!" },
      ],
    },
  ];

  // Filter dropdown options
  const dropdownOptions = [
    { id: "recent", label: "Most Recent" },
    { id: "popular", label: "Most Popular" },
    { id: "network", label: "My Network Only" },
    { id: "trending", label: "Trending" },
    { id: "following", label: "Following" },
  ];

  if (isLoading) {
    return (
      <div className="space-y-4 animate-pulse">
        <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg h-16 mb-4"></div>
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg h-64 mb-4"
          ></div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Enhanced Filter bar */}
      <div className="flex items-center justify-end">
        <span className="w-full border-b-2 border-border dark:border-border-dark"></span>
        <FeedDropDown
          options={dropdownOptions}
          filter={filter}
          setFilter={setFilter}
        />
      </div>

      {/* Posts with improved spacing */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.author.name}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
