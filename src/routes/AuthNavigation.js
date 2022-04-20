import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import RegisterScreen from "../screens/registration/RegisterScreen";
import TryResetScreen from "../screens/reset/TryResetScreen";
import EndResetScreen from "../screens/reset/EndResetScreen";

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="TryResetScreen" component={TryResetScreen} />
        <Stack.Screen name="EndResetScreen" component={EndResetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
