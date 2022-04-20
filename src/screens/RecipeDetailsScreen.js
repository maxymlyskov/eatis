import React, {
  useState,
  useRef,
  useMemo,
  useCallback,
  useEffect,
} from "react";

import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

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

import { useGetInfoIngridientQuery } from "../store/recipes/infoById/ingredientApi";
import colors from "../config/colors";
import Screen from "../components/Screen";
import extraStyles from "../config/styles";
import { useGetRecipeInfoQuery } from "../store/recipes/infoById/infoApi";
import { useGetNutritionByIdQuery } from "../store/recipes/infoById/nutritionApi";
import { useAddSearchedMutation } from "../store/saved/getSearched";
import AnimatedHeader from "../components/AnimatedHeader";
import IngridientsCard from "../components/IngridientsCard";
import { getEaten } from "../store/auth/userSlice";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AppButton from "../components/AppButton";
import { imageURL } from "../store/constants";
import BottomSheetHeader from "../components/BottomSheetHeader";
import BottomButton from "../components/BottomButton";
import ActivityIndicator from "../components/ActivityIndicator";
import storage from "../auth/storage";

function RecipeDetailsScreen({ route, navigation }) {
  const [eat, setEat] = useState(0);
  const dispatch = useDispatch();
  const eaten = useSelector((state) => state.user.eaten);

  const recipe = route.params;
  const offset = useRef(new Animated.Value(0)).current;
  let [number, setNumber] = React.useState(1);
  const info = useGetRecipeInfoQuery(recipe.id);
  const [addRecipe, isError] = useAddSearchedMutation();
  let key = recipe.id;
  const nutrition = useGetNutritionByIdQuery(key);
  console.log(recipe.id);
  let difficulty = "easy";
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(0);
  const infoIng = useGetInfoIngridientQuery(id);
  console.log(infoIng.data);

  const getKey = async () => {
    let eatenKey = await AsyncStorage.getItem("eatenKey");
    let parsed = JSON.parse(eatenKey);
    console.log(parsed);
    return parsed;
  };
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("eatenKey", value);
      await AsyncStorage.setItem(
        "dataKey",
        JSON.stringify(new Date().getDate())
      );
    } catch (e) {
      // saving error
    }
  };
  useEffect(() => {
    getKey().then((res) => setEat(res));
  }, []);

  // ref
  const bottomSheetRef = useRef(BottomSheet);

  // variables
  const snapPoints = useMemo(() => ["50%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    bottomSheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  }, []);
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const { width, height } = Dimensions.get("window");
  const HEADER_HEIGHT = height / 4;
  const MIN_HEIHGT = height / 5;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

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
      console.log(error.error);
    }
  };
  // if (info.data.readyInMinutes > 45) difficulty = "hard";
  // let kcal = parseInt(nutrition.data.calories) * number;
  return (
    <>
      <ActivityIndicator visible={info.isLoading} />
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
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
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
                      {nutrition.data ? (
                        <Text key={key + 1} style={extraStyles.additional}>
                          {parseInt(nutrition.data.calories) * number} kcal
                        </Text>
                      ) : null}
                    </View>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                      <View style={{ paddingRight: 3 }}>
                        <MaterialCommunityIcons
                          name="chef-hat"
                          color={colors.lightSilver}
                          size={20}
                        />
                      </View>
                      {info.data.readyInMinutes && (
                        <Text style={extraStyles.additional}>
                          {info.data.readyInMinutes > 30 ? "hard" : "easy"}
                        </Text>
                      )}
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.ingridients}>
                <Text style={extraStyles.ingridient}>
                  {"\u25CF"} Ingredients
                </Text>
                <View style={styles.number}>
                  <View style={styles.numberText}>
                    <Text style={{ fontSize: 20, color: "white" }}>
                      {number}
                    </Text>
                    <Text style={{ fontSize: 10, color: "white" }}>
                      Serving{s}
                    </Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        setNumber(() => ++number);
                      }}
                    >
                      <View style={styles.numberRight}>
                        <Text style={{ fontSize: 15, color: "white" }}>+</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        if (number > 1) setNumber(() => --number);
                        return;
                      }}
                    >
                      <View style={styles.numberLeft}>
                        <Text style={{ fontSize: 15, color: "white" }}>-</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <FlatList
                data={info.data.extendedIngredients}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <IngridientsCard
                    title={item.original}
                    image={imageURL + item.image}
                    onPress={() =>
                      // navigation.navigate("IngredientDetailsScreen", item.id)
                      {
                        handleSheetChanges(0);
                        setIsOpen(true);
                        setId(item.id);
                        console.log(id);
                      }
                    }
                  />
                )}
                style={{
                  borderWidth: 1,
                  borderColor: colors.lightSilver,
                  borderRadius: 20,
                  // padding: 10
                }}
                contentContainerStyle={{
                  marginTop: 20,
                  marginBottom: 20,
                }}
              />

              <BottomButton
                onPressAnimated={() => {
                  dispatch(getEaten(parseInt(nutrition.data.calories)));
                  storage.storeEaten(eat + eaten);
                }}
                onPressMake={() =>
                  navigation.navigate("StepsScreen", info.data.id)
                }
              />
            </Animated.ScrollView>
          </>
        ) : null}

        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          index={-1}
          onClose={() => setIsOpen(false)}
          style={{
            borderColor: colors.grey,
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
            borderWidth: 2,
            overflow: "hidden",
          }}
          handleComponent={() => (
            <View style={{ alignSelf: "center" }}>
              <View
                style={{
                  width: 75,
                  height: 4,
                  borderRadius: 3,
                  backgroundColor: colors.grey,
                  marginTop: 9,
                }}
              ></View>
            </View>
          )}
        >
          <BottomSheetHeader
            title="Details"
            onPress={() => handleClosePress()}
          />
          <>
            {infoIng.data && (
              <IngridientsCard
                title={capitalizeFirstLetter(infoIng.data.name)}
                preSubTitle={`${infoIng.data.amount} ${infoIng.data.unit}`}
                image={imageURL + infoIng.data.image}
                style={{ fontSize: 30 }}
              />
            )}
            <BottomSheetScrollView>
              <View>
                {infoIng.data && (
                  <>
                    <FlatList
                      data={infoIng.data.nutrition.nutrients}
                      keyExtractor={(item, i) => i}
                      renderItem={({ item }) => (
                        <IngridientsCard
                          title={item.name}
                          subTitle={`${item.amount} ${item.unit}`}
                        />
                      )}
                      style={{
                        borderWidth: 1,
                        borderColor: "white",
                        borderRadius: 20,
                        // padding: 10
                      }}
                      contentContainerStyle={{
                        marginTop: 20,
                        marginBottom: 20,
                      }}
                    />
                  </>
                )}
              </View>
            </BottomSheetScrollView>
          </>
        </BottomSheet>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    height: 250,
  },
  number: {
    paddingVertical: 15,
    flexDirection: "row",
  },
  numberText: {
    paddingHorizontal: 20,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRightColor: "white",
    borderRightWidth: 1,
    borderLeftColor: "white",
    borderLeftWidth: 2,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    width: 100,
    backgroundColor: colors.green,
  },
  numberLeft: {
    backgroundColor: colors.green,
    borderBottomRightRadius: 10,
    height: 25,
    width: 40,

    justifyContent: "center",
    alignItems: "center",
  },
  numberRight: {
    backgroundColor: colors.green,
    borderBottomWidth: 1,
    borderColor: "white",
    borderTopRightRadius: 10,
    height: 25,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  ingridients: {
    paddingVertical: 5,
    paddingRight: 15,
    paddingLeft: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default RecipeDetailsScreen;
