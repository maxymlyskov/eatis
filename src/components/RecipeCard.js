import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import extraStyles from "../config/styles";
import LikeButton from "./LikeButton";

import colors from "../config/colors";

function RecipeCard({
  title,
  subTitle,
  imageUrl,
  onPress,
  onPressLike,
  image,
  likeButton,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <ImageBackground
          style={styles.image}
          source={image}
          tint="light"
          overflow="visible"
        >
          <View style={styles.detailsContainer}>
            {likeButton ? (
              <View
                style={{
                  alignSelf: "flex-end",
                  marginTop: -Dimensions.get("window").height / 5.9,
                  paddingRight: 10,
                  position: "absolute",
                }}
              >
                <LikeButton color="white" size={35} onPress={onPressLike} />
              </View>
            ) : null}
            <Text style={extraStyles.info} numberOfLines={1}>
              {title}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    margin: 15,
    backgroundColor: colors.grey,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 10,
    marginTop: "auto",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    marginBottom: 7,
  },
});

export default RecipeCard;
