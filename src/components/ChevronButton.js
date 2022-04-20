import React, {  useState, useRef } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";

function ChevronButton({ onPressAnimated }) {
  const [isEaten, setIsEaten] = useState(false);

  const animation = useRef(null);
  return (
    <TouchableOpacity
      onPress={() => {
        if (!isEaten) {
          animation.current.play(0, 75);
          setIsEaten(true);
        } else {
          animation.current.play(75, 0);
          setIsEaten(false);
        }
        onPressAnimated();
      }}
    >
      <LottieView
        loop={false}
        source={require("../../assets/animations/chevron.json")}
        style={styles.animation}
        ref={animation}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {},
  animation: {
    width: 20,
    height: 20,
  },
});

export default ChevronButton;
