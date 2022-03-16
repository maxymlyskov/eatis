import React, { useRef } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import Header from "../components/Header";
import RecipeCard from "../components/RecipeCard";
import { useGetTriviaQuery } from "../store/recipes/optional/optionalApi";
import {
  useAddDayPlannerMutation,
  useDeleteDayPlannerMutation,
} from "../store/saved/getDayPlanner";

function DayPlannerScreen({ route, navigation }) {
  const recipes = route.params.data;
  const saved = route.params;
  const title = route.params.title;
  const image = route.params.image;
  console.log(title);
  const [addDayPlanner] = useAddDayPlannerMutation();
  const [deleteDayPlanner] = useDeleteDayPlannerMutation();

  const handleAddPlanner = async (recipe) => {
    try {
      await addDayPlanner({
        meals: recipe,
        title: title,
        image: image,
      }).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeletePlanner = async (id) => {
    try {
      await deleteDayPlanner(id).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Screen>
      {recipes !== undefined ? (
        <>
          <Header
            navigation={navigation}
            onPress={() => handleAddPlanner(recipes.meals)}
            formLike
            text={title}
          />
          <View style={styles.list}>
            <FlatList
              data={recipes.meals}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <RecipeCard
                  image={require("../../assets/imgs/plannerImage.png")}
                  title={item.title}
                  onPress={() =>
                    navigation.navigate("RecipeDetailsScreen", item)
                  }
                />
              )}
            />
          </View>
        </>
      ) : (
        <>
          <Header
            navigation={navigation}
            onPress={() => handleDeletePlanner(saved._id)}
            formLike={false}
            text={title}
          />
          <View style={styles.list}>
            <FlatList
              data={saved.meals}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <RecipeCard
                  image={require("../../assets/imgs/plannerImage.png")}
                  title={item.title}
                  onPress={() =>
                    navigation.navigate("RecipeDetailsScreen", item)
                  }
                />
              )}
            />
          </View>
        </>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  list: {
    margin: 10,
  },
});

export default DayPlannerScreen;
