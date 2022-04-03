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
            backgroundColor={color === "lose" ? colors.green : "white"}
            borderWidth={1}
            borderColor={color === "lose" ? "white" : colors.grey}
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
            borderColor={color === "save" ? "white" : colors.grey}
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
            borderColor={color === "gain" ? "white" : colors.grey}
            color={color === "gain" ? "white" : colors.black}
            onPress={() => {
              dispatch(getGoal("gain"));
              console.log(register);
              setColor("gain");
            }}
          />
        </View>
      </View>
    </>
  );
}

export default GoalScreen;
