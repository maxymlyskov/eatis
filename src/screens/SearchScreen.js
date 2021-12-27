import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import Screen from "../components/Screen";
import { useGetRandomRecipeQuery } from "../store/recipes/randomApi";
import { useGetSearchQuery } from "../store/recipes/searchApi";
import RecipeCard from "../components/RecipeCard";

function SearchScreen({ navigation }) {
  const [state, setState] = React.useState({
    s: "",
    results: [],
    selected: {},
  });
  const { data, isLoading, error } = useGetSearchQuery(state.s);

  return (
    <Screen style={styles.container}>
      <View
        style={{
          flex: 2.5,
          flexDirection: "row",
          justifyContent: "center",
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
      </View>
      {data ? (
        <View style={{ flex: 15 }}>
          <FlatList
            data={data.results}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <RecipeCard
                title={item.title}
                onPress={() => navigation.navigate("RecipeDetailsScreen", item)}
                imageUrl={item.image}
              />
            )}
          ></FlatList>
        </View>
      ) : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default SearchScreen;
