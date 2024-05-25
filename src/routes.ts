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
import {
  homeUrl,
  registerUrl,
  loginUrl,
  profileUrl,
  profileEditUrl,
} from "config";

export const routes = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        path: homeUrl,
        Component: Home,
      },
      {
        path: profileUrl,
        Component: ProfilePage,
      },
      {
        path: profileEditUrl,
        Component: ProfileEditPage,
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
