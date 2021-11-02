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
  weight: Yup.number().required().label("Weight"),
});

function WeightScreen({ navigation }) {
  const [error, setError] = useState(false);

  const handleSubmit = ({ weight }) => {
    console.log(weight);
    if (weight > 200 || weight < 20) setError(true);
    else {
      setError(false);
      navigation.navigate("Ending");
    }
  };
  return (
    <Screen style={styles.container}>
      <AppText>Tell me your weight</AppText>
      <AppForm
        initialValues={{ weight: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <ErrorMessage visible={error} error="Invalid weight" />

        <AppFormField
          placeholder="Weight(in kg)"
          icon="weight-kilogram"
          name="weight"
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

export default WeightScreen;
