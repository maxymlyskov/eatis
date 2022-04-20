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
import { getWeights } from "../../store/auth/userSlice";

function WeightScreen(props) {
  const [weight, setWeight] = useState("");

  const dispatch = useDispatch();
  const register = useSelector((state) => state.register.weight);
  return (
    <View style={{ flex: 0.3 }}>
      <AppForm
        initialValues={{ weight: "" }}
        onSubmit={() => console.log("dsa")}
        // styles={{flex: 1}}
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
            dispatch(getWeights([text]));
          }}
          onSubmitEditing={console.log(weight)}
        />
      </AppForm>
    </View>
  );
}

export default WeightScreen;
