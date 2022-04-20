import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <View style={{ flex: 0.49, alignSelf: "center" }}>
        <LottieView
          autoPlay
          loop
          style={{
            flex: 0.3,
            flexGrow: 1,
            width: 50,
            height: 50,
          }}
          source={require(`../../assets/animations/loader`)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    height: "100%",
    width: "100%",
    zIndex: 1,
    flex: 1,
    position: "absolute",
  },
});

export default ActivityIndicator;
