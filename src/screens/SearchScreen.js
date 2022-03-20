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
      <View style={{ flex: 1.5, paddingVertical: 20 }}>
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
