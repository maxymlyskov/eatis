import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

export const authApi = createApi({
  reducerPath: "getAuth",
  tagTypes: ["Users"],
  baseQuery: fetchBaseQuery({
    baseUrl: `http://192.168.0.106:4000/api`,
  }),
  endpoints: (builder) => ({
    // getSearched: builder.query({
    //   query: () => ``,
    //   providesTags: (result, error, arg) =>
    //     result
    //       ? [...result.map(({ id }) => ({ type: "Users", id })), "Users"]
    //       : ["Users"],
    // }),

    addAuth: builder.mutation({
      query: (body) => ({
        url: "/auth",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Users"],
    }),

    addUser: builder.mutation({
      query: (body) => ({
        url: "/users",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});
export const { useAddAuthMutation, useAddUserMutation } = authApi;
