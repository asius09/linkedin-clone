import React, { useState } from "react";
import Search from "../ui/Search";
import Buttons from "../ui/Buttons";

const JobSearch = () => {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
  };

  return (
    <div className="bg-secondary-bg dark:bg-secondary-bg-dark rounded-lg border border-border dark:border-border-dark shadow-sm p-4">
      <h2 className="font-semibold text-xl mb-4 text-primary-text dark:text-primary-text-dark">
        Search Jobs
      </h2>
      <form
        onSubmit={handleSearch}
        className="grid grid-cols-[1fr_20%] gap-2 md:grid-rows-2 md:grid-cols-1 items-center"
      >
        <Search
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search by title, skill, or company"
        />

        <Buttons
          variant="filled"
          className="rounded-md h-10 px-4 text-sm"
          type="submit"
        >
          Search
        </Buttons>
      </form>
    </div>
  );
};

export default JobSearch;
