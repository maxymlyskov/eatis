import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import colors from "../config/colors";

function AppButton({
  title,
  onPress,
  backgroundColor = colors.green,
  borderWidth,
  borderColor,
  color = "white",
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor, borderWidth, borderColor }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    borderRadius: 10,
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
