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
import { useAddAuthMutation } from "../store/auth/authApi";

import colors from "../config/colors";
import fonts from "../styles/fonts";
import { TouchableOpacity } from "react-native-gesture-handler";

// email and password validation
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email").nullable(),
  password: Yup.string().required().min(4).label("Password").nullable(),
});

function LoginScreen({ navigation }) {
  const auth = useAuth();

  const [loginFailed, setLoginFailed] = useState(false);
  const [addAuth, { isSuccess }] = useAddAuthMutation();

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
    if (!isSuccess) setLoginFailed(true);
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.text}>
        <Text style={fonts.Bold24}>Sign In</Text>
        <View style={styles.credits}>
          <Text style={[fonts.Regular16, { color: colors.grey }]}>
            Enter your credits to continue
          </Text>
        </View>
        <View style={styles.reset}>
          <TouchableOpacity
            onPress={() => navigation.navigate("TryResetScreen")}
          >
            <Text style={[fonts.Regular14, { color: colors.sgreen }]}>
              Forgot your password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 0.8 }}>
        <AppForm
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          <View style={{ flex: 1, justifyContent: "space-between" }}>
            <View>
              <View style={{ marginHorizontal: 30 }}>
                <ErrorMessage
                  visible={loginFailed}
                  error="Invalid email or/and password"
                />
              </View>
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
            </View>
            <View>
              <SubmitButton title="Log In" />
            </View>
          </View>
        </AppForm>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  text: {
    flex: 0.2,
    justifyContent: "center",
  },
  reset: {
    marginLeft: "auto",
    marginTop: 10,
  },
});

export default LoginScreen;
