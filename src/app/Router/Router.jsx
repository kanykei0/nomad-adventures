import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { PATHS } from "utils/Constants/Constants";
import {
  AboutUs,
  Home,
  JeepTours,
  MotoTours,
  NotFound,
  OurMotorbikes,
  Trekking,
} from "pages/index";

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
        path: PATHS.jeepTours,
        element: <JeepTours />,
      },
      {
        path: PATHS.motoTours,
        element: <MotoTours />,
      },
      {
        path: PATHS.ourMotorbikes,
        element: <OurMotorbikes />,
      },
      {
        path: PATHS.trekking,
        element: <Trekking />,
      },
      {
        path: PATHS.notFound,
        element: <NotFound />,
      },
    ],
  },
]);
