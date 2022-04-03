import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";
import authStorage from "../../auth/storage";

export const getDayPlanner = createApi({
  reducerPath: "getDayPlanner",
  tagTypes: ["DayPlanner"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.0.106:4000/api/dayPlanner",
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
      invalidatesTags: ["DayPlanner"],
    }),
    deleteDayPlanner: builder.mutation({
      query: (id, mealId) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["DayPlanner"],
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
