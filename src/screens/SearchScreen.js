import React, { useState, useRef, useMemo, useCallback } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";

import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import Screen from "../components/Screen";
import { useGetSearchQuery } from "../store/recipes/searchApi";
import RecipeCard from "../components/RecipeCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import fonts from "../styles/fonts";

import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import BottomSheetHeader from "../components/BottomSheetHeader";
import PreFilter from "../components/PreFilter";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import {
  categories,
  diets,
  cuisines,
  intolerances,
  calories,
  times,
  preferences,
} from "../config/filters";

function SearchScreen({ navigation }) {
  // state for searching
  const [state, setState] = React.useState({
    s: "",
    results: [],
    selected: {},
  });
  // states for filters
  const [isOpen, setIsOpen] = useState(false);
  const [diet, setDiet] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [intolerance, setIntolerance] = useState("");
  const [category, setCategory] = useState("");
  const [calorie, setCalorie] = useState("");
  const [time, setTime] = useState("");
  const [preference, setPreference] = useState("");

  const width = Dimensions.get("window").width;
  const itemSize = width / 4;

  // ref
  const bottomSheetRef = useRef(BottomSheet);

  // variables
  const snapPoints = useMemo(() => ["82%", "95%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    bottomSheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  }, []);
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  // call to main api for recipes
  const { data, isLoading, error } = useGetSearchQuery(
    `${state.s}${diet}${cuisine}${intolerance}${category}${calorie}${time}${preference}`
  );

  return (
    <Screen style={styles.container}>
      <View
        style={{
          flex: 1.5,
          paddingVertical: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <AppForm initialValues={{ search: "" }}>
          <AppFormField
            placeholder="Search recipe"
            icon="magnify"
            name="search"
            autoCapitalize="none"
            autoCorrect={false}
            value={state.s}
            onChangeText={(text) =>
              setState((prevState) => {
                return { ...prevState, s: text };
              })
            }
            onSubmitEditing={console.log(data)}
          />
        </AppForm>
        <View>
          <TouchableOpacity onPress={() => handleSheetChanges(0)}>
            <MaterialCommunityIcons
              size={35}
              name="filter-outline"
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 12 }}>
        {data ? (
          <FlatList
            data={data.results}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <RecipeCard
                title={item.title}
                onPress={() => navigation.navigate("RecipeDetailsScreen", item)}
                image={{ uri: item.image }}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        ) : null}
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onClose={() => setIsOpen(false)}
        style={{
          borderColor: colors.grey,
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
        }}
      >
        <BottomSheetHeader
          title="Filters"
          onPress={() => handleClosePress()}
          color={{ color: colors.grey }}
          onPressClear={() => {
            setDiet("");
            setIntolerance("");
            setCuisine("");
            setCategory("");
            setCalorie("");
            setTime("");
            setPreference("");
          }}
        />
        <BottomSheetScrollView>
          <View style={{ padding: 15 }}>
            <Text style={{ fontSize: 25, fontFamily: "NunitoBold" }}>
              Category
            </Text>
          </View>
          <View style={{ margin: 5 }}>
            <FlatList
              scrollEventThrottle
              nestedScrollEnabled={true}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={categories}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setCategory(item.link);
                      console.log(category);
                    }}
                  >
                    <View style={{ alignItems: "center" }}>
                      <View
                        style={{
                          width: itemSize,
                          height: itemSize,
                          backgroundColor: item.bg,
                          borderRadius: 999,
                          padding: 10,
                        }}
                      >
                        <Image
                          source={item.image}
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </View>
                      <Text style={fonts.Regular14}>{item.text}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
              ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
              style={{ overflow: "visible" }}
            />
          </View>
          <View style={{ padding: 15 }}>
            <Text style={{ fontSize: 25, fontFamily: "NunitoBold" }}>Diet</Text>
          </View>
          <FlatList
            data={diets}
            keyExtractor={(item, i) => i}
            showsHorizontalScrollIndicator={false}
            numColumns={Math.ceil(diets.length / 4)}
            contentContainerStyle={{ alignSelf: "flex-start" }}
            renderItem={({ item }) => (
              <PreFilter
                title={item.title}
                onPress={() => {
                  setDiet(item.link);
                  console.log(diet);
                }}
              />
            )}
          />
          <View style={{ padding: 15 }}>
            <Text style={{ fontSize: 25, fontFamily: "NunitoBold" }}>
              Cuisine
            </Text>
          </View>
          <FlatList
            data={cuisines}
            keyExtractor={(item, i) => i}
            showsHorizontalScrollIndicator={false}
            numColumns={Math.ceil(cuisines.length / 4)}
            contentContainerStyle={{ alignSelf: "flex-start" }}
            renderItem={({ item }) => (
              <PreFilter
                title={item.title}
                onPress={() => {
                  setIntolerance(item.link);
                  console.log(intolerance);
                }}
              />
            )}
          />
          <View style={{ padding: 15 }}>
            <Text style={{ fontSize: 25, fontFamily: "NunitoBold" }}>
              Intolerances
            </Text>
          </View>
          <FlatList
            data={intolerances}
            keyExtractor={(item, i) => i}
            showsHorizontalScrollIndicator={false}
            numColumns={Math.ceil(intolerances.length / 4)}
            contentContainerStyle={{ alignSelf: "flex-start" }}
            renderItem={({ item }) => (
              <PreFilter
                title={item.title}
                onPress={() => {
                  setIntolerance(item.link);
                  console.log(intolerance);
                }}
              />
            )}
          />
          <View style={{ padding: 15 }}>
            <Text style={{ fontSize: 25, fontFamily: "NunitoBold" }}>
              Calories maximum
            </Text>
          </View>
          <BottomSheetFlatList
            data={calories}
            keyExtractor={(item, i) => i}
            showsHorizontalScrollIndicator={false}
            numColumns={Math.ceil(calories.length)}
            contentContainerStyle={{ alignSelf: "flex-start" }}
            renderItem={({ item }) => (
              <PreFilter
                title={item.title}
                onPress={() => {
                  setCalorie(item.link);
                  console.log(calorie);
                }}
              />
            )}
          />
          <View style={{ padding: 15 }}>
            <Text style={{ fontSize: 25, fontFamily: "NunitoBold" }}>
              Time to cook maximum
            </Text>
          </View>
          <BottomSheetFlatList
            data={times}
            keyExtractor={(item, i) => i}
            showsHorizontalScrollIndicator={false}
            numColumns={Math.ceil(times.length)}
            contentContainerStyle={{ alignSelf: "flex-start" }}
            renderItem={({ item }) => (
              <PreFilter
                title={item.title}
                onPress={() => {
                  setTime(item.link);
                  console.log(time);
                }}
              />
            )}
          />
          <View style={{ padding: 15 }}>
            <Text style={{ fontSize: 25, fontFamily: "NunitoBold" }}>
              Preference
            </Text>
          </View>
          <BottomSheetFlatList
            data={preferences}
            keyExtractor={(item, i) => i}
            showsHorizontalScrollIndicator={false}
            numColumns={Math.ceil(preferences.length / 3)}
            contentContainerStyle={{ alignSelf: "flex-start" }}
            renderItem={({ item }) => (
              <PreFilter
                title={item.title}
                onPress={() => {
                  setPreference(item.link);
                  console.log(preference);
                }}
              />
            )}
          />
        </BottomSheetScrollView>
      </BottomSheet>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: 20,
  },
});

export default SearchScreen;
