import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import { useGetSearchQuery } from "../store/recipes/searchApi";

function TestScreen(props) {
  const { data = [], isLoading } = useGetSearchQuery();
  console.log(data);
  return (
    <Screen>
      {/* <FlatList
        data={data}
        keyExtractor={({ item }) => item.id.toString()}
        renderItem={({ item }) => {
          <AppText style={styles.text}>{item}</AppText>;
        }}
      ></FlatList>
      ) */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 15,
  },
});

export default TestScreen;
