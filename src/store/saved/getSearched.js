import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";
import authStorage from "../../auth/storage";

export const getSearched = createApi({
  reducerPath: "getSearched",
  tagTypes: ["Recipes"],
  baseQuery: fetchBaseQuery({
    baseUrl: `http://192.168.0.106:4000/api/recipeSearch`,
    prepareHeaders: async (headers) => {
      const token = await authStorage.getToken();
      console.log(token);
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("x-auth-token", `${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSearched: builder.query({
      query: () => ``,
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: "Recipes", id })), "Recipes"]
          : ["Recipes"],
    }),
    getPopular: builder.query({
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
      prepareHeaders: (headers) => {
        const token = authStorage.getToken();

        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
          headers.set("x-auth-token", `${token}`);
        }

        return headers;
      },
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
  useGetPopularQuery,
  useAddSearchedMutation,
  useDeleteSearchedMutation,
} = getSearched;
