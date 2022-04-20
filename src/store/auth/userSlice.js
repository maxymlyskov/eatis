import { createSlice } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";

const initialState = {
  user: {},
  isLoading: false,
  error: "",
  calories: null,
  eaten: 0,
  weights: [],
  notes: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserSuccess: (state, { payload }) => {
      state.user = payload;
      state.error = "";
    },
    getUserBoolean: (state, { payload }) => {
      state.isLoggedIn = payload;
    },
    getCalories: (state, { payload }) => {
      state.calories = payload;
    },
    getEaten: (state, { payload }) => {
      state.eaten += payload;
    },
    getWeights: (state, { payload }) => {
      state.weights = payload;
    },
    getNotes: (state, { payload }) => {
      state.notes = payload;
    },
  },
});
export const {
  getUserSuccess,
  getUserBoolean,
  getCalories,
  getEaten,
  getWeights,
  getNotes,
} = userSlice.actions;
export default userSlice.reducer;
