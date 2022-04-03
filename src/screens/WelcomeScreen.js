import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

import colors from "../config/colors";
import fonts from "../styles/fonts";

function WelcomeScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <Image
          source={require("../../assets/imgs/welcome.png")}
          style={styles.image}
        />
      </View>
      <View
        style={{
          flex: 0.2,
          alignItems: "center",
        }}
      >
        <Text style={[fonts.Bold24, { color: '#000', marginBottom: 10 }]}>
          Welcome to Eat Is!
        </Text>
        <Text style={[fonts.Regular18, { color: '#000' }]}>
          Your nutrition wizard.
        </Text>
      </View>

      <View style={{ flex: 0.2, alignItems: "center", marginHorizontal: 20 }}>
        <AppButton
          title="Create an account"
          onPress={() => navigation.navigate("RegisterScreen")}
        />
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", paddingTop: 15 }}>
              <Text style={fonts.Regular18}>
                Already have account?{" "}
              </Text>
              <Text style={[fonts.Regular18, { color: colors.sgreen }]}>
                Sign in
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    marginHorizontal: 20
  },
});

export default WelcomeScreen;
