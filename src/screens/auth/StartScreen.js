import React from "react";
import { View, StyleSheet } from "react-native";
import AppButton from "../../components/AppButton";
import Screen from "../../components/Screen";
import colors from "../../config/colors";

function StartScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <AppButton
        title="Start"
        color={colors.green}
        onPress={() => navigation.navigate("Purpose")}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default StartScreen;
