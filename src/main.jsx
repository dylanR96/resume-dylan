import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutMe from "./pages/About me/AboutMe.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import IntroPage from "./pages/Intro page/IntroPage.jsx";

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
