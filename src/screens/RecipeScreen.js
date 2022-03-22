import React, { useState, useRef, useMemo, useCallback } from "react";
import { View, StyleSheet, FlatList, Text, SectionList } from "react-native";
import { useGetRandomRecipeQuery } from "../store/recipes/randomApi";
import { useGetSearchQuery } from "../store/recipes/searchApi";
import {
  useGetDayPlannerQuery,
  useGetWeekPlannerQuery,
} from "../store/recipes/plannerApi";

import Screen from "../components/Screen";
import RecipeHeader from "../components/RecipeHeader";

import fonts from "../styles/fonts";
import styles from "../config/styles";
import extraStyles from "../config/styles";
import colors from "../config/colors";
import FlatListFilter from "../components/FlatlistFilter/FlatListFilter";

export default function RecipeScreen({ navigation, route }) {
  const { data, isLoading, error } = useGetSearchQuery(`chicken`);

  if (isLoading)
    return <Screen style={{ backgroundColor: colors.green }}></Screen>;

  return (
    <Screen style={{ backgroundColor: "white", paddingHorizontal: 20 }}>
      {data && (
        <>
          <RecipeHeader
            onPressSearch={() => navigation.navigate("SearchScreen")}
          />

          <View style={styles.titleContainer}>
            <Text style={styles.title}>{route.name.split("Screen")}</Text>
          </View>

          <View style={{ flex: 1 }}>
            <FlatListFilter data={data} navigation={navigation} clear="Clear" />
          </View>
        </>
      )}
    </Screen>
  );
}
