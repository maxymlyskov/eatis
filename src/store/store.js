import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./auth/loginSlice";
import userSlice from "./auth/userSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { searchApi } from "./recipes/searchApi";
import { plannerApi } from "./recipes/plannerApi";
import { infoApi } from "./recipes/infoById/infoApi";
import { nutritionApi } from "./recipes/infoById/nutritionApi";
import { priceApi } from "./recipes/infoById/priceApi";
import { randomApi } from "./recipes/randomApi";
import { similarApi } from "./recipes/infoById/similarApi";
import { tasteApi } from "./recipes/infoById/tasteApi";
import { optionalApi } from "./recipes/optional/optionalApi";
import { getSearched } from "./saved/getSearched";
import { searchFoodApi } from "./recipes/misc/searchFoodApi";
import { analyzedInstructionsApi } from "./recipes/infoById/analyzedInstructionsApi";

export const store = configureStore({
  reducer: {
    // login: loginSlice,
    // user: userSlice,
    [searchApi.reducerPath]: searchApi.reducer,
    // [plannerApi.reducerPath]: plannerApi.reducer,
    [randomApi.reducerPath]: randomApi.reducer,
    [infoApi.reducerPath]: infoApi.reducer,
    [nutritionApi.reducerPath]: nutritionApi.reducer,
    [analyzedInstructionsApi.reducerPath]: analyzedInstructionsApi.reducer,
    // [priceApi.reducerPath]: priceApi.reducer,
    // [similarApi.reducerPath]: similarApi.reducer,
    // [tasteApi.reducerPath]: tasteApi.reducer,
    [optionalApi.reducerPath]: optionalApi.reducer,
    [plannerApi.reducerPath]: plannerApi.reducer,
    [getSearched.reducerPath]: getSearched.reducer,
    // [searchFoodApi.reducerPath]: searchFoodApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    })
      .concat(searchApi.middleware)
      .concat(plannerApi.middleware)
      .concat(randomApi.middleware)
      .concat(infoApi.middleware)
      .concat(nutritionApi.middleware)
      .concat(analyzedInstructionsApi.middleware)
      .concat(getSearched.middleware),
});

setupListeners(store.dispatch);
