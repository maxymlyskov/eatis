import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import {
  useGetWeekPlannerQuery,
  useGetWeekPlannerWithDietQuery,
} from "../../store/recipes/plannerApi";
import Screen from "../Screen";
import RecipeCard from "../../components/RecipeCard";

function WeekPlan({ navigation }) {
  const excludeMilk = useGetWeekPlannerQuery("milk");
  const excludePork = useGetWeekPlannerQuery("pork");
  const vegeterian = useGetWeekPlannerWithDietQuery("vegeterian");
  const paleo = useGetWeekPlannerWithDietQuery("paleo");

  const diets = [
    {
      id: 1,
      data: excludeMilk.data,
      title: "No Lactose",
      image:
        "https://media.istockphoto.com/vectors/lactose-free-icon-vector-contains-no-lactose-label-for-healthy-daiy-vector-id1127554870?k=20&m=1127554870&s=170667a&w=0&h=KmgAZ2g842NWitVkBzjpWnK6UhKcEFzG4tUuLshXLKM=",
    },
    {
      id: 2,
      data: excludePork.data,
      title: "Pork-free",
      image: "https://cf.shopee.com.my/file/8fa1349c83bc5789eff6a3d2216ab1ea",
    },
    {
      id: 3,
      data: vegeterian.data,
      title: "Vegeterian",
      image:
        "https://images.theconversation.com/files/352720/original/file-20200813-22-u6p0qo.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C6576%2C4288&q=45&auto=format&w=926&fit=clip",
    },
    {
      id: 4,
      data: paleo.data,
      title: "Paleo",
      image: "http://oboudupont.com/wp-content/uploads/2021/05/Diet.jpg",
    },
  ];
  return (
    <View>
      <FlatList
        data={diets}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <RecipeCard
            image={{ uri: item.image }}
            title={item.title}
            onPress={() => navigation.navigate("WeekPlannerScreen", item)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default WeekPlan;
