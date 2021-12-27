import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Provider } from "react-redux";

import { useFonts } from "expo-font";

import DiaryStack from "./src/routes/DiaryStack";
import RecipeStack from "./src/routes/RecipeStack";
import PluseStack from "./src/routes/PluseStack";
import SavedStack from "./src/routes/SavedStack";
import ProfileStack from "./src/routes/ProfileStack";

import PlusButton from "./src/routes/PlusButton";

import colors from "./src/config/colors";
import { store } from "./src/store/store";

const Tab = createBottomTabNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: colors.green,
    background: "#fff",
    card: "#fff",
    text: colors.grey,
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};

export default function App() {
  const [loaded] = useFonts({
    NunitoBold: require("./assets/fonts/Nunito-Bold.ttf"),
    NunitoSemiBold: require("./assets/fonts/Nunito-SemiBold.ttf"),
    NunitoRegular: require("./assets/fonts/Nunito-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer
        navigationOptions={{ headerShown: false }}
        theme={MyTheme}
      >
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,

            tabBarIcon: ({ color, size }) => {
              const icons = {
                Diary: "home",
                Profile: "account",
                Recipe: "chef-hat",
                Saved: "bookmark",
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
              borderTopWidth: 0,
            },

            tabBarLabelStyle: {
              fontFamily: "NunitoRegular",
            },
          })}
        >
          <Tab.Screen name="Diary" component={DiaryStack} />
          <Tab.Screen name="Recipe" component={RecipeStack} />
          <Tab.Screen
            name="Pluse"
            component={PluseStack}
            options={({ navigation }) => ({
              tabBarButton: () => <PlusButton onPress={console.log("pluss")} />,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  size={size}
                  color={color}
                  name="plus-circle"
                />
              ),
            })}
          />
          <Tab.Screen name="Saved" component={SavedStack} />
          <Tab.Screen name="Profile" component={ProfileStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
