import React, { useRef } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import Header from "../components/Header";
import RecipeCard from "../components/RecipeCard";
import { useGetTriviaQuery } from "../store/recipes/optional/optionalApi";
import { useAddDayPlannerMutation } from "../store/saved/getDayPlanner";

function DayPlannerScreen({ route, navigation }) {
  const recipes = route.params;
  const [addDayPlanner] = useAddDayPlannerMutation();

  const handleAddPlanner = async (recipe) => {
    try {
      await addDayPlanner({
        meals: recipe,
      }).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Screen>
      <Header
        navigation={navigation}
        onPress={() => handleAddPlanner(recipes.meals)}
        formLike
        title={recipes.title}
      />
      <FlatList
        data={recipes.meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RecipeCard
            image={require("../../assets/imgs/plannerImage.png")}
            title={item.title}
            onPress={() => navigation.navigate("RecipeDetailsScreen", item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default DayPlannerScreen;
