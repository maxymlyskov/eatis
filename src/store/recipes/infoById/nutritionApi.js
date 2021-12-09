import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AUTH } from "../../constants";

export const ingridientsApi = createApi({
  reducerPath: "ingridientsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spoonacular.com/recipes/",
  }),
  endpoints: (builder) => ({
    getIngridientsById: builder.query({
      query: (id) => `ingridients?${id}/ingredientWidget.json${AUTH}`,
    }),
  }),
});
export const { useGetIngridientsByIdQuery } = ingridientsApi;
