import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";

import Constans from "expo-constants";
import colors from "../config/colors";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constans.statusBarHeight,
    flex: 1,
    backgroundColor: colors.dark,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
