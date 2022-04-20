import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ToDoPlansScreen from "../screens/ToDoPlansScreen";
import PlansDetailsScreen from "../screens/PlansDetailsScreen";

const Stack = createNativeStackNavigator();

export default function PluseStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} mode="card">
      <Stack.Screen name="ToDoPlansScreen" component={ToDoPlansScreen} />
      <Stack.Screen name="PlansDetailsScreen" component={PlansDetailsScreen} />
    </Stack.Navigator>
  );
}
