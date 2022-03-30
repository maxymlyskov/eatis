import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";
import * as Yup from "yup";
import useAuth from "../auth/useAuth";
import {
  AppFormField,
  AppForm,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import colors from "../config/colors";
import { useAddAuthMutation } from "../store/auth/authApi";

// email and password validation
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email").nullable(),
  password: Yup.string().required().min(4).label("Password").nullable(),
});

function LoginScreen(props) {
  const auth = useAuth();

  const [loginFailed, setLoginFailed] = useState(false);
  const [addAuth] = useAddAuthMutation();

  const handleLogin = async ({ email, password }) => {
    try {
      const result = await addAuth({
        email: email,
        password: password,
      }).unwrap();
      setLoginFailed(false);
      console.log(result);
      auth.logIn(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.signinText}>Sign In</Text>
        <View style={styles.credits}>
          <Text style={styles.creditsText}>Enter your credits to continue</Text>
        </View>
      </View>
      <AppForm
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        <ErrorMessage
          visible={loginFailed}
          error="Invalid email or/and password"
        />

        <AppFormField
          placeholder="Email"
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <AppFormField
          placeholder="Password"
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
        <View style={styles.button}>
          <SubmitButton title="Log In" />
        </View>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
    paddingHorizontal: 10,
    justifyContent: "center",
    flex: 1,
  },
  logo: {
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  button: {
    paddingHorizontal: 20,
    marginTop: Dimensions.get("window").height / 10,
  },
  signinText: {
    fontSize: 25,
    fontFamily: "NunitoBold",
  },
  creditsText: {
    fontSize: 15,
    color: colors.grey,
    fontFamily: "NunitoBold",
  },
  text: {
    marginTop: -35,
    marginBottom: 30,
    marginHorizontal: 20,
  },
  credits: {
    marginVertical: 4,
  },
});

export default LoginScreen;
