import React, { useEffect, useState } from "react";

import { Provider } from "react-redux";
import AppNavigator from "./src/routes/AppNavigator";
import AppLoading from "expo-app-loading";

import { useDispatch, useSelector } from "react-redux";

import authStorage from "./src/auth/storage";
import { useFonts } from "expo-font";

import { store } from "./src/store/store";

export default function App() {
  const [loaded] = useFonts({
    NunitoBold: require("./assets/fonts/Nunito-Bold.ttf"),
    NunitoSemiBold: require("./assets/fonts/Nunito-SemiBold.ttf"),
    NunitoRegular: require("./assets/fonts/Nunito-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
    // <AuthStack />
  );
}
