import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AUTH } from "../constants";

export const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.spoonacular.com/recipes/complexSearch${AUTH}`,
  }),
  endpoints: (builder) => ({
    // query for searching by name of the recipe
    getSearch: builder.query({
      query: (query) => `search?${query && `&query=${query}`}`,
    }),

    filterIncludeIngredients: builder.query({
      query: (includeIngredients) =>
        `search?${
          includeIngredients && `&includeIngredients=${includeIngredients}`
        }`,
    }),

    filterMinCalories: builder.query({
      query: (minCalories) =>
        `search?${minCalories && `&minCalories=${minCalories}`}`,
    }),
    filterMaxCalories: builder.query({
      query: (maxCalories) =>
        `search?${maxCalories && `&maxCalories=${maxCalories}`}`,
    }),
  }),
});

export const {
  useGetSearchQuery,
  useFilterMaxCaloriesQuery,
  useFilterMinCaloriesQuery,
  useFilterIncludeIngredientsQuery,
} = searchApi;
