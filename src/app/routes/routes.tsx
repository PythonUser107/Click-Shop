import { createBrowserRouter } from "react-router"
import HomePage from "@/pages/home/HomePage"
import ProductPage from "@/pages/product/ProductPage"
import MainLayout from "../layouts/MainLayout"
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path : "/products",
                element: <ProductPage/>
            },
            // {
            //     path : "/favourite",
            //     element: <FavouritePage/>
            // },
            // {
            //     path : "/basket",
            //     element: <BasketPage/>
            // },
        ]
    }
])