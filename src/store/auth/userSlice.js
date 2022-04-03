import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoading: false,
  error: "",
  calories: null,
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
  },
});
export const { getUserSuccess, getUserBoolean, getCalories } =
  userSlice.actions;
export default userSlice.reducer;
