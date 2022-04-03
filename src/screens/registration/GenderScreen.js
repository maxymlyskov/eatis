import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AppButton from "../../components/AppButton";
import colors from "../../config/colors";
import { getGender } from "../../store/auth/registerSlice";

function GenderScreen(props) {
  const dispatch = useDispatch();
  const register = useSelector((state) => state.register.gender);

  const [color, setColor] = useState("");
  return (
    <>
      <View>
        <View style={{ padding: 10 }}>
          <AppButton
            title="Male"
            backgroundColor={color === "male" ? colors.green : "white"}
            borderColor={color === "male" ? "white" : colors.grey}
            color={color === "male" ? "white" : colors.black}
            borderWidth={1}
            onPress={() => {
              dispatch(getGender("male"));
              console.log(register);
              setColor("male");
            }}
          />
        </View>
        <View style={{ padding: 10 }}>
          <AppButton
            title="Female"
            backgroundColor={color === "female" ? colors.green : "white"}
            borderColor={color === "female" ? "white" : colors.grey}
            color={color === "female" ? "white" : colors.black}
            borderWidth={1}
            onPress={() => {
              dispatch(getGender("female"));
              console.log(register);
              setColor("female");
            }}
          />
        </View>
      </View>
    </>
  );
}

export default GenderScreen;
