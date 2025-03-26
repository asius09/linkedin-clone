import { useEffect, useState } from "react";
import fileService from "../../services/fileService";
import { Link } from "react-router";
import { getContentRoute } from "../../routes/routes";
import {UserAvatar} from "../common";

const SuggestionArticleCard = ({ article }) => {
  const [author, setAuthor] = useState(null);
  const [preview, setPreview] = useState(null);

  const navigateLink = getContentRoute(
    "ARTICLEREADER",
    `${author?.name}/${article?.$id}`
  );

  useEffect(() => {
    if (article) {
      setAuthor(JSON.parse(article?.user));
      const filePreview = fileService.getFilePreview({
        fileId: article.userFile,
      });
      if (filePreview) setPreview(filePreview);
    }
  }, [article]);

  return (
    <div className="min-w-[360px] max-w-[400px] bg-secondary-bg dark:bg-secondary-bg-dark rounded-xl overflow-hidden shadow-lg">
      <div className="w-full h-56 bg-gray-200 dark:bg-gray-700">
        {preview && (
          <img
            src={preview}
            alt={article.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
      </div>
      <div className="p-4">
        <Link to={navigateLink} className="cursor-pointer">
          <h2 className="text-lg font-bold mb-2 text-primary-text dark:text-primary-text-dark hover:text-primary hover:underline line-clamp-2">
            {article.title}
          </h2>
          <div
            className="prose prose-p:text-primary-text dark:prose-p:text-primary-text-dark mb-2 line-clamp-2 text-sm text-primary-text dark:text-primary-text-dark hover:text-primary hover:underline transition-all cursor-pointer"
            dangerouslySetInnerHTML={{
              __html: article.content
                ? article.content.replace(/<[^>]+>/g, "").slice(0, 100) + "..."
                : "",
            }}
          />
        </Link>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <UserAvatar size={24} iconSize={1} imgURL={author?.avatar || ""} />
            <div className="ml-2">
              <p className="text-xs text-secondary-text dark:text-secondary-text-dark">
                {author?.name}
              </p>
            </div>
          </div>
          <div className="flex space-x-3 text-primary-text dark:text-primary-text-dark text-xs">
            <span>22 likes</span>
            <span>2 comments</span>
            <span>3 shares</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestionArticleCard;
