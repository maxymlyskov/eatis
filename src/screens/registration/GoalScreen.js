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
            backgroundColor={color === "Lose Weight" ? colors.green : "white"}
            borderColor={color === "Lose Weight" ? "white" : colors.black}
            color={color === "Lose Weight" ? "white" : colors.black}
            borderWidth={1}
            onPress={() => {
              dispatch(getGoal("Los eWeight"));
              console.log(register);
              setColor("Los eWeight");
            }}
          />
        </View>
        <View style={{ padding: 10 }}>
          <AppButton
            title="Save weight"
            backgroundColor={color === "Save weight" ? colors.green : "white"}
            borderWidth={1}
            borderColor={color === "Save weight" ? "white" : colors.black}
            color={color === "Save weight" ? "white" : colors.black}
            onPress={() => {
              dispatch(getGoal("Save weight"));
              console.log(register);
              setColor("Save weight");
            }}
          />
        </View>
        <View style={{ padding: 10 }}>
          <AppButton
            title="Gain weight"
            backgroundColor={color === "Gain weight" ? colors.green : "white"}
            borderWidth={1}
            borderColor={color === "Gain weight" ? "white" : colors.black}
            color={color === "Gain weight" ? "white" : colors.black}
            onPress={() => {
              dispatch(getGoal("Gain weight"));
              console.log(register);
              setColor("Gain weight");
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
