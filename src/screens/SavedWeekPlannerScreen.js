import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import RecipeCard from "../components/RecipeCard";
import Screen from "../components/Screen";
import ImageNoData from "../components/image/ImageNoData";
import ActivityIndicator from "../components/ActivityIndicator";

import { useGetWeekPlannerQuery } from "../store/saved/getWeekPlanner";

function SavedWeekPlannerScreen({ navigation }) {
  const { data, isLoading } = useGetWeekPlannerQuery();
  console.log(data);
  return (
    <>
      <ActivityIndicator visible={isLoading} />
      {data && data.length > 0 ? (
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
      ) : (
        <ImageNoData text="No saved planners" saved />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default SavedWeekPlannerScreen;
