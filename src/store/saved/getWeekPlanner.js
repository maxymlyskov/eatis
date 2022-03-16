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
          ? [
              ...result.map(({ id }) => ({ type: "WeekPlanner", id })),
              { type: "WeekPlanner", id: "LIST" },
            ]
          : [{ type: "WeekPlanner", id: "LIST" }],
    }),
    addWeekPlanner: builder.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
      invaldatesTags: [{ type: "WeekPlanner", id: "LIST" }],
    }),
    deleteWeekPlanner: builder.mutation({
      query: (id, day, mealId) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invaldatesTags: [{ type: "WeekPlanner", id: "LIST" }],
    }),
    patchWeekPlanner: builder.mutation({
      query: (id, day, body) => ({
        url: `/${id}/${day}`,
        method: "PATCH",
        body,
      }),
      invaldatesTags: [{ type: "WeekPlanner", id: "LIST" }],
    }),
  }),
});
export const {
  useGetWeekPlannerQuery,
  useAddWeekPlannerMutation,
  useDeleteWeekPlannerMutation,
  usePatchWeekPlannerMutation,
} = getWeekPlanner;
