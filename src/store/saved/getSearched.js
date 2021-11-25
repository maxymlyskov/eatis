import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

export const getSearched = createApi({
  reducerPath: "getSearched",
  tagTypes: ["Recipes"],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + "recipeSearch",
  }),
  endpoints: (builder) => ({
    getSearched: builder.query({
      query: () => `recipeSearch`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Recipes", id })),
              { type: "Recipes", id: "LIST" },
            ]
          : [{ type: "Recipes", id: "LIST" }],
    }),
    addSearched: builder.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
      invaldatesTags: [{ type: "Recipes", id: "LIST" }],
    }),
    deleteSearched: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invaldatesTags: [{ type: "Recipes", id: "LIST" }],
    }),
  }),
});
export const {
  useGetSearchedQuery,
  useAddSearchedMutation,
  useDeleteSearchedMutation,
} = getSearched;
