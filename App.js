import React, { useEffect, useState } from "react";

import { Provider } from "react-redux";
import AppNavigator from "./src/routes/AppNavigator";
import AppLoading from "expo-app-loading";

import { useDispatch, useSelector } from "react-redux";

import authStorage from "./src/auth/storage";
import { useFonts } from "expo-font";

import { store } from "./src/store/store";
import RecipeScreen from "./src/screens/RecipeScreen";
import TestScreen from "./src/screens/TestScreen";

export default function App() {
  // const [isReady, setIsReady] = useState(false);

  // const [userReg, setUserReg] = useState();

  // const restoreToken = async () => {
  //   const user = await authStorage.getUser();
  //   console.log(user);
  //   if (user) setUserReg(user);
  // };
  const [loaded] = useFonts({
    NunitoBold: require("./assets/fonts/Nunito-Bold.ttf"),
    NunitoSemiBold: require("./assets/fonts/Nunito-SemiBold.ttf"),
    NunitoRegular: require("./assets/fonts/Nunito-Regular.ttf"),
  });
  // useEffect(async () => {
  //   const user = await authStorage.getUser();
  //   console.log(user);
  //   if (user) setUserReg(user);
  // }, userReg);

  if (!loaded) {
    return null;
  }
  // if (!isReady)
  //   return (
  //     <AppLoading
  //       startAsync={restoreToken}
  //       onFinish={() => setIsReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
