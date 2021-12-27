import React, { useState } from "react";
import { View, StyleSheet, FlatList, Text, Image } from "react-native";
import Screen from "../components/Screen";
import { useGetRandomRecipeQuery } from "../store/recipes/randomApi";
import { useGetSearchQuery } from "../store/recipes/searchApi";
import fonts from "../styles/fonts";
import extraStyles from "../config/styles";
import RecipeCard from "../components/RecipeCard";
import PreFilter from "../components/PreFilter";
import colors from "../config/colors";
import RecipeHeader from "../components/RecipeHeader";
import {
  useGetDayPlannerQuery,
  useGetWeekPlannerQuery,
} from "../store/recipes/plannerApi";

export default function RecipeScreen({ navigation }) {
  const [pressed, setPressed] = useState(1);
  const [showScreen, setShowScreen] = useState(1);
  const { data, isLoading, error } = useGetSearchQuery("chicken");
  const dayPlanner = useGetDayPlannerQuery();
  const weekPlanner = useGetWeekPlannerQuery();
  const preFilters = [
    { id: 1, title: "Meals" },
    { id: 2, title: "Popular" },
    { id: 3, title: "Plan" },
  ];
  if (isLoading) return <Screen style={{ backgroundColor: "green" }}></Screen>;
  return (
    <Screen style={{ backgroundColor: "white" }}>
      <RecipeHeader onPressSearch={() => navigation.navigate("SearchScreen")} />
      <View style={styles.header}>
        <Text style={extraStyles.title}>Recipes</Text>
      </View>
      <View style={styles.filter}>
        <FlatList
          data={preFilters}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PreFilter
              title={item.title}
              color="white"
              backgroundColor={colors.green}
              onPress={() => {
                console.log(item.id);
                if (item.id === 1) setShowScreen(1);
                if (item.id === 2) setShowScreen(2);
                if (item.id === 3) setShowScreen(3);
              }}
            />
          )}
        />
      </View>

      {showScreen == 1 ? (
        <FlatList
          data={data.results}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <RecipeCard
              title={item.title}
              imageUrl={item.image}
              onPress={() => navigation.navigate("RecipeDetailsScreen", item)}
            />
          )}
        ></FlatList>
      ) : null}
      {showScreen == 3 ? (
        <FlatList
          data={dayPlanner.data.meals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <RecipeCard title={item.title} />}
        ></FlatList>
      ) : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: { paddingHorizontal: 20, paddingEnd: 15 },
  filter: { margin: 10 },
});
