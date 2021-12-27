import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AUTH } from "../constants";

export const plannerApi = createApi({
  reducerPath: "plannerApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://api.spoonacular.com/mealplanner/generate?apiKey=b46a0ef8e3ea4a76b0d120676274bcad&includeNutrition=true",
  }),
  endpoints: (builder) => ({
    getDayPlanner: builder.query({
      query: (planner) => `planner?&timeFrame=day`,
    }),
    getWeekPlanner: builder.query({
      query: (planner) => `planner?&timeFrame=week`,
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
} = plannerApi;
