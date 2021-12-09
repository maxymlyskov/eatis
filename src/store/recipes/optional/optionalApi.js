import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AUTH } from "../../constants";

export const optionalApi = createApi({
  reducerPath: "optionalApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spoonacular.com/food/" + AUTH,
  }),
  endpoints: (builder) => ({
    getJoke: builder.query({
      query: (joke) => `joke?jokes/random`,
    }),
    getTrivia: builder.query({
      query: (trivia) => `trivia?trivia/random`,
    }),
  }),
});
export const { useGetJokeQuery, useGetTriviaQuery } = optionalApi;
