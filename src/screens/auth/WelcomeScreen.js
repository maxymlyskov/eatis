import React from "react";
import { View, StyleSheet } from "react-native";
import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import Screen from "../../components/Screen";
import colors from "../../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <View style={styles.textContainer}>
        <AppText>Your nutrition wizard</AppText>
      </View>
      <AppButton
        color={colors.green}
        title="Create an account"
        onPress={() => navigation.navigate("Start")}
      />
      <AppButton title="Log in" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.dark },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 100,
  },
});

export default WelcomeScreen;
