import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./auth/loginSlice";
import userSlice from "./auth/userSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { searchApi } from "./recipes/searchApi";
import { ingredientsSearchApi } from "./recipes/ingredientsSearchApi";
import { ingredientApi } from "./recipes/infoById/ingredientApi";
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
import { getDayPlanner } from "./saved/getDayPlanner";
import { getWeekPlanner } from "./saved/getWeekPlanner";
import authSlice from "./auth/authSlice";
import registerSlice from "./auth/registerSlice";
import { authApi } from "./auth/authApi";

export const store = configureStore({
  reducer: {
    // login: loginSlice,
    register: registerSlice,
    user: userSlice,
    userAuth: authSlice,
    [authApi.reducerPath]: authApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    [ingredientsSearchApi.reducerPath]: ingredientsSearchApi.reducer,
    // [plannerApi.reducerPath]: plannerApi.reducer,
    [getDayPlanner.reducerPath]: getDayPlanner.reducer,
    [getWeekPlanner.reducerPath]: getWeekPlanner.reducer,
    [randomApi.reducerPath]: randomApi.reducer,
    [infoApi.reducerPath]: infoApi.reducer,
    [nutritionApi.reducerPath]: nutritionApi.reducer,
    [ingredientApi.reducerPath]: ingredientApi.reducer,
    [analyzedInstructionsApi.reducerPath]: analyzedInstructionsApi.reducer,
    // [priceApi.reducerPath]: priceApi.reducer,
    [similarApi.reducerPath]: similarApi.reducer,
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
      .concat(getSearched.middleware)
      .concat(optionalApi.middleware)
      .concat(getDayPlanner.middleware)
      .concat(getWeekPlanner.middleware)
      .concat(ingredientsSearchApi.middleware)
      .concat(authApi.middleware)
      .concat(ingredientApi.middleware)
      .concat(similarApi.middleware),
});

setupListeners(store.dispatch);
