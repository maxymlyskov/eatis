import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";

import RecipeCard from "../../components/RecipeCard";
import { useDeleteSearchedMutation } from "../../store/saved/getSearched";
import LikeButton from "../../components/LikeButton";
import colors from "../../config/colors";

export default function SavedRecipes({ data, navigation }) {
  const [deleteRecipe] = useDeleteSearchedMutation();
  const handleDelete = async (id) => {
    try {
      await deleteRecipe(id).unwrap();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ flex: 1 }}>
            <View
              style={{
                position: "absolute",
                zIndex: 1,
                marginLeft: Dimensions.get("window").width / 1.3,
                marginTop: Dimensions.get("window").height / 50,
              }}
            >
              <LikeButton
                size={35}
                color={colors.green}
                onPress={() => handleDelete(item._id)}
              />
            </View>
            <RecipeCard
              title={item.title}
              onPressLike={console.log("liked")}
              image={{ uri: item.image }}
              onPress={() => navigation.navigate("RecipeDetailsScreen", item)}
            />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
