import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import colors from "../config/colors";
import fonts from "../styles/fonts";

function MiniButton({
  title,
  onPress,
  backgroundColor = colors.green,
  borderWidth,
  borderColor,
  color = "white",
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor, borderColor }]}
      onPress={onPress}
    >
      <Text style={[styles.text, fonts.Bold18, { color: color }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 25,
  },
});

export default MiniButton;
