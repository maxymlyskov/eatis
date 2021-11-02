import React from "react";
import { TextInput, View, StyleSheet, Platform } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";

function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={50}
          style={styles.icon}
          color={defaultStyles.colors.grey}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.grey}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.dark,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: defaultStyles.colors.white,
    flexDirection: "row",
    marginVertical: 15,
    padding: 10,
  },
  icon: {
    marginRight: 15,
  },
});

export default AppTextInput;
