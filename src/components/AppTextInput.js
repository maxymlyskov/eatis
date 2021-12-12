import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

import defaultStyles from "../config/styles";
import colors from "../config/colors";

function AppTextInput({ icon, width = "100%", ...otherProps }) {
  //   const [loaded] = useFonts({
  //     MontserratMedium: require("../../assets/fonts/Montserrat/Montserrat-Medium.ttf"),
  //   });

  //   if (!loaded) {
  //     return null;
  //   }

  return (
    <View style={[styles.container, { width }]}>
      <TextInput
        placeholderTextColor={colors.purple}
        style={styles.textInput}
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
    padding: 10,
  },

  textInput: {
    flex: 1,
    fontFamily: "MontserratMedium",
    fontSize: 16,
    padding: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },

  icon: {
    paddingLeft: 10,
  },
});

export default AppTextInput;
