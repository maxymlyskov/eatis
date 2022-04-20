import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import { useGetDayPlannerQuery } from "../../store/recipes/plannerApi";

import RecipeCard from "../../components/RecipeCard";
import { useSelector } from "react-redux";
import ActivityIndicator from "../ActivityIndicator";

export default function Plan({ navigation }) {
  const calories = useSelector((state) => state.user.calories);

  const dayPlannerVegeterian = useGetDayPlannerQuery(
    "vegeterian",
    parseInt(calories)
  );
  const dayPlannerKetogenic = useGetDayPlannerQuery(
    "ketogenic",
    parseInt(calories)
  );
  const dayPlannerPaleo = useGetDayPlannerQuery("paleo", parseInt(calories));
  const dayPlannerPescetarian = useGetDayPlannerQuery(
    "pescetarian",
    parseInt(calories)
  );
  const dayPlannerLowFODMAP = useGetDayPlannerQuery(
    "LowFODMAP",
    parseInt(calories)
  );
  const dayPlannerLactoVegetarian = useGetDayPlannerQuery(
    "lacto-vegeterian",
    parseInt(calories)
  );
  const dayPlannerPrimal = useGetDayPlannerQuery("Primal", parseInt(calories));
  const dayPlannerWhole30 = useGetDayPlannerQuery(
    "Whole30",
    parseInt(calories)
  );
  const dayPlannerGlutenFree = useGetDayPlannerQuery(
    "GlutenFree",
    parseInt(calories)
  );

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

  return (
    <>
      <View>
        <FlatList
          data={diets}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <RecipeCard
              image={{ uri: item.image }}
              title={item.title}
              onPress={() => navigation.navigate("DayPlannerScreen", item)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
}
