import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { BlogListing } from "./pages/BlogListing";
import { BlogDetail } from "./pages/BlogDetail";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "blog", Component: BlogListing },
      { path: "blog/:id", Component: BlogDetail },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);
