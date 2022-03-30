import React from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import fonts from "../styles/fonts";
import colors from "../config/colors";

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
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  textInput: {
    fontSize: 16,
    padding: 20,
    flex: 1,
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 40,
  },

  icon: {
    paddingLeft: 10,
  },
});

export default AppTextInput;
