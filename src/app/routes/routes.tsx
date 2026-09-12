import { createBrowserRouter } from "react-router"
import HomePage from "@/pages/home/HomePage"
import ProductPage from "@/pages/product/ProductPage"
import MainLayout from "../layouts/MainLayout"
import Error from "@/shared/animations/Error"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error size={444} />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductPage />,
      },
      // {
      //     path : "/favourite",
      //     element: <FavouritePage/>
      // },
      // {
      //     path : "/basket",
      //     element: <BasketPage/>
      // },
      {
        path: "*",
        element: <Error size={444} />,
      },
    ],
  },
])