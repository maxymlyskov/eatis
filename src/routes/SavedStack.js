import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SavedScreen from "../screens/SavedScreen";
import SavedDayPlannerScreen from "../screens/SavedDayPlannerScreen";
import DayPlannerScreen from "../screens/DayPlannerScreen";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";
import StepsScreen from "../screens/StepsScreen";
import WeekPlannerScreen from "../screens/WeekPlannerScreen";
import SavedWeekPlannerScreen from "../screens/SavedWeekPlannerScreen";

const Stack = createNativeStackNavigator();

export default function SavedStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SavedScreen" component={SavedScreen} />
      <Stack.Screen
        name="SavedDayPlannerScreen"
        component={SavedDayPlannerScreen}
      />
      <Stack.Screen name="DayPlannerScreen" component={DayPlannerScreen} />
      <Stack.Screen name="WeekPlannerScreen" component={WeekPlannerScreen} />
      <Stack.Screen
        name="SavedWeekPlannerScreen"
        component={SavedWeekPlannerScreen}
      />
      <Stack.Screen
        name="RecipeDetailsScreen"
        component={RecipeDetailsScreen}
      />
      <Stack.Screen name="StepsScreen" component={StepsScreen} />
    </Stack.Navigator>
  );
}
