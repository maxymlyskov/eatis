import React from "react";
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

const preFilters = [
  { id: 1, title: "Meals" },
  { id: 2, title: "Popular" },
  { id: 3, title: "Plan" },
];

export default function RecipeScreen({ navigation }) {
  const [count, setCount] = React.useState();
  const { data, isLoading, error } = useGetSearchQuery("chicken");

  if (isLoading) return <Screen style={{ backgroundColor: "green" }}></Screen>;
  console.log(data);
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
            />
          )}
        />
      </View>
      <FlatList
        data={data.results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RecipeCard title={item.title} imageUrl={item.image} />
        )}
      ></FlatList>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: { paddingHorizontal: 20, paddingEnd: 15 },
  filter: { margin: 10 },
});
