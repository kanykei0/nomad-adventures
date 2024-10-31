import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import Home from "pages/Home/Home";
import AboutUs from "pages/AboutUs/AboutUs";
import { PATHS } from "utils/Constants/Constants";

export const Router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <div>Something went wrong</div>,
    children: [
      {
        path: PATHS.home,
        element: <Home />,
      },
      {
        path: PATHS.aboutUs,
        element: <AboutUs />,
      },
      {
        path: PATHS.notFound,
        element: <div>Page not found!</div>,
      },
    ],
  },
]);
