import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      videoUrl: "https://youtu.be/IlYUUN8rL_Y",
      name: "Gayatri",
      story: "It helped me find a new job and chase my dreams",
      quote: "Join your colleagues, classmates, and friends on LinkedIn.",
      cta: "Get started",
    },
  ];

  return (
    <section className="bg-primary-bg dark:bg-primary-bg-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col items-center bg-white dark:bg-secondary-bg-dark rounded-lg shadow-md p-6"
            >
              <div className="flex flex-col md:flex-row w-full gap-6">
                <div className="w-full md:w-1/2 aspect-video">
                  <iframe
                    className="w-full h-full rounded-md"
                    src={`https://www.youtube.com/embed/${testimonial.videoUrl
                      .split("/")
                      .pop()}`}
                    title="Testimonial video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-2">
                    Check out {testimonial.name}'s story
                  </h3>
                  <p className="text-lg mb-4">{testimonial.story}</p>
                  <p className="text-xl text-secondary-text dark:text-secondary-text-dark mb-4">
                    "{testimonial.quote}"
                  </p>
                  <a
                    href="/signup"
                    className="mt-2 px-6 py-2 bg-primary hover:bg-primary-hover text-white rounded-full transition-colors self-start"
                  >
                    {testimonial.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
