import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../config/colors";

function PreFilter({ title, onPress, backgroundColor, color, id }) {
  const [isPress, setIsPress] = React.useState(false);

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          isPress ? { backgroundColor: colors.green } : {},
        ]}
      >
        <Text style={[styles.text]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 40,
    borderRadius: 20,
    margin: 1,
  },
  text: {
    fontFamily: "NunitoBold",
    fontSize: 15,
    color: colors.lightSilver,
  },
});

export default PreFilter;
