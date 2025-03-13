import React, { useState, useEffect } from "react";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Learn from industry experts",
      description:
        "Discover insights and knowledge from professionals in various fields",
      tags: [
        { id: 1, title: "Marketing" },
        { id: 2, title: "Sales" },
        { id: 3, title: "HR" },
        { id: 4, title: "IT" },
        { id: 5, title: "Finance" },
        { id: 6, title: "Engineering" },
        { id: 7, title: "Design" },
        { id: 8, title: "Product" },
        { id: 9, title: "Data Science" },
        { id: 10, title: "Customer Success" },
        { id: 11, title: "Leadership" },
        { id: 12, title: "Business Strategy" },
        { id: 13, title: "Project Management" },
        { id: 14, title: "Artificial Intelligence" },
        { id: 15, title: "Professional Development" },
      ],
    },
    {
      id: 2,
      title: "Explore collaborative articles",
      description:
        "We're unlocking community knowledge in a new way. Experts add insights directly into each article, started with the help of AI.",
      tags: [
        { id: 1, title: "Marketing" },
        { id: 2, title: "Public Administration" },
        { id: 3, title: "Healthcare" },
        { id: 4, title: "Engineering" },
        { id: 5, title: "IT Services" },
        { id: 6, title: "Sustainability" },
        { id: 7, title: "Business Administration" },
        { id: 8, title: "Telecommunications" },
        { id: 9, title: "HR Management" },
        { id: 10, title: "Show all" },
      ],
    },
    {
      id: "post",
      title: "Post your job for millions of people to see",
      btnTitle: "Post a job",
    },
    {
      id: 3,
      title: "Find the right job or internship for you",
      description:
        "Discover opportunities that match your skills and interests across various industries.",
      tags: [
        { id: 1, title: "Engineering" },
        { id: 2, title: "Business Development" },
        { id: 3, title: "Finance" },
        { id: 4, title: "Administrative Assistant" },
        { id: 5, title: "Retail Associate" },
        { id: 6, title: "Customer Service" },
        { id: 7, title: "Operations" },
        { id: 8, title: "Information Technology" },
        { id: 9, title: "Marketing" },
        { id: 10, title: "Human Resources" },
        { id: 11, title: "Show more" },
      ],
    },
    {
      id: 4,
      title: "Discover the best software tools",
      description:
        "Connect with buyers who have first-hand experience to find the best products for you.",
      tags: [
        { id: 1, title: "E-Commerce Platforms" },
        { id: 2, title: "CRM Software" },
        { id: 3, title: "Human Resources Management Systems" },
        { id: 4, title: "Recruiting Software" },
        { id: 5, title: "Sales Intelligence Software" },
        { id: 6, title: "Project Management Software" },
        { id: 7, title: "Help Desk Software" },
        { id: 8, title: "Social Networking Software" },
        { id: 9, title: "Desktop Publishing Software" },
        { id: 10, title: "Show all" },
      ],
    },
    {
      id: 5,
      title: "Keep your mind sharp with games",
      description:
        "Take a break and reconnect with your network through quick daily games.",
      tags: [
        { id: 1, title: "Pinpoint" },
        { id: 2, title: "Queens" },
        { id: 3, title: "Cross" },
        { id: 4, title: "climb" },
        { id: 5, title: "Tango" },
      ],
    },
  ];

  const sliderContent = [
    {
      index: 1,
      title: "Let the right people know you're open to work",
      description:
        "With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities.",
      imgUrl: "https://static.licdn.com/aero-v1/sc/h/dbvmk0tsk0o0hd59fi64z3own",
    },
    {
      index: 2,
      title: "Conversations today could lead to opportunity tomorrow",
      description:
        "Sending messages to people you know is a great way to strengthen relationships as you take the next step in your career.",
      imgUrl: "https://static.licdn.com/aero-v1/sc/h/2r8kd5zqpi905lkzsshdlvvn5",
    },
    {
      index: 3,
      title: "Stay up to date on your industry",
      description:
        "From live videos, to stories, to newsletters and more, LinkedIn is full of ways to stay up to date on the latest discussions in your industry.",
      imgUrl: "https://static.licdn.com/aero-v1/sc/h/ann24vsq7r0ux3vipqa1n90gg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderContent.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const tagStyle = {
    blue: {
      border: "border-primary",
      text: "text-primary",
      bg: "bg-primary/20 dark:bg-primary/10",
      hover: "hover:bg-primary/30 dark:hover:bg-primary/20 hover:shadow-sm",
    },
    dark: {
      border: "border-primary-dark",
      text: "text-primary-dark",
      bg: "bg-primary-dark/20 dark:bg-primary-dark/10",
      hover: "hover:bg-primary-dark/30 dark:hover:bg-primary-dark/20",
    },
  };

  const renderSliderContent = ({ title, description, imgUrl, index }) => {
    return (
      <div
        className={`h-full flex flex-col md:flex-row justify-between items-center gap-6 
         
        `}
      >
        <div className="flex flex-col justify-center w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-text dark:text-primary-text-dark mb-4">
            {title}
          </h2>
          <p className="text-secondary-text dark:text-secondary-text-dark mb-6 max-w-xl">
            {description}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={imgUrl}
            alt={title}
            className="w-64 md:w-96 h-64 md:h-96 object-contain"
          />
        </div>
      </div>
    );
  };

  const renderTag = (tag, style) => {
    return (
      <div
        key={`tag-${tag.id}-${tag.title}`}
        className={`flex items-center justify-center gap-2 px-3 py-1.5 rounded-2xl border ${style.border} ${style.bg} ${style.hover} transition-all duration-200 cursor-pointer`}
      >
        <span className={`${style.text} font-medium`}>{tag.title}</span>
        {!tag.title.includes("Show") && (
          <i className={`${style.text} ri-arrow-right-line text-xs`}></i>
        )}
      </div>
    );
  };

  const renderFeature = (features, index) => {
    return (
      <div
        key={`feature-${index}`}
        className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 py-6 ${
          index % 2 === 0
            ? "bg-secondary-bg dark:bg-secondary-bg-dark"
            : "bg-primary/10"
        }`}
      >
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-primary-text dark:text-primary-text-dark mb-4">
            {features.title}
          </h2>
          <p className="text-secondary-text dark:text-secondary-text-dark mb-6">
            {features.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 items-center h-64 overflow-y-hidden p-4">
          {index % 2 === 0
            ? features.tags.map((tag) => renderTag(tag, tagStyle.blue))
            : features.tags.map((tag) => renderTag(tag, tagStyle.dark))}
        </div>
      </div>
    );
  };
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      {features.map((feature, index) => {
        if (feature.id === "post") {
          return (
            <div
              key={`post-feature`}
              className="max-w-7xl mx-auto flex flex-col items-center gap-6 px-4 sm:px-6 lg:px-8 py-12 bg-primary/5 rounded-lg"
            >
              <h2 className="text-4xl font-bold text-primary text-center">
                {feature.title}
              </h2>
              <button className="px-6 py-3 bg-primary hover:bg-primary-hover text-white font-medium rounded-full transition-colors duration-200 cursor-pointer">
                {feature.btnTitle}
              </button>
            </div>
          );
        } else {
          return renderFeature(feature, index + 1);
        }
      })}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-primary/5 relative">
        <div className="transition-opacity duration-500">
          {renderSliderContent(sliderContent[currentSlide])}
        </div>
        <div className="flex justify-center mt-8 gap-2">
          {sliderContent.map((_, index) => (
            <button
              key={`slider-dot-${index}`}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentSlide === index ? "bg-primary" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
