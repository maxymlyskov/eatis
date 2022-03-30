import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import colors from "../config/colors";
import DiaryStack from "./DiaryStack";
import RecipeStack from "./RecipeStack";
import PluseStack from "./PluseStack";
import SavedStack from "./SavedStack";
import ProfileStack from "./ProfileStack";
import { useDispatch, useSelector } from "react-redux";
import TestScreen from "../screens/TestScreen";
import PlusButton from "./PlusButton";
import useAuth from "../auth/useAuth";
import AppLoading from "expo-app-loading";
import authStorage from "../auth/storage";
import { getUserSuccess, getUserBoolean } from "../store/auth/userSlice";
import AuthNavigation from "./AuthNavigation";

function AppNavigator(props) {
  const Tab = createBottomTabNavigator();

  // accessing states for auth

  const dispatch = useDispatch();
  const [isReady, setIsReady] = useState(false);
  const { user } = useSelector((state) => state);

  //checking expo storage to get key for auth

  const restoreToken = async () => {
    const user = await authStorage.getUser();
    if (user) {
      dispatch(getUserSuccess(user));
      dispatch(getUserBoolean(true));
    }
  };
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
  // styles
  const [loaded] = useFonts({
    NunitoBold: require("../../assets/fonts/Nunito-Bold.ttf"),
    NunitoSemiBold: require("../../assets/fonts/Nunito-SemiBold.ttf"),
    NunitoRegular: require("../../assets/fonts/Nunito-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  // restoring expo token  on start
  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreToken}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );

  if (!user.isLoggedIn) {
    return <AuthNavigation />;
  }

  return (
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
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppNavigator;
