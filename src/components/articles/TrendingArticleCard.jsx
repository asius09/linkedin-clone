import { Link } from "react-router";
import ROUTES from "../../routes/routes";

const TrendingArticleCard = () => {
  const industryNews = [
    {
      title: "Tech industry sees 12% growth in Q2 2023",
      readers: 1240,
    },
    {
      title: "New AI regulations proposed by EU commission",
      readers: 864,
    },
    {
      title: "Startup funding reaches new heights in 2023",
      readers: 732,
    },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg border border-border dark:border-border-dark shadow-sm py-4">
        <div className="flex items-center justify-between mb-4 px-4">
          <h3 className="font-semibold">Trending Articles</h3>
          <Link
            to={ROUTES.ARTICLEFEED}
            className="text-sm text-primary hover:underline"
          >
            More
          </Link>
        </div>
        <div className="space-y-3">
          {industryNews.map((news, index) => (
            <Link
              key={index}
              href="#"
              className="block hover:bg-secondary-bg-hover dark:hover:bg-secondary-bg-hover-dark px-4 py-2 transition-colors"
            >
              <p className="text-sm font-medium">{news.title}</p>
              <p className="text-xs text-secondary-text dark:text-secondary-text-dark mt-1">
                {news.readers.toLocaleString()} readers
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingArticleCard;
