import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PluseScreen from "../screens/PluseScreen";

const Stack = createNativeStackNavigator();

export default function PluseStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PluseScreen" component={PluseScreen} />
    </Stack.Navigator>
  );
}
