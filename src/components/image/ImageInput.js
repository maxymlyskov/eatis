import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  TouchableWithoutFeedback,
  StyleSheet,
  Alert,
} from "react-native";
import colors from "../../config/colors";

import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.cancelled) onChangeImage(result.uri);

    console.log(result);
  };
  const handleDelete = () => {
    if (!imageUri) pickImage();
    else {
      Alert.alert("Delete", "Are you sure you want to delete image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleDelete}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons name="camera" size={45} color={colors.grey} />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 30,
    flexDirection: "row",
    backgroundColor: colors.lightSilver,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 30,
  },
});
