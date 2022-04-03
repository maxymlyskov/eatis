import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import fonts from "../../styles/fonts";
import colors from "../../config/colors";

const { width, height } = Dimensions.get("window");

export default function CardItem({
  navigation,
  time,
  title,
  image,
  bg,
  onPress,
}) {
  let ingredients;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            position: "absolute",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <View
            style={{
              width: width / 4,
              height: 100,
              backgroundColor: "rgba(255, 255, 255, .25)",
              padding: 10,
              borderRadius: 10000,
            }}
          >
            <Image
              source={image}
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "center",
              }}
            />
          </View>
        </View>
        <View style={[styles.container, { backgroundColor: bg }]}>
          <View style={styles.content}>
            <Text style={[fonts.Bold18, styles.color]} numberOfLines={4}>
              {title}
            </Text>
          </View>
          <View
            style={{
              marginTop: "auto",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons size={20} name="clock" color="white" />
            <Text style={[fonts.Bold18, styles.color]}> {time} min</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height * 0.25,
    width: width / 3,
    borderRadius: 20,
    padding: 10,
    marginTop: 50,
  },

  color: {
    color: "white",
  },

  mainText: {
    paddingVertical: 10,
  },

  content: {
    marginTop: 40,
  },
});
