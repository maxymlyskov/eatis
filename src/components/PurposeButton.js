import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  View,
} from "react-native";
import colors from "../config/colors";

function PurposeButton({ title, onPress, color = "dark" }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: color }]}
        onPress={onPress}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.dark,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 15,
    paddingLeft: Dimensions.get("window").width / 10,
    padding: 15,
    width: "80%",
    marginVertical: 10,
  },
  text: {
    fontSize: Dimensions.get("window").height / 30,
    color: colors.white,
    fontWeight: "bold",
  },
});

export default PurposeButton;
