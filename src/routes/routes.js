import { replace } from "react-router";

const ROUTES = {
  HOME: "/home",
  MYNETWORK: "/mynetwork",
  JOBS: "/jobs",
  MESSAGES: "/messages",
  NOTIFICATIONS: "/notifications",
  PROFILE: "/profile/:user/:userId",
  ARTICLE: "/home/article/new",
  NEWPOST: "/home/post/new",
  LOGIN: "/login",
  SIGNUP: "/signup",
  ARTICLEREADER: "/article/:user/:id",
  ARTICLEFEED: "/article/feed",
};
export default ROUTES;

export const getProfileRoute = (usernameOrId, replaceRoute = ":user/:userId") =>
  typeof usernameOrId === "string"
    ? ROUTES.PROFILE.replace(
        replaceRoute,
        usernameOrId.toLowerCase().replace(/\s/g, "").trim()
      )
    : null;

export const getContentRoute = (
  route,
  authorAndId,
  replaceRoute = ":user/:id"
) =>
  typeof authorAndId === "string"
    ? ROUTES[route].replace(
        replaceRoute,
        authorAndId.toLowerCase().replace(/\s/g, "").trim()
      )
    : null;
