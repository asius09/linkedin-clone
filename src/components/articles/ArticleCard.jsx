import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import UserAvatar from "../common/UserAvatar";
import formateDate from "../../utils/formateDate";
import fileService from "../../services/fileService";
import { getContentRoute } from "../../routes/routes";

const ArticleCard = ({ article }) => {
  const { $id, title, content, userFile, user, $createdAt } = article || {};
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();
  const [showFullContent, setShowFullContent] = useState(false);

  const [author, setAuthor] = useState({});
  const navigateLink = getContentRoute(
    "ARTICLEREADER",
    `${author.name}/${$id}`
  );

  const actionsBtns = [
    {
      title: "like",
      icon: "ri-thumb-up-line",
      onClick: () => {},
    },
    {
      title: "comment",
      icon: "ri-chat-3-line",
      onClick: () => {},
    },
    {
      title: "share",
      icon: "ri-share-line",
      onClick: () => {},
    },
    {
      title: "bookmark",
      icon: "ri-bookmark-line",
      onClick: () => {},
    },
  ];

  const truncateContent = (text, maxLength = 100) => {
    return text?.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  useEffect(() => {
    setAuthor(JSON.parse(user));
    const getPreview = () => {
      const filePreview = fileService.getFilePreview({ fileId: userFile });
      setPreview(filePreview);
    };
    getPreview();
  }, [article]);

  return (
    <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-xl overflow-hidden shadow-lg">
      <div className="w-full h-64 bg-gray-200 dark:bg-gray-700">
        {preview && (
          <img
            src={preview}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div
          className="prose prose-p:text-primary-text dark:prose-p:text-primary-text-dark mb-4 line-clamp-1"
          dangerouslySetInnerHTML={{ __html: truncateContent(content) }}
        />
        <Link
          to={navigateLink}
          className="text-primary hover:underline hover:text-primary-dark transition-colors"
        >
          Read more...
        </Link>
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center">
            <UserAvatar size={48} iconSize={1.5} imgURL={user?.avatar || ""} />
            <div className="ml-3">
              <p className="font-medium">{author?.name || "Unknown"}</p>
              <p className="text-sm text-secondary-text dark:text-secondary-text-dark">
                {formateDate($createdAt)}
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            {actionsBtns.map((btn) => (
              <button
                key={btn.title}
                aria-label={btn.title}
                onClick={btn.onClick}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <i className={`${btn.icon} text-xl`}></i>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
