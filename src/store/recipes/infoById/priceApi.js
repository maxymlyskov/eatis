import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AUTH } from "../../constants";

export const priceApi = createApi({
  reducerPath: "priceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spoonacular.com/recipes/" + AUTH,
  }),
  endpoints: (builder) => ({
    getPriceById: builder.query({
      query: (price) => `price?${id}/priceBreakdownWidget.json${AUTH}`,
    }),
  }),
});
export const { useGetPriceByIdQuery } = priceApi;
