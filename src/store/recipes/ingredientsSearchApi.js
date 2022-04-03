import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AUTH } from "../constants";

export const ingredientsSearchApi = createApi({
  reducerPath: "ingredientsSearchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.spoonacular.com/food/ingredients/`,
  }),
  endpoints: (builder) => ({
    getSearchIngridients: builder.query({
      query: (query) => `search${AUTH}${query && `&query=${query}`}`,
    }),
    getSearchIngridietnsDetailed: builder.query({
      query: (query) => `search${AUTH}${query && `&query=${query}`}`,
    }),
  }),
});
export const {
  useGetSearchIngridientsQuery,
  useGetSearchIngridietnsDetailedQuery,
} = ingredientsSearchApi;
