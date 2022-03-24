import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  email: null,
  name: null,
  weight: null,
  height: null,
  goal: null,
  birthDate: null,
  gender: null,
};

const authSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setSignIn: (state, action) => {
      state.email = action.payload.email;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.name = action.payload.name;
      state.weight = action.payload.weight;
      state.height = action.payload.height;
      state.goal = action.payload.goal;
      state.birthDate = action.payload.birthDate;
      state.gender = action.payload.gender;
    },
    setSignOut: (state) => {
      state.email = null;
      state.isLoggedIn = false;
      state.name = null;
      state.weight = null;
      state.height = null;
      state.goal = null;
      state.birthDate = null;
      state.gender = null;
    },
  },
});

export const { setSignIn, setSignOut } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.userAuth.isLoggedIn;
export const selectEmail = (state) => state.userAuth.email;
export const selectName = (state) => state.userAuth.name;
export const selectHeight = (state) => state.userAuth.height;
export const selectWeight = (state) => state.userAuth.weight;
export const selectGoal = (state) => state.userAuth.goal;
export const selectBirthDate = (state) => state.userAuth.birthDate;
export const selectGender = (state) => state.userAuth.gender;

export default authSlice.reducer;
