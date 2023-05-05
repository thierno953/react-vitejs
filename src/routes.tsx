import { ReactNode } from "react";

import HomePage from "./pages/HomePage/HomePage";
import WorkPage from "./pages/WorkPage/WorkPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import ContactPage from "./pages/ContactPage/ContactPage";

export interface Route {
  path: string;
  component: ReactNode;
  exact: boolean;
}

export const routes: Route[] = [
  {
    path: "/",
    component: <HomePage />,
    exact: true,
  },
  {
    path: "/work",
    component: <WorkPage />,
    exact: true,
  },
  {
    path: "/about",
    component: <AboutPage />,
    exact: true,
  },
  {
    path: "/blog",
    component: <BlogPage />,
    exact: true,
  },
  {
    path: "/contact",
    component: <ContactPage />,
    exact: true,
  },
];
