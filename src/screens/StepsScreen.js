import React from "react";
import { View, StyleSheet, FlatList, Dimensions } from "react-native";
import IngridientsCard from "../components/IngridientsCard";
import InstructionsCard from "../components/InstructionsCard";
import Screen from "../components/Screen";
import AutoScrolling from "react-native-auto-scrolling";

import { useGetAnalyzedInstructionsQuery } from "../store/recipes/infoById/analyzedInstructionsApi";

function StepsScreen({ route }) {
  const id = route.params;
  const { data } = useGetAnalyzedInstructionsQuery(id);
  let steps = [];
  for (let i in data) {
    for (let j in data[i]) {
      for (let a in data[i][j]) {
        steps.push(data[i][j][a].step);
      }
    }
  }
  console.log(steps);
  return (
    <Screen>
      {/* <AutoScrolling isVertical delay={5000} style={{ width: 300 }}> */}
      <FlatList
        data={steps}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <InstructionsCard title={item} />}
      />
      {/* </AutoScrolling> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default StepsScreen;
