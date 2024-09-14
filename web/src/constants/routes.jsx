import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";

export const HOME = {
  path: "/home",
  element: <Home />
};

export const FORM_RELEASE = {
  path: "/release-form",
};

export const paths = createBrowserRouter([HOME]);
