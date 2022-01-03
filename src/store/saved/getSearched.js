import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

export const getSearched = createApi({
  reducerPath: "getSearched",
  tagTypes: ["Recipes"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.0.106:4000/api/recipeSearch",
  }),
  endpoints: (builder) => ({
    getSearched: builder.query({
      query: () => `/wall`,
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: "Recipes", id })), "Recipes"]
          : ["Recipes"],
    }),
    addSearched: builder.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Recipes"],
    }),
    deleteSearched: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Recipes"],
    }),
  }),
});
export const {
  useGetSearchedQuery,
  useAddSearchedMutation,
  useDeleteSearchedMutation,
} = getSearched;
