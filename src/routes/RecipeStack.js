import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RecipeScreen from "../screens/RecipeScreen";
import SearchScreen from "../screens/SearchScreen";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";
import DayPlannerScreen from "../screens/DayPlannerScreen";
import StepsScreen from "../screens/StepsScreen";
import SavedDayPlannerScreen from "../screens/SavedDayPlannerScreen";
import WeekPlannerScreen from "../screens/WeekPlannerScreen";
import IngredientDetailsScreen from "../screens/IngredientDetailsScreen";
import PluseScreen from "../screens/PluseScreen";

const Stack = createNativeStackNavigator();

export default function RecipeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RecipeScreen" component={RecipeScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen
        name="RecipeDetailsScreen"
        component={RecipeDetailsScreen}
      />
      <Stack.Screen name="StepsScreen" component={StepsScreen} />
      <Stack.Screen
        name="IngredientDetailsScreen"
        component={IngredientDetailsScreen}
      />
      <Stack.Screen name="DayPlannerScreen" component={DayPlannerScreen} />
      <Stack.Screen
        name="SavedDayPlannerScreen"
        component={SavedDayPlannerScreen}
      />
      <Stack.Screen name="WeekPlannerScreen" component={WeekPlannerScreen} />
      <Stack.Screen name="PluseScreen" component={PluseScreen} />
    </Stack.Navigator>
  );
}
