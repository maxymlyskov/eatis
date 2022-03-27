import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoading: false,
  error: "",
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
  },
});
export const { getUserSuccess, getUserBoolean } = userSlice.actions;
export default userSlice.reducer;
