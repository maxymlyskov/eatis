import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AUTH } from "../../constants";

export const ingredientApi = createApi({
  reducerPath: "ingredientApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.spoonacular.com/food/ingredients/`,
  }),
  endpoints: (builder) => ({
    getInfoIngridient: builder.query({
      query: (id) => `${id}/information${AUTH}&amount=100&unit=grams`,
    }),
  }),
});
export const { useGetInfoIngridientQuery } = ingredientApi;
