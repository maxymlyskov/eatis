import React from "react";
import { View, StyleSheet } from "react-native";
import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import Screen from "../../components/Screen";
import colors from "../../config/colors";

function EndingScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <AppText>You have succesfully created an account!</AppText>
      </View>
      <AppButton title="Start my journey" color={colors.green} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 70,
  },
});

export default EndingScreen;
