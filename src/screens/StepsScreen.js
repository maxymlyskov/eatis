import React, { useState } from "react";
import { View, StyleSheet, FlatList, Dimensions } from "react-native";
import IngridientsCard from "../components/IngridientsCard";
import InstructionsCard from "../components/InstructionsCard";
import Screen from "../components/Screen";
import AutoScrolling from "react-native-auto-scrolling";

import { useGetAnalyzedInstructionsQuery } from "../store/recipes/infoById/analyzedInstructionsApi";
import ActivityIndicator from "../components/ActivityIndicator";

function StepsScreen({ route }) {
  const id = route.params;
  const [number, setNumber] = useState(1);
  const { data, isLoading } = useGetAnalyzedInstructionsQuery(id);
  let steps = [];
  for (let i in data) {
    for (let j in data[i]) {
      for (let a in data[i][j]) {
        steps.push(data[i][j][a].step);
      }
    }
  }
  steps.map((step, i) => {
    steps.push({ step: step, id: i + 1 });
  });
  steps = steps.filter((e) => {
    return typeof e !== "string";
  });
  console.log(steps);
  return (
    <>
      <ActivityIndicator visible={isLoading} />
      <Screen>
        <FlatList
          data={steps}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <InstructionsCard number={item.id} title={item.step} />
          )}
        />
        {/* </AutoScrolling> */}
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default StepsScreen;
