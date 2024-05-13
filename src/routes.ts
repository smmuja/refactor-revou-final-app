import { createBrowserRouter } from "react-router-dom";
import { Home, Error404, RegisterPage, LoginPage } from "pages";
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
    path: "/register",
    Component: RegisterPage,
  },
  {
    path: "*",
    Component: Error404,
  },
  {
    path: "/login",
    Component: LoginPage,
  }
]);
