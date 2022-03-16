import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import styles from "../config/styles";

import RecipeCard from "../components/RecipeCard";

import {
  useGetSearchedQuery,
  useDeleteSearchedMutation,
} from "../store/saved/getSearched";
import FlatListFilterSaved from "../components/FlatlistFilter/FlatListFilterSaved";

export default function SavedScreen({ navigation, route }) {
  const { data, error } = useGetSearchedQuery();

  return (
    <Screen style={{ marginHorizontal: 20, marginVertical: 5 }}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{route.name.split("Screen")}</Text>
      </View>

      <View style={{ flex: 1 }}>
        <FlatListFilterSaved data={data} navigation={navigation} />
      </View>
    </Screen>
  );
}

const style = StyleSheet.create({});
