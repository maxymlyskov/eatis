import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import * as Yup from "yup";
import {
  SubmitButton,
  AppForm,
  AppFormField,
  ErrorMessage,
} from "../../components/forms";
import Screen from "../../components/Screen";
import { useEndResetMutation } from "../../store/auth/resetApi";
import fonts from "../../styles/fonts";
import colors from "../../config/colors";

const validationSchema = Yup.object().shape({
  code: Yup.string().required().label("Code").nullable(),
  password: Yup.string().required().min(4).label("Password").nullable(),
});

function EndResetScreen({ route, navigation }) {
  const email = route.params;
  const [failed, setFailed] = useState(false);
  const [addEndReset, { isSuccess }] = useEndResetMutation();
  const handleSubmit = async ({ code, password }) => {
    console.log(email);
    try {
      const result = await addEndReset({
        token: code,
        email: email,
        password: password,
      }).unwrap();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    if (!isSuccess) {
      setFailed(true);
    } else {
      navigation.navigate("LoginScreen");
    }
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={fonts.Bold24}>Reset password</Text>
        <View style={styles.credits}>
          <Text style={[fonts.Regular16, { color: colors.grey }]}>
            Enter your verification code
          </Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <AppForm
          initialValues={{ code: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppFormField
            placeholder="Verification Code"
            name="code"
            autoCapitalize="none"
            secureTextEntry
            autoCorrect={false}
          />
          <AppFormField
            placeholder="New password"
            name="password"
            autoCapitalize="none"
            secureTextEntry
            autoCorrect={false}
          />
          <View style={{ marginHorizontal: 20 }}>
            <ErrorMessage
              visible={failed}
              error="Sorry, verification code is wrong"
            />
          </View>
          <View style={styles.button}>
            <SubmitButton title="Submit" />
          </View>
        </AppForm>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  button: {
    marginTop: "auto",
    padding: 10,
    width: "90%",
    marginBottom: 20,
    alignSelf: "center",
  },
  textContainer: {
    margin: 20,
    marginBottom: 60,
  },
});

export default EndResetScreen;
