import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import RecipeCard from "../components/RecipeCard";
import Screen from "../components/Screen";

import { useGetWeekPlannerQuery } from "../store/saved/getWeekPlanner";

function SavedWeekPlannerScreen({ navigation }) {
  const { data } = useGetWeekPlannerQuery();
  console.log(data);
  return (
    <Screen>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RecipeCard
            image={{ uri: item.image }}
            title={item.title}
            onPress={() => navigation.navigate("WeekPlannerScreen", item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default SavedWeekPlannerScreen;
