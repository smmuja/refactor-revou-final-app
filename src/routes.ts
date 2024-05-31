import { createBrowserRouter } from "react-router-dom";
import {
  Home,
  Error404,
  RegisterPage,
  LoginPage,
  ProfilePage,
  ProfileEditPage,
  ProductsPage,
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
} from "config";
import { ProductDetailPage } from "pages/productDetail";
import { ProductAddPage } from "pages/productAdd";
import { ProductEditPage } from "pages/productEdit";
import { BusinessesPage } from "pages/businesses";

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
