import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import PostFeedFilter from "./PostFeedFilter";
import { useSelector } from "react-redux";

const PostFeed = () => {
  const { posts, contentLoading } = useSelector((state) => state.content);
  const [filter, setFilter] = useState("recent");
  const [contents, setContents] = useState([]);

  useEffect(() => {
    setContents([...posts]);
  }, [posts]);

  // Filter dropdown options
  const dropdownOptions = [
    { id: "recent", label: "Most Recent" }, // within 1 weeks
    { id: "popular", label: "Most Popular" }, // based on likes & comments
    { id: "network", label: "My Network Only" }, // within 1 weeks
    { id: "trending", label: "Trending" }, // within 1 monts based on likes hastags
    { id: "following", label: "Following" }, // within 1 weeks followings
  ];

  if (contentLoading) {
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
      {/* Filter bar */}
      <div className="flex items-center justify-between gap-1">
        <span className="w-full border-b-2 border-border dark:border-border-dark"></span>
        <PostFeedFilter
          options={dropdownOptions}
          filter={filter}
          setFilter={setFilter}
        />
      </div>

      {/* Posts with improved spacing */}
      <div className="space-y-6">
        {contents?.length > 0 &&
          contents.map((post) => (
            <div key={post.$id}>
              <PostCard post={post} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostFeed;
