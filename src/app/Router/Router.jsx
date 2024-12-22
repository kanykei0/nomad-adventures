import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { PATHS } from "utils/Constants/Constants";
import {
  AboutUs,
  Home,
  MotoDetailPage,
  NotFound,
  OurMotorbikes,
  PlacesInKG,
  TourDetailPage,
  Tours,
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
        path: PATHS.ourMotorbikes,
        element: <OurMotorbikes />,
      },
      {
        path: PATHS.tours,
        element: <Tours />,
      },
      {
        path: PATHS.tourDetail,
        element: <TourDetailPage />,
      },
      {
        path: PATHS.motoDetail,
        element: <MotoDetailPage />,
      },
      {
        path: PATHS.placesInKG,
        element: <PlacesInKG />,
      },
      {
        path: PATHS.notFound,
        element: <NotFound />,
      },
    ],
  },
]);
