import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RecipeScreen from "../screens/RecipeScreen";

const Stack = createNativeStackNavigator();

export default function RecipeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RecipeScreen" component={RecipeScreen} />
    </Stack.Navigator>
  );
}
