import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CardItem from "./CardItem";

import colors from "../../config/colors";
import { useDispatch, useSelector } from "react-redux";
import { useFilterTargetCaloriesQuery } from "../../store/recipes/plannerApi";
import { useGetRecipeInfoQuery } from "../../store/recipes/infoById/infoApi";
import Screen from "../Screen";
import { getEaten } from "../../store/auth/userSlice";

export default function NutrionsFlatList({ navigation }) {
  const dispatch = useDispatch();
  const calories = useSelector((state) => state.user.calories);
  const eaten = useSelector((state) => state.user.eaten);
  const [eat, setEat] = useState(0);

  const getKey = async () => {
    let eatenKey = await AsyncStorage.getItem("eatenKey");
    let parsed = JSON.parse(eatenKey);
    console.log(parsed);
    return parsed;
  };
  const storeData = async (value) => {
    try {
      AsyncStorage.setItem("eatenKey", value);
      AsyncStorage.setItem("dataKey", JSON.stringify(new Date().getDate()));
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  useEffect(() => {
    getKey().then((res) => setEat(res));
  }, []);
  console.log(calories);
  const { data, isLoading } = useFilterTargetCaloriesQuery(parseInt(calories));

  const nutrions = [
    {
      id: data ? data.meals[0].id : null,
      meals: data ? data.meals[0] : null,
      title: data ? data.meals[0].title : null,
      image: require("../../../assets/imgs/breakfast.png"),
      bg: colors.green,
      time: data ? data.meals[0].readyInMinutes : null,
      onLongPress: () => dispatch(getEaten(parseInt(calories / 3))),
    },
    {
      id: data ? data.meals[1].id : null,
      meals: data ? data.meals[1] : null,

      title: data ? data.meals[1].title : null,
      image: require("../../../assets/imgs/lunch.png"),
      bg: colors.purple,
      time: data ? data.meals[1].readyInMinutes : null,
      onLongPress: () => dispatch(getEaten(parseInt(calories / 3))),
    },
    {
      id: data ? data.meals[2].id : null,
      meals: data ? data.meals[2] : null,

      title: data ? data.meals[2].title : null,
      image: require("../../../assets/imgs/dinner.png"),
      bg: colors.red,
      time: data ? data.meals[2].readyInMinutes : null,
      onLongPress: () => dispatch(getEaten(parseInt(calories / 3))),
    },
  ];
  if (isLoading) return <Screen></Screen>;

  return data ? (
    <FlatList
      horizontal
      bounces={false}
      showsHorizontalScrollIndicator={false}
      data={nutrions}
      keyExtractor={(item, i) => item + i}
      renderItem={({ item }) =>
        data.meals && (
          <CardItem
            title={item.title}
            time={item.time}
            bg={item.bg}
            image={item.image}
            navigation={navigation}
            onPress={() =>
              navigation.navigate("RecipeDetailsScreen", item.meals)
            }
            onLongPress={() => {
              item.onLongPress();
              storeData(JSON.stringify(eat + eaten));
              getKey().then((res) => console.log(res));
            }}
          />
        )
      }
      style={{
        flex: 1,
        overflow: "visible",
      }}
      ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
    />
  ) : null;
}
