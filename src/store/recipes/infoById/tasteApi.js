import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AUTH } from "../constants";

export const tasteApi = createApi({
  reducerPath: "tasteApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spoonacular.com/recipes/",
  }),
  endpoints: (builder) => ({
    getTasteById: builder.query({
      query: (id) => `taste?${id}/tasteWidget.json${AUTH}`,
    }),
  }),
});
export const { useGetTasteByIdQuery } = tasteApi;
