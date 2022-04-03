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
            backgroundColor={color === "Male" ? colors.green : "white"}
            borderColor={color === "Male" ? "white" : colors.black}
            color={color === "Male" ? "white" : colors.black}
            borderWidth={1}
            onPress={() => {
              dispatch(getGender("Male"));
              console.log(register);
              setColor("Male");
            }}
          />
        </View>
        <View style={{ padding: 10 }}>
          <AppButton
            title="Female"
            backgroundColor={color === "Female" ? colors.green : "white"}
            borderColor={color === "Female" ? "white" : colors.black}
            color={color === "Female" ? "white" : colors.black}
            borderWidth={1}
            onPress={() => {
              dispatch(getGender("Female"));
              console.log(register);
              setColor("Female");
            }}
          />
        </View>
      </View>
    </>
  );
}

export default GenderScreen;
