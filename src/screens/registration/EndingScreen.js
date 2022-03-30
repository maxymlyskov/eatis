import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Image, Text } from "react-native";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import useAuth from "../../auth/useAuth";
import {
  AppFormField,
  AppForm,
  ErrorMessage,
  SubmitButton,
} from "../../components/forms";
import Screen from "../../components/Screen";
import colors from "../../config/colors";
import {
  useAddAuthMutation,
  useAddUserMutation,
} from "../../store/auth/authApi";

// email and password validation
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email").nullable(),
  password: Yup.string().required().min(4).label("Password").nullable(),
});

function EndingScreen(props) {
  const [loginFailed, setLoginFailed] = useState(false);
  const [addUser] = useAddUserMutation();
  const [addAuth] = useAddAuthMutation();
  const auth = useAuth();

  const register = useSelector((state) => state.register);

  const handleRegister = async ({ email, password, name }) => {
    console.log(email);
    try {
      await addUser({
        email: email,
        password: password,
        gender: register.gender,
        name: name,
        weight: register.weight,
        height: register.height,
        goal: register.goal,
        birthDate: register.birthDate,
      }).unwrap();
      const result = await addAuth({
        email: email,
        password: password,
      }).unwrap();
      auth.logIn(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Screen style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.signinText}>Let`s end it</Text>
        <View style={styles.credits}>
          <Text style={styles.creditsText}>Enter your credits to continue</Text>
        </View>
      </View>
      <AppForm
        initialValues={{ email: "", password: "", name: "" }}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
      >
        <ErrorMessage
          visible={loginFailed}
          error="Invalid email or/and password"
        />

        <AppFormField
          placeholder="Username"
          name="name"
          autoCapitalize="none"
          autoCorrect={false}
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
          <SubmitButton title="Sign Up" />
        </View>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
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
    paddingHorizontal: 100,
    marginTop: Dimensions.get("window").height / 20,
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

export default EndingScreen;
