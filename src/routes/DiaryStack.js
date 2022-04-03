import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { getHeaderTitle } from "@react-navigation/elements";

import MyHeader from "../components/MyHeader";
import DiaryScreen from "../screens/DiaryScreen";
import IngredientDetailsScreen from "../screens/IngredientDetailsScreen";
import PluseScreen from "../screens/PluseScreen";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";

const Stack = createNativeStackNavigator();

export default function DiaryStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      // screenOptions={(route) => ({
      //   header: ({ navigation, route, options }) => {
      //     const title = getHeaderTitle(options, route.name);

      //     return <MyHeader title={title} style={options.headerStyle} />;
      //   },

      //   headerStyle: {
      //     flex: 0.07,
      //     justifyContent: "center",
      //   },
      // })}
    >
      <Stack.Screen name="MyDiary" component={DiaryScreen} />
      <Stack.Screen name="PluseScreen" component={PluseScreen} />
      <Stack.Screen
        name="RecipeDetailsScreen"
        component={RecipeDetailsScreen}
      />
      <Stack.Screen
        name="IngredientDetailsScreen"
        component={IngredientDetailsScreen}
      />
    </Stack.Navigator>
  );
}
