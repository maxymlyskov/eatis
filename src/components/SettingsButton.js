import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";

function SettingsButton({ onPressAnimated }) {
  const [isEaten, setIsEaten] = useState(true);

  const animation = useRef(null);
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      if (isEaten) animation.current.play(30, 30);
      animation.current.play(0, 0);
      isFirstRun.current = false;
    } else if (isEaten) {
      animation.current.play(75, 0);
    } else {
      animation.current.play(0, 75);
    }
  }, [isEaten]);
  return (
    <TouchableOpacity
      onPress={() => {
        onPressAnimated();

        setIsEaten(false);
      }}
    >
      <LottieView
        autoPlay
        loop={false}
        // onAnimationFinish={onDone}
        source={require("../../assets/animations/settings.json")}
        style={styles.animation}
        ref={(a) => {
          animation.current = a;
        }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {},
  animation: {
    width: 24,
    height: 24,
  },
});

export default SettingsButton;
