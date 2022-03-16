import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import extraStyles from "../config/styles";

import colors from "../config/colors";

function IngridientsCard({ title, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.detailsContainer}>
          <Text numberOfLines={10} style={styles.title}>
            {title}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: colors.lightSilver 
  },
  detailsContainer: {
    paddingHorizontal: 10,
    marginLeft: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    color: colors.black,
    fontFamily: "NunitoBold",
    paddingVertical: 15
  },
});

export default IngridientsCard;
