import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AppButton from "../../components/AppButton";
import { getGoal } from "../../store/auth/registerSlice";
import colors from "../../config/colors";

function GoalScreen({}) {
  const dispatch = useDispatch();
  const register = useSelector((state) => state.register.goal);

  const [color, setColor] = useState("");

  return (
    <>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>What`s your goal?</Text>
        </View>
        <View style={{ padding: 10 }}>
          <AppButton
            title="Lose weight"
            backgroundColor={color === "lose" ? colors.green : "white"}
            borderWidth={1}
            borderColor={color === "lose" ? "white" : colors.black}
            color={color === "lose" ? "white" : colors.black}
            onPress={() => {
              dispatch(getGoal("lose"));
              console.log(register);
              setColor("lose");
            }}
          />
        </View>
        <View style={{ padding: 10 }}>
          <AppButton
            title="Save weight"
            backgroundColor={color === "save" ? colors.green : "white"}
            borderWidth={1}
            borderColor={color === "save" ? "white" : colors.black}
            color={color === "save" ? "white" : colors.black}
            onPress={() => {
              dispatch(getGoal("save"));
              console.log(register);
              setColor("save");
            }}
          />
        </View>
        <View style={{ padding: 10 }}>
          <AppButton
            title="Gain weight"
            backgroundColor={color === "gain" ? colors.green : "white"}
            borderWidth={1}
            borderColor={color === "gain" ? "white" : colors.black}
            color={color === "gain" ? "white" : colors.black}
            onPress={() => {
              dispatch(getGoal("gain"));
              console.log(register);
              setColor("gain");
            }}
          />
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.bottomText}>
          We’ll use this to calculates and to create better recomendations for
          you.
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 100 },
  text: {
    fontFamily: "NunitoBold",
    fontSize: 25,
  },
  textContainer: {
    margin: 40,

    marginBottom: 80,
  },
  bottom: {
    justifyContent: "center",
    alignItems: "center",
  },
  bottomText: {
    color: colors.grey,
    fontSize: 15,
  },
});

export default GoalScreen;
