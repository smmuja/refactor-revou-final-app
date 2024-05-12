import { createBrowserRouter } from "react-router-dom";
import { Home, Error404 } from "pages";
import { MainLayout } from "layouts/default-layouts";

export const routes = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
    ],
  },
  {
    path: "*",
    Component: Error404,
  },
]);
