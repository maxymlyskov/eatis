import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AppButton from "../../components/AppButton";
import { getGoal } from "../../store/auth/registerSlice";
import colors from "../../config/colors";
import fonts from "../../styles/fonts";

function GoalScreen({}) {
  const dispatch = useDispatch();
  const register = useSelector((state) => state.register.goal);

  const [color, setColor] = useState("");

  return (
    <>
      <View>
        <View style={{ padding: 10 }}>
          <AppButton
            title="Lose weight"
            backgroundColor={color === "Lose Weight" ? colors.green : "white"}
            borderColor={color === "Lose Weight" ? "white" : colors.black}
            color={color === "Lose Weight" ? "white" : colors.black}
            borderWidth={1}
            onPress={() => {
              dispatch(getGoal("Lose Weight"));
              console.log(register);
              setColor("Lose Weight");
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
    </>
  );
}

export default GoalScreen;
