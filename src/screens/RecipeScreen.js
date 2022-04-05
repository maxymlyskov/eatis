import React from "react";
import { View, Text } from "react-native";

import Screen from "../components/Screen";
import RecipeHeader from "../components/RecipeHeader";
import styles from "../config/styles";
import FlatListFilter from "../components/FlatlistFilter/FlatListFilter";

export default function RecipeScreen({ navigation, route }) {
  return (
    <Screen style={{ backgroundColor: "white", paddingHorizontal: 20 }}>
      <>
        <RecipeHeader
          onPressSearch={() => navigation.navigate("SearchScreen")}
          onPressFormat={() => navigation.navigate("PluseScreen")}
        />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{route.name.split("Screen")}</Text>
        </View>

        <View style={{ flex: 1 }}>
          <FlatListFilter navigation={navigation} clear="Clear" />
        </View>
      </>
    </Screen>
  );
}
