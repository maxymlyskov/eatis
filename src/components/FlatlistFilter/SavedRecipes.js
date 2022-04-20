import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";

import RecipeCard from "../../components/RecipeCard";
import { useDeleteSearchedMutation } from "../../store/saved/getSearched";
import LikeButton from "../../components/LikeButton";
import colors from "../../config/colors";
import ActivityIndicator from "../ActivityIndicator";
import SaveButton from "../buttons/SaveButton";
import ImageNoData from "../image/ImageNoData";

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
    <>
      {data && data.length > 0 ? (
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
                  <SaveButton
                    onPressAnimated={() => {
                      setTimeout(() => {
                        handleDelete(item._id);
                      }, 700);
                    }}
                    liked={false}
                  />
                </View>
                <RecipeCard
                  title={item.title}
                  onPressLike={console.log("liked")}
                  image={{ uri: item.image }}
                  onPress={() =>
                    navigation.navigate("RecipeDetailsScreen", item)
                  }
                />
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      ) : (
        <ImageNoData text="No saved recipes" saved />
      )}
    </>
  );
}
