import React from "react";
import users from "./data";
import { Link } from "react-router";

const Hero = () => {
  const tags = [
    {
      id: 1,
      highlight: "1 Billion",
      text: "Members",
    },
    {
      id: 2,
      highlight: "200",
      text: "Countries",
    },
    {
      id: 3,
      highlight: "57M+",
      text: "Companies",
    },
  ];

  const FloatingImagesRow = ({ id, from, to, position, zIndex }) => {
    return (
      <div className={`relative flex flex-col rotate-6`} style={{ zIndex }}>
        {users.slice(from, to).map((user, index) => {
          return (
            <div
              key={`user-${id}-${index}`}
              className={`relative rounded-2xl w-[100px] md:w-[120px] h-[120px] md:h-[140px] my-1 ${position}`}
            >
              <img
                src={user.img}
                alt={user.name}
                className={`w-full h-full object-cover rounded-lg ${
                  user.show ? "opacity-100" : "opacity-50"
                }`}
              />
              {user.show && (
                <div
                  className={`user-role -rotate-6 ${
                    user.position || ""
                  } bg-white px-2 py-1 text-xs rounded-xl shadow-xl max-w-max whitespace-nowrap`}
                  style={{ zIndex: 999 }}
                >
                  <span className="font-bold">{user.name}</span>
                  <br />
                  <span className="flex items-center gap-1 text-xs">
                    {user.flag}{" "}
                    <span className="text-gray-500">{user.role}</span>
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <header
      id="hero"
      className="h-[90vh] bg-secondary-bg dark:bg-secondary-bg-dark"
    >
      <main className="w-full h-full max-w-7xl ml-auto grid grid-cols-1 md:grid-cols-2">
        <section
          id="hero-part-left"
          className="flex justify-center items-center h-full w-full"
        >
          <div className="w-full">
            <div
              id="hero-tags"
              className="flex flex-wrap gap-2 items-center justify-start mb-6"
            >
              {tags.map((tag) => (
                <div
                  key={tag.id}
                  className="flex gap-1 items-center justify-center px-3 py-1.5 rounded-2xl border border-primary-text dark:border-primary-text-dark text-sm"
                >
                  <span className="text-primary font-semibold">
                    {tag.highlight}
                  </span>
                  <span className="text-primary-text dark:text-primary-text-dark">
                    {tag.text}
                  </span>
                </div>
              ))}
            </div>
            <h3 className="w-full text-4xl md:text-5xl font-bold text-primary-text dark:text-primary-text-dark mb-4">
              The world's largest network{" "}
              <span className="text-primary">for business professionals</span>
            </h3>
            <p className="w-full text-lg text-primary-text dark:text-primary-text-dark mb-6">
              Thousands of jobs, industry thought leaders and infinite business
              opportunities.
            </p>
          <Link to={"/login"}>
            <button className="w-full md:w-1/2 bg-primary hover:bg-primary-hover text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 cursor-pointer">
              <span>Sign in</span>
              <i className="ri-arrow-right-line"></i>
            </button>
          </Link>
            <div className="flex flex-col items-start justify-start mt-4">
              <p className="text-gray-500 text-md">Don't have an account?</p>
              <Link
                to="/signup"
                className="text-primary-text dark:text-primary-text-dark font-medium cursor-pointer underline"
              >
                <span>Sign up for free</span>
              </Link>
            </div>
          </div>
        </section>
        <section
          id="hero-part-right"
          className="flex items-center justify-center w-full h-full"
        >
          <div className="relative overflow-hidden w-full h-full flex">
            <div className="w-full h-full grid grid-cols-4 md:grid-cols-5 absolute -top-5 ml-8">
              <FloatingImagesRow
                id={1}
                from={0}
                to={6}
                position={""}
                zIndex={50}
              />
              <FloatingImagesRow
                id={2}
                from={6}
                to={12}
                position={"bottom-[50px]"}
                zIndex={40}
              />
              <FloatingImagesRow
                id={3}
                from={12}
                to={18}
                position={""}
                zIndex={30}
              />
              <FloatingImagesRow
                id={4}
                from={18}
                to={24}
                position={"bottom-[50px]"}
                zIndex={20}
              />
              <FloatingImagesRow
                id={5}
                from={24}
                to={30}
                position={""}
                zIndex={10}
              />
              <FloatingImagesRow
                id={6}
                from={30}
                to={36}
                position={"bottom-[50px]"}
                zIndex={0}
              />
            </div>
          </div>
        </section>
      </main>
    </header>
  );
};

export default Hero;
