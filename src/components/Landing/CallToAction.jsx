import React from "react";

const CallToAction = () => {
  const actions = [
    {
      id: 1,
      title: "Connect with people who can help",
      image:
        "https://media.istockphoto.com/id/1197932646/photo/congratulating-the-new-partners.jpg?s=1024x1024&w=is&k=20&c=vehroZyKD0xSI_K8Jd6pB14ncnu3UbEtfB3YP7pTRCM=",
      link: "/connect",
    },
    {
      id: 2,
      title: "Learn the skills you need to succeed",
      image:
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/learn",
    },
    {
      id: 3,
      title: "Choose a topic to learn about",
      image:
        "https://images.unsplash.com/photo-1611348586755-53860f7ae57a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/topics",
    },
    {
      id: 4,
      title: "Find people you know",
      image:
        "https://images.unsplash.com/photo-1664575599730-0814817939de?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/find",
    },
  ];

  return (
    <section className="bg-secondary-bg dark:bg-secondary-bg-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-primary-text dark:text-primary-text-dark mb-10 text-center">
          Take the next step in your career
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {actions.map((action) => (
            <div
              key={action.id}
              className="flex flex-col items-center p-6 bg-white dark:bg-primary-bg-dark rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-48 h-48 mb-4 overflow-hidden rounded-full flex items-center justify-center bg-primary/5 dark:bg-primary/5">
                <img
                  src={action.image}
                  alt={action.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-primary-text dark:text-primary-text-dark text-center mb-3">
                {action.title}
              </h3>
              <a
                href={action.link}
                className="mt-auto text-primary hover:text-primary-hover flex items-center hover:underline"
              >
                <span>
                  Get started
                  <i className="ri-arrow-right-line ml-1"></i>
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
