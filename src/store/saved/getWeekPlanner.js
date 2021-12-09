import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

export const getWeekPlanner = createApi({
  reducerPath: "getWeekPlanner",
  tagTypes: ["WeekPlanner"],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + "weekPlanner",
  }),
  endpoints: (builder) => ({
    getWeekPlanner: builder.query({
      query: () => `weekPlanner`,
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
        url: `/${id}/${day}/${mealId}`,
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
