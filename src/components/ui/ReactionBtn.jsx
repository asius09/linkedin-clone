import React from "react";

const ReactionBtn = ({ reaction, className, ...porps }) => {
  return (
    <>
      {reaction && (
        <button
          key={reaction.title}
          className={`w-full flex items-center justify-center gap-1 ${reaction.textColor} hover:opacity-80 transition-opacity text-secondary-text dark:text-secondary-text-dark`}
          onClick={reaction.onClick}
          aria-label={reaction.title}
        >
          <i className={`${reaction.icon} text-xl`} />
          <span>{reaction.title}</span>
        </button>
      )}
    </>
  );
};

export default ReactionBtn;
