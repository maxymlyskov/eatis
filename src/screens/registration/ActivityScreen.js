import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AppButton from "../../components/AppButton";
import { getActivity } from "../../store/auth/registerSlice";
import colors from "../../config/colors";

function ActivityScreen({}) {
  const dispatch = useDispatch();
  const register = useSelector((state) => state.register.activity);

  const [color, setColor] = useState("");

  return (
    <>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Choose your activity</Text>
        </View>
        <View style={{ padding: 10 }}>
          <AppButton
            title="Low"
            backgroundColor={color === "Low" ? colors.green : "white"}
            borderColor={color === "Low" ? "white" : colors.black}
            color={color === "Low" ? "white" : colors.black}
            borderWidth={1}
            onPress={() => {
              dispatch(getActivity("Low"));
              console.log(register);
              setColor("Low");
            }}
          />
        </View>
        <View style={{ padding: 10 }}>
          <AppButton
            title="Below average"
            backgroundColor={color === "Below average" ? colors.green : "white"}
            borderWidth={1}
            borderColor={color === "Below average" ? "white" : colors.black}
            color={color === "Below average" ? "white" : colors.black}
            onPress={() => {
              dispatch(getActivity("Below average"));
              console.log(register);
              setColor("Below average");
            }}
          />
        </View>
        <View style={{ padding: 10 }}>
          <AppButton
            title="Average"
            backgroundColor={color === "Average" ? colors.green : "white"}
            borderWidth={1}
            borderColor={color === "Average" ? "white" : colors.black}
            color={color === "Average" ? "white" : colors.black}
            onPress={() => {
              dispatch(getActivity("Average"));
              console.log(register);
              setColor("Average");
            }}
          />
        </View>
        <View style={{ padding: 10 }}>
          <AppButton
            title="Above average"
            backgroundColor={color === "Above average" ? colors.green : "white"}
            borderWidth={1}
            borderColor={color === "Above average" ? "white" : colors.black}
            color={color === "Above average" ? "white" : colors.black}
            onPress={() => {
              dispatch(getActivity("Above average"));
              console.log(register);
              setColor("Above average");
            }}
          />
        </View>
        <View style={{ padding: 10 }}>
          <AppButton
            title="High"
            backgroundColor={color === "High" ? colors.green : "white"}
            borderWidth={1}
            borderColor={color === "High" ? "white" : colors.black}
            color={color === "High" ? "white" : colors.black}
            onPress={() => {
              dispatch(getActivity("High"));
              console.log(register);
              setColor("High");
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
  container: { paddingBottom: 10 },
  text: {
    fontFamily: "NunitoBold",
    fontSize: 25,
  },
  textContainer: {
    margin: 40,
  },
  bottom: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  bottomText: {
    color: colors.grey,
    fontSize: 15,
  },
});

export default ActivityScreen;
