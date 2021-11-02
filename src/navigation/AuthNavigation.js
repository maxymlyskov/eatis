import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/auth/WelcomeScreen";
import StartScreen from "../screens/auth/StartScreen";
import PurposeScreen from "../screens/auth/PurposeScreen";
import { NavigationContainer } from "@react-navigation/native";
import BirthDateScreen from "../screens/auth/BirthDateScreen";
import GenderScreen from "../screens/auth/GenderScreen";
import HeightScreen from "../screens/auth/HeightScreen";
import WeightScreen from "../screens/auth/WeightScreen";
import EndingScreen from "../screens/auth/EndingScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="Purpose" component={PurposeScreen} />
      <Stack.Screen name="Gender" component={GenderScreen} />
      <Stack.Screen name="BirthDate" component={BirthDateScreen} />
      <Stack.Screen name="Height" component={HeightScreen} />
      <Stack.Screen name="Weight" component={WeightScreen} />
      <Stack.Screen name="Ending" component={EndingScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AuthNavigator;
