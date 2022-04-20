import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";
import authStorage from "../../auth/storage";

export const getWeekPlanner = createApi({
  reducerPath: "getWeekPlanner",
  tagTypes: ["WeekPlanner"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://salty-sierra-90789.herokuapp.com/api/weekPlanner",
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
    getWeekPlanner: builder.query({
      query: () => ``,
      providesTags: (result) =>
        result
          ? result.map(({ id }) => ({ type: "WeekPlanner", id }))
          : ["WeekPlanner"],
    }),
    addWeekPlanner: builder.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
      invalidatesTags: ["WeekPlanner"],
    }),
    deleteWeekPlanner: builder.mutation({
      query: (id, day, mealId) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["WeekPlanner"],
    }),
    patchWeekPlanner: builder.mutation({
      query: (id, day, body) => ({
        url: `/${id}/${day}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["WeekPlanner"],
    }),
  }),
});
export const {
  useGetWeekPlannerQuery,
  useAddWeekPlannerMutation,
  useDeleteWeekPlannerMutation,
  usePatchWeekPlannerMutation,
} = getWeekPlanner;
