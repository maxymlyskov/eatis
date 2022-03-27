import React, { useState, useRef, useMemo, useCallback } from "react";
import { View, StyleSheet, FlatList, Text, SectionList } from "react-native";
import { useGetRandomRecipeQuery } from "../store/recipes/randomApi";
import { useGetSearchQuery } from "../store/recipes/searchApi";
import {
  useGetDayPlannerQuery,
  useGetWeekPlannerQuery,
} from "../store/recipes/plannerApi";

import Screen from "../components/Screen";
import RecipeHeader from "../components/RecipeHeader";

import fonts from "../styles/fonts";
import styles from "../config/styles";
import extraStyles from "../config/styles";
import colors from "../config/colors";
import FlatListFilter from "../components/FlatlistFilter/FlatListFilter";
import AppButton from "../components/AppButton";
import { useAddAuthMutation, useAddUserMutation } from "../store/auth/authApi";
import useAuth from "../auth/useAuth";
import { useSelector } from "react-redux";

export default function RecipeScreen({ navigation, route }) {
  const auth = useAuth();
  const { data, isLoading, error } = useGetSearchQuery(`chicken`);
  const [addAuth] = useAddAuthMutation();
  const [addUser] = useAddUserMutation();
  const handleRegister = async () => {
    try {
      await addUser({
        email: "test1@domain.com",
        password:
          "$2b$10$beroOz9qHKjiUEHEbu1QR.SFpFUFzsrWW/IL0y56hoeRUvbYolACq",
        gender: "maledasd",
        name: "Test",
        weight: 100,
        height: 150,
        goal: "lose",
        birthDate: 2,
      }).unwrap();
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogin = async () => {
    try {
      const result = await addAuth({
        email: "test1@domain.com",
        password:
          "$2b$10$beroOz9qHKjiUEHEbu1QR.SFpFUFzsrWW/IL0y56hoeRUvbYolACq",
      }).unwrap();
      console.log(result);
      auth.logIn(result);
    } catch (error) {
      console.log(error);
    }
  };

  const { user } = useSelector((state) => state.user);
  console.log(user);
  if (isLoading)
    return <Screen style={{ backgroundColor: colors.green }}></Screen>;

  return (
    <Screen style={{ backgroundColor: "white", paddingHorizontal: 20 }}>
      <AppButton
        onPress={() => {
          auth.logOut();
        }}
      />
      <AppButton
        onPress={() => {
          handleLogin();
        }}
      />
      {/* <Text></Text> */}
      {data && (
        <>
          <RecipeHeader
            onPressSearch={() => navigation.navigate("SearchScreen")}
          />

          <View style={styles.titleContainer}>
            <Text style={styles.title}>{route.name.split("Screen")}</Text>
          </View>

          <View style={{ flex: 1 }}>
            <FlatListFilter data={data} navigation={navigation} clear="Clear" />
          </View>
        </>
      )}
    </Screen>
  );
}
