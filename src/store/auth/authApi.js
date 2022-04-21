import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

export const authApi = createApi({
  reducerPath: "getAuth",
  tagTypes: ["Users"],
  baseQuery: fetchBaseQuery({
    baseUrl: `http://salty-sierra-90789.herokuapp.com/api`,
  }),
  endpoints: (builder) => ({
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
    updateUser: builder.mutation({
      query: (body) => ({
        url: `users/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});
export const { useAddAuthMutation, useAddUserMutation, useUpdateUserMutation } =
  authApi;
