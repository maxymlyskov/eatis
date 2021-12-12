import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AUTH } from "../../constants";

export const infoApi = createApi({
  reducerPath: "infoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spoonacular.com/recipes/" + AUTH,
  }),
  endpoints: (builder) => ({
    getRecipeInfo: builder.query({
      query: (id) => `info?${id}/information`,
    }),
  }),
});
export const { useGetRecipeInfoQuery } = infoApi;
