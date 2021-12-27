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
    borderWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderTopColor: colors.black,
    borderBottomColor: "white",
    borderStartColor: colors.black,
    borderEndColor: colors.black,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 10,
    marginLeft: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    marginBottom: 7,
    color: colors.black,
    fontFamily: "NunitoBold",
  },
});

export default IngridientsCard;
