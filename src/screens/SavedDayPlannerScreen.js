import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ActivityIndicator from "../components/ActivityIndicator";
import ImageNoData from "../components/image/ImageNoData";
import RecipeCard from "../components/RecipeCard";
import Screen from "../components/Screen";

import { useGetDayPlannerQuery } from "../store/saved/getDayPlanner";

function SavedDayPlannerScreen({ navigation }) {
  const { data, isLoading } = useGetDayPlannerQuery();
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
                onPress={() => navigation.navigate("DayPlannerScreen", item)}
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

export default SavedDayPlannerScreen;
