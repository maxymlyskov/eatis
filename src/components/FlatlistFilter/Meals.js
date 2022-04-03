import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";

import RecipeCard from "../../components/RecipeCard";
import {
  useFilterIncludeIngredientsQuery,
  useFilterMinCaloriesQuery,
} from "../../store/recipes/searchApi";
import { useGetSearchedQuery } from "../../store/saved/getSearched";

export default function Meals({ navigation }) {
  const [title1, setTitle1] = useState("");
  const [title2, setTitle2] = useState("");
  const calories = useSelector((state) => state.user.calories);
  const defaultRecipes = useFilterMinCaloriesQuery(parseInt(calories / 4));
  let meals = [];
  let titleFirst;
  let titleSecond;
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  const saved = useGetSearchedQuery({ refetchOnMountOrArgChange: true });
  useEffect(() => {
    if (saved.data) {
      if (saved.data.length > 1) {
        titleFirst = saved.data[0].title.split(" ");
        titleSecond = saved.data[1].title.split(" ");
        setTitle1(titleFirst[0]);
        setTitle2(titleSecond[0]);
      }
    }
  }, [saved.data]);
  let firstRecipe = useFilterIncludeIngredientsQuery(title1, {
    refetchOnMountOrArgChange: true,
  });
  const secondRecipe = useFilterIncludeIngredientsQuery(title2, {
    refetchOnMountOrArgChange: true,
  });
  // if (firstRecipe.data)
  //   shuffle(firstRecipe.data.results.concat(secondRecipe.data.results));
  if (firstRecipe.isLoading && defaultRecipes.isLoading) return <View></View>;

  return (
    <View>
      {firstRecipe.data.length > 1 && secondRecipe.data.length > 1 ? (
        <FlatList
          data={shuffle(
            firstRecipe.data.results.concat(secondRecipe.data.results)
          )}
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
      ) : (
        defaultRecipes.data && (
          <FlatList
            data={defaultRecipes.data.results}
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
        )
      )}
    </View>
  );
}
