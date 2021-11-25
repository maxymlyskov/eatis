import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AUTH } from "../constants";

export const infoApi = createApi({
  reducerPath: "infoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spoonacular.com/recipes/",
  }),
  endpoints: (builder) => ({
    getRecipeInfo: builder.query({
      query: (id) => `info?${id}/information${AUTH}`,
    }),
  }),
});
export const { useGetRecipeInfoQuery } = infoApi;
