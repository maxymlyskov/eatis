import React from "react";
import { View, Text, ScrollView, Dimensions, FlatList } from "react-native";

import Screen from "../components/Screen";
import MyCalendar from "../components/Calendar";
import InfoCard from "../components/InfoCard/InfoCard";
import NutrionsFlatList from "../components/NutrionsFlatList/NutrionFlatList";

import styles from "../config/styles";
import fonts from "../styles/fonts";

const { width, height } = Dimensions.get("window");

export default function DiartScreen({ navigation, route }) {
  return (
    <Screen>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{route.name}</Text>
        </View>

        {/* <MyCalendar /> */}

        <View style={{ height: height * 0.3, marginVertical: 20 }}>
          <InfoCard />
        </View>

        <Text style={fonts.Bold24}>Nutrion</Text>

        <View>
          <NutrionsFlatList navigation={navigation} />
        </View>
      </ScrollView>
    </Screen>
  );
}
