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
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Choose your gender</Text>
        </View>
        <View style={{ padding: 10 }}>
          <AppButton
            title="Male"
            backgroundColor={color === "male" ? colors.green : "white"}
            borderColor={color === "male" ? "white" : colors.black}
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
            borderColor={color === "female" ? "white" : colors.black}
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
  container: { marginBottom: 193 },
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

export default GenderScreen;
