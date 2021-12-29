import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  Dimensions,
} from "react-native";
import extraStyles from "../config/styles";

import colors from "../config/colors";

function InstructionsCard({ title, onPress, number }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.step}>
          <Text style={extraStyles.title}>Step: {number}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text numberOfLines={20} style={styles.title}>
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
    borderColor: colors.green,
    borderRadius: 15,
    margin: 10,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
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
    color: colors.blackGreen,
    fontSize: 20,
    fontFamily: "NunitoBold",
  },
  step: {
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: colors.green,
    borderTopColor: "white",
    borderStartColor: "white",
    borderEndColor: "white",
  },
});

export default InstructionsCard;
