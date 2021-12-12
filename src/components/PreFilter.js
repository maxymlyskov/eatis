import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../config/colors";

function PreFilter({ title, onPress, backgroundColor, color }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container]}>
        <Text style={[styles.text]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
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
    color: "white",
  },
});

export default PreFilter;
