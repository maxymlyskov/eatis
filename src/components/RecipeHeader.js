import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

function RecipeHeader({ onPressFormat, onPressSearch }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressSearch}>
        <MaterialCommunityIcons size={32} name="magnify" color="black" />
      </TouchableOpacity>
      <View style={styles.search}>
        <TouchableOpacity onPress={onPressFormat}>
          <MaterialCommunityIcons
            size={32}
            name="filter-outline"
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10
    // paddingHorizontal: 10,
  },
});

export default RecipeHeader;
