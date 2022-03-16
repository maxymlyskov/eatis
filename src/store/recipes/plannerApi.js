import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AUTH } from "../constants";

export const plannerApi = createApi({
  reducerPath: "plannerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.spoonacular.com/mealplanner/generate${AUTH}`,
  }),
  endpoints: (builder) => ({
    getDayPlanner: builder.query({
      query: (diet) => `planner?&timeFrame=day&diet=${diet}`,
    }),
    getWeekPlanner: builder.query({
      query: (ingridient) => `planner?&timeFrame=week&exclude=${ingridient}`,
    }),
    getWeekPlannerWithDiet: builder.query({
      query: (diet) => `planner?&timeFrame=week&diet=${diet}`,
    }),
    filterTargetCalories: builder.query({
      query: (targetCalories) =>
        `planner?${targetCalories && `&targetCalories=${targetCalories}`}`,
    }),
    filterDiet: builder.query({
      query: (diet) => `planner?${diet && `&diet=${diet}`}`,
    }),
    filterExclude: builder.query({
      query: (exclude) => `planner?${exclude && `&exclude=${exclude}`}`,
    }),
  }),
});
export const {
  useFilterDietQuery,
  useFilterExcludeQuery,
  useFilterTargetCaloriesQuery,
  useGetDayPlannerQuery,
  useGetWeekPlannerQuery,
  useGetWeekPlannerWithDietQuery,
} = plannerApi;
