import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import RecipeCard from "../components/RecipeCard";

import {
  useGetSearchedQuery,
  useDeleteSearchedMutation,
} from "../store/saved/getSearched";

export default function SavedScreen({ navigation }) {
  const { data, error } = useGetSearchedQuery();
  const [deleteRecipe] = useDeleteSearchedMutation();

  const handleDelete = async (id) => {
    try {
      await deleteRecipe(id).unwrap();
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  return (
    <Screen>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RecipeCard
            likeButton
            title={item.title}
            onPressLike={() => handleDelete(item._id)}
            image={{ uri: item.image }}
            onPress={() => navigation.navigate("RecipeDetailsScreen", item)}
          />
        )}
      ></FlatList>
    </Screen>
  );
}

const style = StyleSheet.create({});
