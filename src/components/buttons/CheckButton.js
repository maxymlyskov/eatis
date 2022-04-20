import React, { useState, useRef } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";

function ChevronButton({ onPressAnimated, image }) {
  const [isEaten, setIsEaten] = useState(true);

  const animation = useRef(null);
  return (
    <TouchableOpacity
      onPress={() => {
        onPressAnimated();
        if (isEaten) {
          animation.current.play(75, 0);
          setIsEaten(false);
        } else {
          animation.current.play(0, 75);
          setIsEaten(true);
        }
      }}
    >
      <LottieView
        autoPlay
        loop={false}
        source={image}
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
    width: 25,
    height: 25,
  },
});

export default ChevronButton;
