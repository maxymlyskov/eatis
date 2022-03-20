import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PluseScreen from "../screens/PluseScreen";
import IngredientDetailsScreen from "../screens/IngredientDetailsScreen";

const Stack = createNativeStackNavigator();

export default function PluseStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PluseScreen" component={PluseScreen} />
      <Stack.Screen
        name="IngredientDetailsScreen"
        component={IngredientDetailsScreen}
      />
    </Stack.Navigator>
  );
}
