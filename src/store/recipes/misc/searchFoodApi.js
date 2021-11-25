import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AUTH } from "../../constants";

export const searchFoodApi = createApi({
  reducerPath: "searchFoodApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spoonacular.com/food/search" + AUTH,
  }),
  endpoints: (builder) => ({
    getFoodQuery: builder.query({
      query: (query) => `miscSearch?${query && `&query=${query}`}`,
    }),
    filterFoodOffset: builder.query({
      query: (offset) => `miscSearchOffset?${offset && `&offset=${offset}`}`,
    }),
    filterFoodNumber: builder.query({
      query: (number) => `miscSearchNumber?${number && `&number=${number}`}`,
    }),
  }),
});
export const {
  useFilterFoodNumberQuery,
  useFilterFoodOffsetQuery,
  useGetFoodQueryQuery,
} = searchFoodApi;
