import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weight: "",
  height: "",
  gender: "",
  birthDate: "",
  goal: "",
  goal: {},
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
} = registerSlice.actions;
export default registerSlice.reducer;
