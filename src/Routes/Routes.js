import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../pages/HomePage";
import Shop from "../component/Shop/Shop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
  //   {
  //     path: "/login",
  //     element: <LoginPage />,
  //   },
]);
