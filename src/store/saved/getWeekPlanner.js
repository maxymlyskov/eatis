import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

export const getWeekPlanner = createApi({
  reducerPath: "getWeekPlanner",
  tagTypes: ["WeekPlanner"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.1.106:4000/api/weekPlanner",
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
