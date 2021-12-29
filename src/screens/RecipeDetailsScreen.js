import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  Animated,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import RecipeCard from "../components/RecipeCard";
import colors from "../config/colors";
import Screen from "../components/Screen";
import extraStyles from "../config/styles";
import { useGetRecipeInfoQuery } from "../store/recipes/infoById/infoApi";
import { useGetNutritionByIdQuery } from "../store/recipes/infoById/nutritionApi";
import { useAddSearchedMutation } from "../store/saved/getSearched";
import AnimatedHeader from "../components/AnimatedHeader";
import IngridientsCard from "../components/IngridientsCard";
import AppButton from "../components/AppButton";

function RecipeDetailsScreen({ route, navigation }) {
  const recipe = route.params;
  const offset = useRef(new Animated.Value(0)).current;
  let [number, setNumber] = React.useState(1);
  const info = useGetRecipeInfoQuery(recipe.id);
  const [addRecipe, isError] = useAddSearchedMutation();
  let key = recipe.id;
  const nutrition = useGetNutritionByIdQuery(key);
  console.log(recipe.id);
  let difficulty = "easy";

  const { width, height } = Dimensions.get("window");
  const HEADER_HEIGHT = height / 4;
  const MIN_HEIHGT = height / 5;

  let s = "s";
  if (number == 1) s = "";
  const handleAddRecipe = async (recipe) => {
    try {
      await addRecipe({
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
      }).unwrap();
    } catch (error) {
      console.log(error);
    }
  };
  // if (info.data.readyInMinutes > 45) difficulty = "hard";
  // let kcal = parseInt(nutrition.data.calories) * number;
  return (
    <Screen style={styles.container}>
      {info.data ? (
        <>
          <AnimatedHeader
            animatedValue={offset}
            img={info.data.image}
            navigation={navigation}
            onPress={() => handleAddRecipe(info.data)}
            formLike
          />
          <Animated.ScrollView
            style={{
              flex: 1,
              backgroundColor: colors.white,
            }}
            contentContainerStyle={{
              paddingTop: HEADER_HEIGHT + 150,
              paddingHorizontal: 10,
            }}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={1}
            overScrollMode={"never"}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: offset } } }],
              { useNativeDriver: false }
            )}
          >
            <View>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={extraStyles.title}>{info.data.title}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    marginHorizontal: 40,
                  }}
                >
                  <View style={{ flex: 2.5, flexDirection: "row" }}>
                    <View style={{ paddingRight: 3 }}>
                      <MaterialCommunityIcons
                        name="clock-time-five-outline"
                        color={colors.lightSilver}
                        size={20}
                      />
                    </View>
                    <Text style={extraStyles.additional}>
                      {info.data.readyInMinutes} min
                    </Text>
                  </View>
                  <View style={{ flex: 2.7, flexDirection: "row" }}>
                    <View style={{ paddingRight: 3 }}>
                      <MaterialCommunityIcons
                        name="fire"
                        color={colors.lightSilver}
                        size={20}
                      />
                    </View>
                    <Text key={key + 1} style={extraStyles.additional}>
                      100 kcal
                    </Text>
                  </View>
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ paddingRight: 3 }}>
                      <MaterialCommunityIcons
                        name="chef-hat"
                        color={colors.lightSilver}
                        size={20}
                      />
                    </View>
                    <Text style={extraStyles.additional}>{difficulty}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.number}>
              <TouchableOpacity
                onPress={() => {
                  if (number > 1) setNumber(() => --number);
                  return;
                }}
              >
                <View style={styles.numberLeft}>
                  <Text style={{ fontSize: 50, color: "white" }}>-</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.numberText}>
                <Text style={{ fontSize: 30, color: "white" }}>{number}</Text>
                <Text style={{ fontSize: 12, color: "white" }}>Serving{s}</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setNumber(() => ++number);
                }}
              >
                <View style={styles.numberRight}>
                  <Text style={{ fontSize: 40, color: "white" }}>+</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.ingridients}>
              <Text style={extraStyles.ingridient}>{"\u25CF"} Ingridents</Text>
            </View>
            <FlatList
              data={info.data.extendedIngredients}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <IngridientsCard title={item.original} />
              )}
            />
            <View style={styles.button}>
              <AppButton
                title={"Make it now"}
                onPress={() => navigation.navigate("StepsScreen", info.data.id)}
              />
            </View>
          </Animated.ScrollView>
        </>
      ) : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    height: 250,
  },
  number: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
  },
  numberText: {
    paddingHorizontal: 20,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRightColor: "white",
    borderRightWidth: 2,
    borderLeftColor: "white",
    borderLeftWidth: 2,
    width: 120,
    backgroundColor: colors.green,
  },
  numberLeft: {
    backgroundColor: colors.green,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    height: 70,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  numberRight: {
    backgroundColor: colors.green,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    height: 70,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  ingridients: {
    paddingVertical: 10,
    paddingLeft: 15,
  },
  button: {
    justifyContent: "center",
    margin: 20,
  },
});

export default RecipeDetailsScreen;
