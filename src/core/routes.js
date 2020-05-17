import Home from "../pages/home";
import Blog from "../pages/about";

const routes = [
  {
    path: "/about",
    component: Blog,
  },
  {
    path: "/",
    component: Home,
  },
];

export default routes;
