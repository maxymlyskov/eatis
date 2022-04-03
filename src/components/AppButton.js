import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import colors from "../config/colors";
import fonts from "../styles/fonts";

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
      <Text style={[styles.text, fonts.Bold24, { color: color }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: colors.green,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    paddingHorizontal: 25,
  }
});

export default AppButton;
