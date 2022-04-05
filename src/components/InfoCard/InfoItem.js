import React from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from "../../config/colors";
import fonts from "../../styles/fonts";

export default function InfoItem({
  title,
  max,
  eaten,
  backgroundColor,
  borderColor,
}) {
  function calcul(max, eaten) {
    return max - eaten;
  }

  return (
    <View style={{ felx: 1 }}>
      <Text style={[fonts.semiBold18, { textAlign: "center" }]}>{title}</Text>

      <View style={{ flex: 1, paddingVertical: 5, justifyContent: "center" }}>
        <View
          style={[
            styles.item,
            { width: "80%", zIndex: 1, backgroundColor, borderColor },
          ]}
        />
        <View style={[styles.item, { opacity: 0.2, zIndex: 0 }]} />
      </View>

      <Text
        style={[fonts.semiBold1, { color: colors.grey, textAlign: "center" }]}
      >
        {calcul(max, eaten) + " left"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    position: "absolute",
    flex: 1,
    width: "100%",
    borderWidth: 3,
    borderRadius: 10,
  },
});
