import React from "react";

const ReactionBtn = ({ reaction }) => {
  return (
    <div className="flex items-center gap-4 py-2">
      {reaction && (
        <button
          key={reaction.title}
          className={`flex items-center gap-1 ${reaction.textColor} hover:opacity-80 transition-opacity text-secondary-text dark:text-secondary-text-dark`}
          onClick={reaction.onClick}
          aria-label={reaction.title}
        >
          <i className={`${reaction.icon} text-xl`} />
          <span className="text-sm">{reaction.title}</span>
        </button>
      )}
    </div>
  );
};

export default ReactionBtn;
