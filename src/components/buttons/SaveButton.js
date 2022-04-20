import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";

function ChevronButton({ onPressAnimated, liked = true }) {
  const [isEaten, setIsEaten] = useState(true);

  const animation = useRef(null);
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (liked) {
      if (isFirstRun.current) {
        if (isEaten) animation.current.play(0, 0);
        animation.current.play(0, 0);
        isFirstRun.current = false;
      } else if (isEaten) {
        animation.current.play(60, 0);
      } else {
        animation.current.play(0, 60);
      }
    } else {
      if (isFirstRun.current) {
        if (isEaten) animation.current.play(60, 60);
        animation.current.play(60, 60);
        isFirstRun.current = false;
      } else if (isEaten) {
        animation.current.play(0, 60);
      } else {
        animation.current.play(60, 0);
      }
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
        source={require("../../../assets/animations/saved.json")}
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
    width: 28,
    height: 28,
  },
});

export default ChevronButton;
