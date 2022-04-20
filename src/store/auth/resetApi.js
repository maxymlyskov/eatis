import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const resetApi = createApi({
  reducerPath: "reset",
  tagTypes: ["Reset"],
  baseQuery: fetchBaseQuery({
    baseUrl: `http://192.168.0.108:4000/api`,
  }),
  endpoints: (builder) => ({
    tryReset: builder.mutation({
      query: (body) => ({
        url: "/reset",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Reset"],
    }),

    endReset: builder.mutation({
      query: (body) => ({
        url: `/reset/${body.email}/${body.token}`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Reset"],
    }),
  }),
});
export const { useTryResetMutation, useEndResetMutation } = resetApi;
