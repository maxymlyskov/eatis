import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  Image,
  ImageBackground,
} from "react-native";
import extraStyles from "../config/styles";

import colors from "../config/colors";

function RecipeCard({ title, subTitle, imageUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <ImageBackground
          style={styles.image}
          source={{ uri: imageUrl }}
          tint="light"
        >
          <View style={styles.detailsContainer}>
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
