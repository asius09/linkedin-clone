const NewsCard = () => {
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
      <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg border border-border dark:border-border-dark shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Industry News</h3>
          <a href="#" className="text-sm text-primary hover:underline">
            More
          </a>
        </div>
        <div className="space-y-3">
          {industryNews.map((news, index) => (
            <a
              key={index}
              href="#"
              className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-md transition-colors"
            >
              <p className="text-sm font-medium">{news.title}</p>
              <p className="text-xs text-secondary-text dark:text-secondary-text-dark mt-1">
                {news.readers.toLocaleString()} readers
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
