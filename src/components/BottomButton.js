import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppButton from "./AppButton";
import LottieView from "lottie-react-native";

function BottomButton({ onPressMake, onPressAnimated }) {
  const [isEaten, setIsEaten] = useState(true);

  const animation = useRef(null);
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      if (isEaten) animation.current.play(75, 75);
      animation.current.play(0, 0);
      isFirstRun.current = false;
      setIsEaten(false);
    } else if (isEaten) {
      animation.current.play(75, 0);
    } else {
      animation.current.play(0, 75);
    }
  }, [isEaten]);
  return (
    <View style={styles.button}>
      <View style={{ marginHorizontal: 20 }}>
        <AppButton title={"Make it now"} onPress={onPressMake} />
      </View>

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
          source={require("../../assets/animations/eaten.json")}
          style={styles.animation}
          ref={(a) => {
            animation.current = a;
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    justifyContent: "center",
    margin: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  animation: {
    width: 200,
    height: 100,
  },
});

export default BottomButton;
