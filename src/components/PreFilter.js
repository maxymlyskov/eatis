import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../config/colors";

function PreFilter({ title, onPress, backgroundColor, color, id }) {
  const [isPress, setIsPress] = React.useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
        setIsPress(true);
      }}
    >
      <View
        style={[
          styles.container,
          isPress
            ? { backgroundColor: colors.green, borderColor: colors.green }
            : {},
        ]}
      >
        <Text style={[styles.text, isPress ? { color: "white" } : {}]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 5,
    borderRadius: 20,
    borderColor: colors.grey,
    borderWidth: 1,
  },
  text: {
    fontFamily: "NunitoBold",
    fontSize: 15,
    color: colors.grey,
  },
});

export default PreFilter;
