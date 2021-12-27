import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AUTH } from "../../constants";

export const nutritionApi = createApi({
  reducerPath: "nutritionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spoonacular.com/recipes",
  }),
  endpoints: (builder) => ({
    getNutritionById: builder.query({
      query: (id) => `/${id}/nutritionWidget.json${AUTH}`,
    }),
  }),
});
export const { useGetNutritionByIdQuery } = nutritionApi;
