import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import colors from "../config/colors";

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
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 35,
            color: colors.green,
            fontFamily: "NunitoBold",
          }}
        >
          Welcome to Eat Is!
        </Text>
        <Text
          style={{ fontFamily: "NunitoBold", color: colors.grey, fontSize: 15 }}
        >
          Your nutrition wizard.
        </Text>
      </View>

      <View style={{ flex: 0.2, alignItems: "center" }}>
        <AppButton
          title="Create an account"
          onPress={() => navigation.navigate("RegisterScreen")}
        />
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", paddingTop: 15 }}>
              <Text style={{ fontFamily: "NunitoBold" }}>
                Already have account?{" "}
              </Text>
              <Text style={{ color: colors.sgreen, fontFamily: "NunitoBold" }}>
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
  container: { flex: 0.6, alignItems: "center" },
  image: { width: "100%", height: "100%", resizeMode: "contain" },
});

export default WelcomeScreen;
