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
    <View style={{ flex: 0.3 }}>
      <AppForm
        initialValues={{ height: "" }}
        onSubmit={() => console.log("dsa")}
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
    </View>
  );
}

export default HeightScreen;
