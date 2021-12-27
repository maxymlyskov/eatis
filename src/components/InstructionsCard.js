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

function InstructionsCard({ title, onPress }) {
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
    borderWidth: 5,
    borderTopColor: colors.green,
    borderBottomColor: "white",
    borderStartColor: "white",
    borderEndColor: "white",
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
    color: colors.black,
    fontSize: 20,
    fontFamily: "NunitoBold",
  },
});

export default InstructionsCard;
