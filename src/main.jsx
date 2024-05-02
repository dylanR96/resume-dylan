import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AboutMe from "./pages/AboutMe.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import IntroPage from "./pages/IntroPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <IntroPage />,
        loader: () => (document.title = "Resume || Landing page"),
      },

      {
        path: "/about",
        element: <AboutMe />,
        loader: () => (document.title = "Resume || About me"),
      },

      {
        path: "/projects",
        element: <Projects />,
        loader: () => (document.title = "Resume || Projects"),
      },
      {
        path: "/contact",
        element: <Contact />,
        loader: () => (document.title = "Resume || Contact"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
