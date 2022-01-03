import React, { useState } from "react";
import { View, StyleSheet, FlatList, Text, SectionList } from "react-native";
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
  const dayPlannerVegeterian = useGetDayPlannerQuery("vegeterian");
  const dayPlannerKetogenic = useGetDayPlannerQuery("ketogenic");
  const dayPlannerPaleo = useGetDayPlannerQuery("paleo");
  const dayPlannerPescetarian = useGetDayPlannerQuery("pescetarian");
  const dayPlannerLowFODMAP = useGetDayPlannerQuery("LowFODMAP");
  const dayPlannerLactoVegetarian = useGetDayPlannerQuery("lacto-vegeterian");
  const dayPlannerPrimal = useGetDayPlannerQuery("Primal");
  const dayPlannerWhole30 = useGetDayPlannerQuery("Whole30");
  const dayPlannerGlutenFree = useGetDayPlannerQuery("GlutenFree");
  const diets = [
    {
      id: 1,
      title: "Vegeterian",
      data: dayPlannerVegeterian.data,
      image:
        "https://images-prod.healthline.com/hlcmsresource/images/AN_images/vegetarian-diet-plan-1296x728-feature.jpg",
    },
    {
      id: 2,
      title: "Ketogenic",
      data: dayPlannerKetogenic.data,
      image:
        "https://www.epilepsy.com/sites/core/files/styles/banner_image/public/upload/image/Ketogenic-diet-AdobeStock-190780160-OG-TWjpg.jpg?itok=FlaSAJg5",
    },
    {
      id: 3,
      title: "Paleo",
      data: dayPlannerPaleo.data,
      image:
        "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/paleo-diet-meal-plan-and-menu-1296x728-feature.jpg?w=1155&h=1528",
    },
    {
      id: 4,
      title: "Pescetarian",
      data: dayPlannerPescetarian.data,
      image:
        "https://image.freepik.com/free-photo/pescetarian-diet-with-seafood-fruit-vegetables_82893-15740.jpg",
    },
    {
      id: 5,
      title: "Low FODMAP",
      data: dayPlannerLowFODMAP.data,
      image:
        "https://static.mygutfeeling.eu/wp-content/uploads/2021/01/dieta-low-fodmap.jpg",
    },
    {
      id: 6,
      title: "Primal",
      data: dayPlannerPrimal.data,
      image:
        "https://cdn-prod.medicalnewstoday.com/content/images/articles/320/320516/primal-diet.jpg",
    },
    {
      id: 7,
      title: "Whole30",
      data: dayPlannerWhole30.data,
      image:
        "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2018/01/GettyImages-649168514.jpg",
    },
    {
      id: 8,
      title: "Gluten Free",
      data: dayPlannerGlutenFree.data,
      image:
        "https://post.healthline.com/wp-content/uploads/2020/09/gluten-free-diet-thumb.jpg",
    },
    {
      id: 9,
      title: "Lacto-Vegetarian",
      data: dayPlannerLactoVegetarian.data,
      image:
        "https://mllrnd3tf8qc.i.optimole.com/naaq0LI-wO5JOFKo/w:1000/h:525/q:90/https://mealmatchmaker.com/wp-content/uploads/2020/11/lacto-vegetarian.jpg",
    },
  ];
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
              image={{ uri: item.image }}
              onPress={() => navigation.navigate("RecipeDetailsScreen", item)}
            />
          )}
        ></FlatList>
      ) : null}
      {showScreen == 3 ? (
        <FlatList
          data={diets}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <RecipeCard
              image={{ uri: item.image }}
              title={item.title}
              onPress={() => navigation.navigate("DayPlannerScreen", item.data)}
            />
          )}
        ></FlatList>
      ) : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: { paddingHorizontal: 20, paddingEnd: 15 },
  filter: { margin: 10 },
});
