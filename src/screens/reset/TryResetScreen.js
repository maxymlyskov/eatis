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
import { useTryResetMutation } from "../../store/auth/resetApi";
import fonts from "../../styles/fonts";
import colors from "../../config/colors";

// email and password validation
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email").nullable(),
});

function TryResetScreen({ navigation }) {
  const [addTryReset, { isSuccess }] = useTryResetMutation();
  const [emailFailed, setEmailFailed] = useState(false);

  const handleSubmit = async ({ email }) => {
    try {
      await addTryReset({ email }).unwrap();
    } catch (error) {
      console.log(error);
      if (error.originalStatus !== 200) {
        setEmailFailed(true);
      } else {
        navigation.navigate("EndResetScreen", email);
      }
    }
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={fonts.Bold24}>Reset password</Text>
        <View style={styles.credits}>
          <Text style={[fonts.Regular16, { color: colors.grey }]}>
            Enter your email to continue
          </Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <AppForm
          initialValues={{ email: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <View>
            <AppFormField
              placeholder="Email"
              name="email"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <View style={{ marginHorizontal: 30 }}>
              <ErrorMessage
                visible={emailFailed}
                error="User with given email doesn't exist"
              />
            </View>
          </View>
          <View style={styles.button}>
            <SubmitButton title="Reset" />
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

export default TryResetScreen;
