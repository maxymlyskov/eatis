import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AUTH } from "../../constants";

export const analyzedInstructionsApi = createApi({
  reducerPath: "analyzedInstructionsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spoonacular.com/recipes",
  }),
  endpoints: (builder) => ({
    getAnalyzedInstructions: builder.query({
      query: (id) => `/${id}/analyzedInstructions${AUTH}`,
    }),
  }),
});
export const { useGetAnalyzedInstructionsQuery } = analyzedInstructionsApi;
