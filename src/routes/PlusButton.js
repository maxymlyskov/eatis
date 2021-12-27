import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          size={40}
          name="plus-circle"
          color={colors.green}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 40,
    width: 40,
    borderRadius: 40,
    top: 3,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NewListingButton;
