import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  Image,
} from "react-native";
import extraStyles from "../config/styles";

import colors from "../config/colors";

function IngridientsCard({
  title,
  onPress,
  image,
  subTitle,
  style,
  preSubTitle,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        {image && <Image style={styles.image} source={{ uri: image }} />}
        <View style={styles.detailsContainer}>
          <View style={{ justifyContent: "center" }}>
            <Text numberOfLines={10} style={[styles.title, style]}>
              {title}
            </Text>
            {preSubTitle && (
              <View>
                <Text style={{ fontSize: 20, fontFamily: "NunitoBold" }}>
                  {preSubTitle}
                </Text>
              </View>
            )}
          </View>
          <View style={styles.subContainer}>
            {subTitle && (
              <Text numberOfLines={10} style={styles.subTitle}>
                {"\u25CF"} {subTitle}
              </Text>
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: colors.lightSilver,
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
  },
  detailsContainer: {
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: colors.green,
  },
  title: {
    color: colors.black,
    fontFamily: "NunitoBold",
  },
  subTitle: {
    color: colors.green,
    fontFamily: "NunitoBold",
    paddingVertical: 15,
  },
  subContainer: {
    marginLeft: "auto",
  },
});

export default IngridientsCard;
