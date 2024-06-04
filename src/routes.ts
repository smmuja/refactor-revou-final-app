import { createBrowserRouter } from "react-router-dom";
import {
  Home,
  Error404,
  RegisterPage,
  LoginPage,
  ProfilePage,
  ProfileEditPage,
  BusinessesPage,
  BusinessDetailPage,
  ProductsPage,
  ProductDetailPage,
  ProductAddPage,
  ProductEditPage,
  BusinessAddPage,
} from "pages";
import { MainLayout } from "layouts/default-layouts";
import {
  homeUrl,
  registerUrl,
  loginUrl,
  profileUrl,
  profileEditUrl,
  productsUrl,
  productsDetailUrl,
  productsAddUrl,
  productsEditUrl,
  businessesUrl,
  businessDetailUrl,
  businessAddUrl,
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
      {
        path: businessesUrl,
        Component: BusinessesPage,
      },
      {
        path: businessDetailUrl,
        Component: BusinessDetailPage,
      },
      {
        path: businessAddUrl,
        Component: BusinessAddPage,
      },
      {
        path: productsUrl,
        Component: ProductsPage,
      },
      {
        path: productsDetailUrl,
        Component: ProductDetailPage,
      },
      {
        path: productsAddUrl,
        Component: ProductAddPage,
      },
      {
        path: productsEditUrl,
        Component: ProductEditPage,
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
