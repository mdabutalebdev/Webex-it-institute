import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Layouts/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Course from "./pages/Course";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About/> ,
      },
      {
        path: "/course",
        element: <Course/> ,
      },
      {
        path: "/blog",
        element:  <Blog/> ,
      },
      {
        path: "/contact",
        element: <Contact/> ,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
