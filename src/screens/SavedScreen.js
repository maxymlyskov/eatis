import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import RecipeCard from "../components/RecipeCard";

import { useGetSearchedQuery } from "../store/saved/getSearched";

export default function SavedScreen({ navigation }) {
  const { data, error } = useGetSearchedQuery();

  console.log(data);
  return (
    <Screen>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RecipeCard
            title={item.title}
            imageUrl={item.image}
            onPress={() => navigation.navigate("RecipeDetailsScreen", item)}
          />
        )}
      ></FlatList>
    </Screen>
  );
}

const style = StyleSheet.create({});
