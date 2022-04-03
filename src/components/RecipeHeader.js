import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../config/colors";

function RecipeHeader({ onPressFormat, onPressSearch }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressSearch}>
        <MaterialCommunityIcons size={32} name="magnify" color="black" />
      </TouchableOpacity>
      <View style={styles.search}>
        <TouchableOpacity onPress={onPressFormat}>
          <Text style={styles.ingredients}>Ingredients</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    // paddingHorizontal: 10,
  },
  ingredients: {
    fontFamily: "NunitoBold",
    color: colors.grey,
  },
});

export default RecipeHeader;
