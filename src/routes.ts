import { createBrowserRouter } from "react-router-dom";
import {
  Home,
  Error404,
  RegisterPage,
  LoginPage,
  ProfilePage,
  ProfileEditPage,
} from "pages";
import { MainLayout } from "layouts/default-layouts";
// import { profileUrl } from "config";

export const routes = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/profile",
        Component: ProfilePage,
      },
      {
        path: "/profile/edit",
        Component: ProfileEditPage,
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
  },
]);
