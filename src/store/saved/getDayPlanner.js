import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

export const getDayPlanner = createApi({
  reducerPath: "getDayPlanner",
  tagTypes: ["DayPlanner"],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL + "dayPlanner",
  }),
  endpoints: (builder) => ({
    getDayPlanner: builder.query({
      query: () => `dayPlanner`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "DayPlanner", id })),
              { type: "DayPlanner", id: "LIST" },
            ]
          : [{ type: "DayPlanner", id: "LIST" }],
    }),
    addDayPlanner: builder.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
      invaldatesTags: [{ type: "DayPlanner", id: "LIST" }],
    }),
    deleteDayPlanner: builder.mutation({
      query: (id, mealId) => ({
        url: `/${id}/${mealId}`,
        method: "DELETE",
      }),
      invaldatesTags: [{ type: "DayPlanner", id: "LIST" }],
    }),
    patchDayPlanner: builder.mutation({
      query: (id, body) => ({
        url: `/${id}`,
        method: "PATCH",
        body,
      }),
      invaldatesTags: [{ type: "DayPlanner", id: "LIST" }],
    }),
  }),
});
export const {
  useGetDayPlannerQuery,
  useAddDayPlannerMutation,
  useDeleteDayPlannerMutation,
  usePatchDayPlannerMutation,
} = getDayPlanner;
