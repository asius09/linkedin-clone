import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, toggleThemeCard } from "../../store/slices/themeSlice";
import DropDown from "../form/DropDown";

const LanguageAndTheme = () => {
  const dispatch = useDispatch();
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const { theme, isThemeCardOpen } = useSelector((state) => state.theme);

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "it", name: "Italian" },
    { code: "pt", name: "Portuguese" },
    { code: "ru", name: "Russian" },
    { code: "ja", name: "Japanese" },
    { code: "zh", name: "Chinese" },
    { code: "ko", name: "Korean" },
  ];

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const handleThemeChange = (selectedTheme) => {
    dispatch(toggleTheme(selectedTheme.toLowerCase()));
  };

  const handleClose = () => {
    dispatch(toggleThemeCard());
  };

  if (!isThemeCardOpen) return null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-black/50 absolute inset-0 z-[999]">
      <div className="bg-secondary-bg dark:bg-secondary-bg-dark shadow-md rounded-lg p-6 w-full max-w-md border border-border dark:border-border-dark">
        <div>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold text-center text-primary-text dark:text-primary-text-dark">
              Language & Theme
            </h1>
            <button className="cursor-pointer" onClick={() => handleClose()}>
              <i className="ri-close-line text-2xl text-primary-text dark:text-primary-text-dark"></i>
            </button>
          </div>
          <div className="language-section mb-4">
            <h2 className="text-lg font-medium mb-2 text-primary-text dark:text-primary-text-dark">
              Select Language
            </h2>
            <DropDown
              options={languages.map((language) => language.name)}
              selectedOption={selectedLanguage}
              onSelect={handleLanguageChange}
              placeholder={"Select Language"}
            />
          </div>
          <div className="theme-section mb-4">
            <h2 className="text-lg font-medium mb-2 text-primary-text dark:text-primary-text-dark">
              Select Theme
            </h2>
            <DropDown
              options={["Light", "Dark"]}
              selectedOption={theme === "light" ? "Light" : "Dark"}
              onSelect={handleThemeChange}
              placeholder={"Select Theme"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageAndTheme;
