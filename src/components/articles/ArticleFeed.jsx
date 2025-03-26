import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import Buttons from "../ui/Buttons";
import ROUTES from "../../routes/routes";

const ArticleFeed = () => {
  const navigate = useNavigate();
  const { articles, contentLoading } = useSelector((state) => state.content);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (articles.length > 0 || !contentLoading) {
      setIsInitialLoad(false);
    }
  }, [articles, contentLoading]);

  const SkeletonCard = () => (
    <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-xl overflow-hidden shadow-lg animate-pulse">
      <div className="w-full h-64 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700"></div>
      <div className="p-6">
        <div className="h-8 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded w-3/4 mb-4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded"></div>
          <div className="h-4 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded w-5/6"></div>
          <div className="h-4 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded w-2/3"></div>
        </div>
        <div className="flex items-center mt-6">
          <div className="w-12 h-12 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full"></div>
          <div className="ml-3 space-y-2">
            <div className="h-4 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded w-24"></div>
            <div className="h-3 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded w-16"></div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex space-x-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-6 h-6 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full"
              ></div>
            ))}
          </div>
          <div className="w-6 h-6 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-primary-bg dark:bg-primary-bg-dark text-primary-text dark:text-primary-text-dark">
      <div className="max-w-4xl mx-auto space-y-6">
        {isInitialLoad || contentLoading ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : articles?.length > 0 ? (
          articles.map((article) => {
            return <ArticleCard article={article} />;
          })
        ) : (
          <div className="flex flex-col items-center justify-center space-y-4 py-20">
            <p className="text-secondary-text dark:text-secondary-text-dark text-lg text-center">
              No articles posted yet.
              <br />
              Be the first to post!
            </p>
            <Buttons
              variant="hollow"
              className="px-4 py-2 mt-4"
              onClick={() => navigate(ROUTES.ARTICLE)}
            >
              Create Article
            </Buttons>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleFeed;
