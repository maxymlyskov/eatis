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
import { getHeight } from "../../store/auth/registerSlice";

import { useDispatch, useSelector } from "react-redux";

function HeightScreen(props) {
  const [heightFailed, setHeightFailed] = useState(false);
  const [height, setHeight] = useState("");

  const dispatch = useDispatch();
  const register = useSelector((state) => state.register.height);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Write your height</Text>
        </View>
      </View>
      <AppForm
        initialValues={{ height: "" }}
        onSubmit={() => console.log("dsa")}
        styles={{ marginHorizontal: 110 }}
      >
        <AppFormField
          placeholder="Height (cm)"
          name="height"
          autoCapitalize="none"
          autoCorrect={false}
          value={height}
          onChangeText={(text) => {
            setHeight(text);
            dispatch(getHeight(text));
            console.log(register);
          }}
          onSubmitEditing={console.log(height)}
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

export default HeightScreen;
