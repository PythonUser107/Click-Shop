import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { CategoryType } from "./type"
import type { Product } from "@/entities/product/model/ProductType"

export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://yayraserver-production.up.railway.app/api"
    }),
    tagTypes: ["Products", "Categories"],
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => "/products/get",
            providesTags: ["Products"],
        }),
        getCategories: builder.query<CategoryType[], void>({
            query: () => "/categories/get",
            providesTags: ["Categories"],
        }),
    }),
})

export const {useGetProductsQuery,useGetCategoriesQuery} = baseApi