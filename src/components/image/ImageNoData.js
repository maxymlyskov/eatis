import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../config/colors";
import fonts from "../../styles/fonts";
import { useNavigation } from "@react-navigation/native";

function ImageNoData({ text = "Error, no data found", saved = false }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/imgs/welcome.png")}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
        {saved ? (
          <View style={styles.searchContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("RecipeScreen")}
            >
              <Text style={[fonts.Regular18, { color: colors.green }]}>
                Click to explore
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignSelf: "center", marginTop: 20 },
  image: {
    height: 200,
    width: 200,
  },
  textContainer: {
    margin: 10,
  },
  text: {
    fontSize: 24,
    fontFamily: "NunitoBold",
  },
  searchContainer: { alignSelf: "center" },
});

export default ImageNoData;
