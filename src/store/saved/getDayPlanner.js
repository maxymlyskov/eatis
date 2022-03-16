import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

export const getDayPlanner = createApi({
  reducerPath: "getDayPlanner",
  tagTypes: ["DayPlanner"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.1.106:4000/api/dayPlanner",
  }),
  endpoints: (builder) => ({
    getDayPlanner: builder.query({
      query: () => ``,
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "DayPlanner", id })),
              "DayPlanner",
            ]
          : ["DayPlanner"],
    }),
    addDayPlanner: builder.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
      invaldatesTags: ["DayPlanner"],
    }),
    deleteDayPlanner: builder.mutation({
      query: (id, mealId) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invaldatesTags: ["DayPlanner"],
    }),
    patchDayPlanner: builder.mutation({
      query: (id, body) => ({
        url: `/${id}`,
        method: "PATCH",
        body,
      }),
      invaldatesTags: ["DayPlanner"],
    }),
  }),
});
export const {
  useGetDayPlannerQuery,
  useAddDayPlannerMutation,
  useDeleteDayPlannerMutation,
  usePatchDayPlannerMutation,
} = getDayPlanner;
