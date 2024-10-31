import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Router } from "./app/Router/Router";
import "utils/I18next/I18n";
import "styles/global.scss";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />
);
