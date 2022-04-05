import React, { useState, useRef, useMemo, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";

import Screen from "../components/Screen";
import Category from "../components/CategoryFlatList/Category";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import IngridientsCard from "../components/IngridientsCard";
import { imageURL } from "../store/constants";

import styles from "../config/styles";
import fonts from "../styles/fonts";
import colors from "../config/colors";
import { useGetSearchIngridientsQuery } from "../store/recipes/ingredientsSearchApi";
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import AppButton from "../components/AppButton";
import { useGetInfoIngridientQuery } from "../store/recipes/infoById/ingredientApi";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import BottomSheetHeader from "../components/BottomSheetHeader";

export default function PluseScreen({ navigation }) {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(0);
  const info = useGetInfoIngridientQuery(id);

  // ref
  const bottomSheetRef = useRef(BottomSheet);

  // variables
  const snapPoints = useMemo(() => ["80%", "95%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    bottomSheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  }, []);
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const { data } = useGetSearchIngridientsQuery(state.s);

  return (
    <Screen
      style={{
        flex: 1,
      }}
    >
      <View style={{ opacity: isOpen ? 0.1 : 1 }}>
        <ScrollView
          contentContainerStyle={{
            padding: 20,
          }}
        >
          <View style={{ paddingVertical: 20 }}>
            <AppForm initialValues={{ search: "" }}>
              <AppFormField
                placeholder="Search ingredients"
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
                onSubmitEditing={console.log(state.s)}
              />
            </AppForm>
          </View>
          <View style={{ flex: 12 }}>
            {data ? (
              <FlatList
                data={data.results}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <IngridientsCard
                    title={item.name}
                    onPress={() => {
                      // navigation.navigate("IngredientDetailsScreen", item.id);

                      handleSheetChanges(0);
                      setIsOpen(true);
                      setId(item.id);
                      console.log(id);
                    }}
                    image={imageURL + item.image}
                  />
                )}
                contentContainerStyle={{
                  marginTop: 20,
                  marginBottom: 20,
                }}
                style={{
                  borderWidth: 1,
                  borderColor: colors.green,
                  borderRadius: 20,
                  // padding: 10
                }}
                showsVerticalScrollIndicator={false}
              />
            ) : null}
          </View>
        </ScrollView>
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
        <BottomSheetHeader title="Details" onPress={() => handleClosePress()} />
        {info.data && (
          <IngridientsCard
            title={capitalizeFirstLetter(info.data.name)}
            preSubTitle="100g"
            image={imageURL + info.data.image}
            style={{ fontSize: 30 }}
          />
        )}
        <BottomSheetScrollView>
          <View>
            {info.data && (
              <>
                <FlatList
                  data={info.data.nutrition.nutrients}
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
      </BottomSheet>
    </Screen>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
