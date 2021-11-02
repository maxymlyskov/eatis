import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AuthNavigator from "./src/navigation/AuthNavigation";
import StartScreen from "./src/screens/auth/StartScreen";
import WelcomeScreen from "./src/screens/auth/WelcomeScreen";

export default function App() {
  return <AuthNavigator />;
}

const styles = StyleSheet.create({});
