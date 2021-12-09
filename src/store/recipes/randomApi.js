import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AUTH } from "../constants";

export const infoApi = createApi({
  reducerPath: "infoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spoonacular.com/recipes/random" + AUTH,
  }),
  endpoints: (builder) => ({
    getRandomRecipe: builder.query({
      query: (randomRecipe) => `randomRecipe`,
    }),
  }),
});
export const { useGetRandomRecipeQuery } = infoApi;
