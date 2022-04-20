import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import CardItem from "./CardItem";

import colors from "../../config/colors";
import { useDispatch, useSelector } from "react-redux";
import { useFilterTargetCaloriesQuery } from "../../store/recipes/plannerApi";
import Screen from "../Screen";
import { getEaten } from "../../store/auth/userSlice";
import storage from "../../auth/storage";
import ImageNoData from "../image/ImageNoData";

export default function NutrionsFlatList({ navigation }) {
  const dispatch = useDispatch();
  const calories = useSelector((state) => state.user.calories);
  const eaten = useSelector((state) => state.user.eaten);
  const [eat, setEat] = useState(0);

  useEffect(() => {
    storage.getEaten().then((res) => setEat(res));
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
              storage.storeEaten(eaten + eat);
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
  ) : (
    <ImageNoData />
  );
}
