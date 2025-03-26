import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Buttons from "../ui/Buttons";
import ArticleActionPanel from "./ArticleActionPanel";
import UserAvatar from "../common/UserAvatar";
import Footer from "../common/Footer";
import { useSelector } from "react-redux";
import formateDate from "../../utils/formateDate";
import fileService from "../../services/fileService";
import SuggestionArticleCard from "./SuggestionArticleCard";

const ArticleReader = ({}) => {
  const { id } = useParams();
  const { articles } = useSelector((state) => state.content);
  const navigate = useNavigate();
  const [author, setAuthor] = useState({});
  const [article, setArticle] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPreview = (id) => {
      if (typeof id !== "string") return null;
      return fileService.getFilePreview({ fileId: id });
    };

    const fetchArticle = async () => {
      try {
        if (articles && id) {
          const foundArticle = articles.find((article) => article.$id === id);
          if (foundArticle) {
            setArticle(foundArticle);
            setAuthor(JSON.parse(foundArticle.user));
            const previewUrl = getPreview(foundArticle.userFile);
            setPreview(previewUrl);
          } else {
            setError("Article not found");
          }
        }
      } catch (err) {
        setError("Failed to load article");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [articles, id]);

  const [reactions, setReactions] = useState({
    like: false,
    star: false,
  });

  const handleReaction = (reaction) => {
    setReactions((prev) => ({ ...prev, [reaction]: !prev[reaction] }));
  };

  const articleActionBtns = [
    {
      title: "like",
      icon: reactions.like ? "ri-heart-fill" : "ri-heart-line",
      className: reactions.like ? "text-pink-500" : "",
      onClick: () => handleReaction("like"),
    },
    {
      title: "star",
      icon: reactions.star ? "ri-star-fill" : "ri-star-line",
      className: reactions.star ? "text-yellow-500" : "",
      onClick: () => handleReaction("star"),
    },
  ];

  const LoadingSkeleton = () => (
    <div className="animate-pulse">
      <div className="relative bg-primary-bg dark:bg-primary-bg-dark text-primary-text dark:text-primary-text-dark grid grid-cols-[60%_1fr] gap-10">
        {/* Article Container */}
        <div>
          {/* Feature Image */}
          <div className="w-full h-[400px] bg-gray-200 dark:bg-gray-700 rounded-t-lg mb-6"></div>

          {/* Article Info */}
          <div className="flex justify-between items-center mb-8 border-b border-border dark:border-border-dark pb-4 text-sm">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
          </div>

          {/* Article Title */}
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>

          {/* Article Content */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          </div>
        </div>

        {/* Article Action Panel */}
        <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
      </div>

      {/* Author CTA */}
      <div className="w-full flex flex-col justify-between items-center py-8 mt-4">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-2"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4"></div>

        <div className="flex flex-col justify-center items-center mt-4">
          <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 mt-2"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-48 mt-2"></div>
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-32 mt-4"></div>
        </div>
      </div>
    </div>
  );

  if (loading) return <LoadingSkeleton />;
  if (error) return <p className="text-center text-red-500 py-8">{error}</p>;
  if (!article) return <p className="text-center py-8">Article not found</p>;

  return (
    <>
      <div>
        <div className="relative bg-primary-bg dark:bg-primary-bg-dark text-primary-text dark:text-primary-text-dark grid grid-cols-[60%_1fr] gap-10">
          {/* Article Container */}
          <div>
            {/* Feature Image */}
            {preview && (
              <div className="w-full rounded-t-lg overflow-hidden mb-6">
                <img
                  src={preview}
                  alt="Feature"
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
              </div>
            )}
            {/* Article Info */}
            <div className="flex justify-between items-center mb-8 border-b border-border dark:border-border-dark pb-4 text-sm">
              <p className="text-secondary-text dark:text-secondary-text-dark">
                Published by: {author?.name || "Unknown Author"}
              </p>
              <p className="text-secondary-text dark:text-secondary-text-dark">
                Published on: {formateDate(article.$createdAt)}
              </p>
            </div>
            {/* Article Title */}
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            {/* Article Content */}
            <div
              className="scrollable text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Article Action Panel */}
          <ArticleActionPanel />
        </div>

        {/* Author CTA */}
        <div className="w-full flex flex-col justify-between items-center py-8 mt-4">
          <h1 className="text-2xl font-bold text-primary-text dark:text-primary-text-dark">
            Enjoyed this Article?
          </h1>
          <p className="text-secondary-text dark:text-secondary-text-dark">
            Follow to never miss an update.
          </p>

          {/* Author Profile */}
          <div className="flex flex-col justify-center items-center mt-4">
            <UserAvatar size={72} iconSize={2.5} imgURL={author?.avatar} />
            <h2>{author?.name}</h2>
            <p className="text-sm text-secondary-text dark:text-secondary-text-dark">
              {author?.bio || "No bio available"}
            </p>
            <Buttons
              variant={"filled"}
              className="flex justify-center items-center gap-2 px-4 py-2 font-semibold mt-4"
            >
              <i className="ri-add-line text-xl"></i>
              <span>Follow</span>
            </Buttons>
          </div>
        </div>
        {/* End Author CTA  */}

        {/* Article Suggestions */}
        <div className="w-full py-4">
          <SuggestionArticleCard article={article} />
        </div>
        {/* End Article Suggestions */}
      </div>
      <Footer className={"bg-gray-50 dark:bg-black w-full"} />
    </>
  );
};

export default ArticleReader;
