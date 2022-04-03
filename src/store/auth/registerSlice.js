import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weight: null,
  height: null,
  gender: "",
  birthDate: Date,
  goal: "",
  activity: "",
  bodyType: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    getWeight: (state, { payload }) => {
      state.weight = payload;
    },
    getHeight: (state, { payload }) => {
      state.height = payload;
    },
    getGender: (state, { payload }) => {
      state.gender = payload;
    },
    getBirthDate: (state, { payload }) => {
      state.birthDate = payload;
    },
    getGoal: (state, { payload }) => {
      state.goal = payload;
    },
    getActivity: (state, { payload }) => {
      state.activity = payload;
    },
    getBodyType: (state, { payload }) => {
      state.bodyType = payload;
    },
  },
});
export const {
  getBirthDate,
  getBodyType,
  getGender,
  getGoal,
  getHeight,
  getWeight,
  getActivity,
} = registerSlice.actions;
export default registerSlice.reducer;
