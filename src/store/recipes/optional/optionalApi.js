import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AUTH } from "../../constants";

export const optionalApi = createApi({
  reducerPath: "optionalApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spoonacular.com/food",
  }),
  endpoints: (builder) => ({
    getJoke: builder.query({
      query: (joke) => `/jokes/random${AUTH}`,
    }),
    getTrivia: builder.query({
      query: (trivia) => `/trivia/random${AUTH}`,
    }),
  }),
});
export const { useGetJokeQuery, useGetTriviaQuery } = optionalApi;
