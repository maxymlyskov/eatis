import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AUTH } from "../constants";

export const randomApi = createApi({
  reducerPath: "randomApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://api.spoonacular.com/recipes/random?apiKey=c453cb6b8bae416a864b1a962478597a&includeNutrition=true",
  }),
  endpoints: (builder) => ({
    getRandomRecipe: builder.query({
      query: (randomRecipe) => `randomRecipe`,
    }),
  }),
});
export const { useGetRandomRecipeQuery } = randomApi;
