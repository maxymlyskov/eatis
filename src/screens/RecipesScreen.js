import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import { useGetSearchQuery } from "../store/recipes/searchApi";

function RecipesScreen(props) {
  const { data = [], isLoading } = useGetSearchQuery();
  return (
    <Screen style={{ backgroundColor: "white" }}>
      <Text>Recipessss</Text>
      <FlatList
        data={data}
        keyExtractor={({ item }) => item.id.toString()}
        renderItem={({ item }) => {
          <Text style={styles.text}>{item}</Text>;
        }}
      ></FlatList>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 15,
  },
});

export default RecipesScreen;
