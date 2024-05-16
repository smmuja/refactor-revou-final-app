import { createBrowserRouter } from "react-router-dom";
import { Home, Error404, RegisterPage, LoginPage } from "pages";
import { MainLayout } from "layouts/default-layouts";
import { homeUrl, registerUrl, loginUrl } from "config";

export const routes = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        path: homeUrl,
        Component: Home,
      },
    ],
  },
  {
    path: registerUrl,
    Component: RegisterPage,
  },
  {
    path: "*",
    Component: Error404,
  },
  {
    path: loginUrl,
    Component: LoginPage,
  },
]);
