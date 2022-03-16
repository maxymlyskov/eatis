import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LikeButton from "./LikeButton";
import AutoScrolling from "react-native-auto-scrolling";

import colors from "../config/colors";
// import { useGetTriviaQuery } from "../store/recipes/optional/optionalApi";

function Header({ navigation, formLike, onPress, text }) {
  // const { data } = useGetTriviaQuery();
  return (
    <View style={{ flexDirection: "row", padding: 20, zIndex: 1 }}>
      <TouchableWithoutFeedback
        onPress={() => navigation.goBack()}
        style={{ alignItems: "flex-start" }}
      >
        <MaterialCommunityIcons
          size={30}
          color={colors.green}
          name="arrow-left"
        />
      </TouchableWithoutFeedback>
      {/* <AutoScrolling style={{ flex: 1 }}> */}
        <View
          style={{
            flex: 10,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Text numberOfLines={1} style={styles.text}>
            {text}
          </Text>
        </View>
      {/* </AutoScrolling> */}
      {onPress ? (
        <View style={{ alignItems: "flex-end" }}>
          <LikeButton
            color={colors.green}
            form={formLike}
            size={30}
            onPress={onPress}
          />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: { fontFamily: "NunitoBold", fontSize: 32, color: colors.red },
});

export default Header;
