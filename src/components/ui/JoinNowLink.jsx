import { Link } from "react-router";

const JoinNowLink = ({ title, navigate, actionText }) => (
  <div className="mt-8 text-center">
    <span className="text-secondary-text dark:text-secondary-text-dark">
      {title}
    </span>{" "}
    <Link
      to={navigate}
      className="text-primary hover:text-primary-hover font-medium hover:underline transition-colors ml-1"
    >
      {actionText}
    </Link>
  </div>
);

export default JoinNowLink;
