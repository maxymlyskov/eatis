import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.SafeAre, style]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAre: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
})