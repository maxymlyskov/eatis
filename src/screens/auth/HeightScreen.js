import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../../components/AppText";
import Screen from "../../components/Screen";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../../components/forms";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  height: Yup.number().required().label("Height"),
});

function HeightScreen({ navigation }) {
  const [error, setError] = useState(false);

  const handleSubmit = ({ height }) => {
    console.log(height);
    if (height > 200 || height < 20) setError(true);
    else {
      setError(false);
      navigation.navigate("Weight");
    }
  };
  return (
    <Screen style={styles.container}>
      <AppText>Tell me yout height</AppText>
      <AppForm
        initialValues={{ height: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <ErrorMessage visible={error} error="Invalid height" />

        <AppFormField
          placeholder="Height(in cm)"
          icon="human-male-height"
          name="height"
          autoCapitalize="none"
          keyboardType="numeric"
          autoCorrect={false}
        />
        <SubmitButton title="Next" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HeightScreen;
