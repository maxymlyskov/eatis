import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import DiaryStack from "./src/routes/DiaryStack";
import RecipeStack from "./src/routes/RecipeStack";
import PluseStack from "./src/routes/PluseStack";
import SavedStack from "./src/routes/SavedStack";
import ProfileStack from "./src/routes/ProfileStack";

import colors from "./src/config/colors";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,

          tabBarIcon: ({ color, size }) => {
            const icons = {
              Diary: 'home',
              Profile: 'account',
              Recipe: 'chef-hat',
              Saved: 'bookmark',
            };
            return (
              <MaterialCommunityIcons
                name={icons[route.name]}
                color={color}
                size={size}
              />
            );
          },

          tabBarActiveTintColor: colors.green,
          tabBarInactiveTintColor: colors.grey,

          tabBarStyle: {
            elevation: 0,
            borderTopWidth: 0
          }
        })}
      >
        <Tab.Screen name="Diary" component={DiaryStack} />
        <Tab.Screen name="Recipe" component={RecipeStack} />
        <Tab.Screen name="Pluse" component={PluseStack} />
        <Tab.Screen name="Saved" component={SavedStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
