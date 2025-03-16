import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeNewPostCard } from "../features/postSlice.js";
import DropDown from "../components/DropDown.jsx";
import TextEditor from "../components/TextEditor.jsx";

const ArticleWriter = () => {
  const { isNewPostCardOpen } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [media, setMedia] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Individual Article");

  const [selectedManage, setSelectedManage] = useState("Manage");

  const onSelectManage = (option) => {
    setSelectedManage(option);
  };

  const onSelect = (option) => {
    setSelectedOption(option);
  };

  const handleMediaUpload = (event) => {
    const files = Array.from(event.target.files);
    setMedia([...media, ...files]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ title, content, media });
    dispatch(closeNewPostCard());
  };

  const actionsBtns = [
    { label: "emoji", icon: "ri-emotion-line" },
    { label: "event", icon: "ri-calender-line" },
    { label: "more", icon: "ri-more-fill" },
  ];

  // if (!isNewPostCardOpen) return null;

  return (
    <div className="relative flex flex-col h-screen p-6 bg-secondary-bg dark:bg-secondary-bg-dark">
      {/* header of the aritcle writer */}
      <header className="w-full flex justify-between items-center mb-4">
        <div className="flex items-start">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User"
            className="w-12 h-12 rounded-full mr-3 object-cover"
          />
          <div className="flex flex-col">
            <h3 className="font-bold text-primary-text dark:text-primary-text-dark text-xl">
              John Doe
            </h3>
            <div className="w-full flex items-center justify-between gap-2 mt-1">
              <p className="text-primary text-nowrap text-sm font-semibold">
                Publish as
              </p>
              <DropDown
                options={["Individual Article", "Company Article"]}
                selectedOption={selectedOption}
                onSelect={onSelect}
              />
            </div>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <div className="flex items-center gap-2 p-2 rounded-full border border-primary transition">
            <DropDown
              options={["Manage", "Company"]}
              selectedOption={selectedManage}
              onSelect={onSelectManage}
              btnTextColor="text-primary"
            />
          </div>
          <button className="flex items-center gap-2 bg-primary font-semibold text-primary-text dark:text-primary-text-dark px-4 py-2 rounded-full hover:bg-primary-dark transition">
            <span>Next</span>
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </header>
      {/* End of header of the aritcle writer */}

      {/* form of the aritcle writer */}
      <form onSubmit={handleSubmit} className="flex flex-col flex-grow mt-4">
        {/* title of the aritcle writer */}
        <label
          htmlFor="title"
          className="text-secondary-text dark:text-secondary-text-dark text-sm font-medium"
        >
          Title
        </label>
        <input
          type="text"
          placeholder="Article Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 py-3 text-2xl outline-0 font-semibold text-primary-text dark:text-primary-text-dark"
        />
        {/* content of the aritcle writer */}
        <label
          htmlFor="content"
          className="text-secondary-text dark:text-secondary-text-dark text-sm font-medium mb-1"
        >
          Content
        </label>
        <TextEditor value={content} onChange={(data) => setContent(data)} />
      </form>
      {/* End of form of the aritcle writer */}
    </div>
  );
};

export default ArticleWriter;
