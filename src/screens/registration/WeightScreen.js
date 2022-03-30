import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import AppButton from "../../components/AppButton";
import colors from "../../config/colors";
import {
  AppFormField,
  AppForm,
  ErrorMessage,
  SubmitButton,
} from "../../components/forms";
import { useDispatch, useSelector } from "react-redux";
import { getWeight } from "../../store/auth/registerSlice";

function WeightScreen(props) {
  const [weight, setWeight] = useState("");

  const dispatch = useDispatch();
  const register = useSelector((state) => state.register.weight);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Write your weight</Text>
        </View>
      </View>
      <AppForm
        initialValues={{ weight: "" }}
        onSubmit={() => console.log("dsa")}
        styles={{ marginHorizontal: 110 }}
      >
        <AppFormField
          placeholder="Weight (kg)"
          name="weight"
          autoCapitalize="none"
          autoCorrect={false}
          value={weight}
          onChangeText={(text) => {
            setWeight(text);
            dispatch(getWeight(text));
            console.log(register);
          }}
          onSubmitEditing={console.log(weight)}
        />
      </AppForm>
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
  container: {},
  text: {
    fontFamily: "NunitoBold",
    fontSize: 25,
  },
  textContainer: {
    marginTop: 165,
    marginBottom: 70,
  },
  bottom: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 125,
  },
  bottomText: {
    color: colors.grey,
    fontSize: 15,
  },
});

export default WeightScreen;
