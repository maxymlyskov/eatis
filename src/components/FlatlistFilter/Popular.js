import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import RecipeCard from "../../components/RecipeCard";
import { useGetPopularQuery } from "../../store/saved/getSearched";

export default function Popular({ navigation }) {
  const { data } = useGetPopularQuery();
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RecipeCard
            title={item.title}
            image={{ uri: item.image }}
            onPress={() => navigation.navigate("RecipeDetailsScreen", item)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
