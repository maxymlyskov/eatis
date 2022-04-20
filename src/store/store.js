import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./auth/userSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { searchApi } from "./recipes/searchApi";
import { ingredientsSearchApi } from "./recipes/ingredientsSearchApi";
import { ingredientApi } from "./recipes/infoById/ingredientApi";
import { plannerApi } from "./recipes/plannerApi";
import { infoApi } from "./recipes/infoById/infoApi";
import { nutritionApi } from "./recipes/infoById/nutritionApi";
import { randomApi } from "./recipes/randomApi";
import { similarApi } from "./recipes/infoById/similarApi";
import { optionalApi } from "./recipes/optional/optionalApi";
import { getSearched } from "./saved/getSearched";
import { analyzedInstructionsApi } from "./recipes/infoById/analyzedInstructionsApi";
import { getDayPlanner } from "./saved/getDayPlanner";
import { getWeekPlanner } from "./saved/getWeekPlanner";
import registerSlice from "./auth/registerSlice";
import { authApi } from "./auth/authApi";
import { resetApi } from "./auth/resetApi";

export const store = configureStore({
  reducer: {
    register: registerSlice,
    user: userSlice,
    [authApi.reducerPath]: authApi.reducer,
    [resetApi.reducerPath]: resetApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    [ingredientsSearchApi.reducerPath]: ingredientsSearchApi.reducer,
    [getDayPlanner.reducerPath]: getDayPlanner.reducer,
    [getWeekPlanner.reducerPath]: getWeekPlanner.reducer,
    [randomApi.reducerPath]: randomApi.reducer,
    [infoApi.reducerPath]: infoApi.reducer,
    [nutritionApi.reducerPath]: nutritionApi.reducer,
    [ingredientApi.reducerPath]: ingredientApi.reducer,
    [analyzedInstructionsApi.reducerPath]: analyzedInstructionsApi.reducer,
    [similarApi.reducerPath]: similarApi.reducer,
    [optionalApi.reducerPath]: optionalApi.reducer,
    [plannerApi.reducerPath]: plannerApi.reducer,
    [getSearched.reducerPath]: getSearched.reducer,
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
      .concat(resetApi.middleware)
      .concat(ingredientApi.middleware)
      .concat(similarApi.middleware),
});

setupListeners(store.dispatch);
