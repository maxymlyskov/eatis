import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AUTH } from "../../constants";

export const similarApi = createApi({
  reducerPath: "similarApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spoonacular.com/recipes/",
  }),
  endpoints: (builder) => ({
    getSimilarRecipe: builder.query({
      query: (id) => `${id}/similar${AUTH}`,
    }),
  }),
});
export const { useGetSimilarRecipeQuery } = similarApi;
