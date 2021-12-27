import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import colors from "../config/colors";

function AppButton({ title, onPress, color = "silver" }) {
  //   const [loaded] = useFonts({
  //     YesevaOne: require("../../assets/fonts/YesevaOne.ttf"),
  //   });

  //   if (!loaded) {
  //     return null;
  //   }

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    paddingHorizontal: 25,
    borderColor: "black",
  },
  text: {
    fontFamily: "NunitoBold",
    fontSize: 30,
    color: "white",
  },
});

export default AppButton;
