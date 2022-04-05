import React, { useEffect, useState } from "react";

import { Provider } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AppNavigator from "./src/routes/AppNavigator";
import * as BackgroundFetch from "expo-background-fetch";
import * as TaskManager from "expo-task-manager";

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
