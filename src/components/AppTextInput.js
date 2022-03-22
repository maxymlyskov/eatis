import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import fonts from "../styles/fonts";

function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      <TextInput
        placeholderTextColor="silver"
        style={[styles.textInput, fonts.Regular16]}
        {...otherProps}
      />
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={30}
          style={styles.icon}
          color="black"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  textInput: {
    flex: 1,
  },

  icon: {
    paddingLeft: 10,
  },
});

export default AppTextInput;
