import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  FlatList,
  Image,
  Modal,
} from "react-native";
import {
  AppFormField,
  AppForm,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
import { BlurView } from "expo-blur";
import FormImagePicker from "../components/image/FormImagePicker";

import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import storage from "../auth/storage";

import { useDispatch, useSelector } from "react-redux";
import Screen from "../components/Screen";
import { getNotes } from "../store/auth/userSlice";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function PlansDetailsScreen({ route, navigation }) {
  let info = route.params;
  const [titleChange, setTitleChange] = useState(info.title);
  const [isVisible, setIsVisible] = useState(false);
  const [uriImage, setImageUrl] = useState("");
  let [infoDone, setInfoDone] = useState([]);
  const [titleDone, setTitleDone] = useState([]);
  const dispatch = useDispatch();
  let { notes } = useSelector((state) => state.user);
  const [descriptionChange, setDescriptionChange] = useState(info.description);
  useEffect(() => {
    storage.getNotes().then((res) => setInfoDone(res));
  }, []);
  let minutes;
  if (new Date(info.date).getMinutes() < 10) {
    minutes = `0${new Date(info.date).getMinutes()}`;
  } else {
    minutes = new Date(info.date).getMinutes();
  }
  let objIndex = infoDone.findIndex((obj) => obj.id == info.id);

  const changeTodo = async ({ images }) => {
    const todo = {
      id: info.id,
      title: titleChange,
      description: descriptionChange,
      date: info.date,
      check: info.check,
      images: images.concat(info.images),
    };
    try {
      let result;
      storage.getNotes().then((res) => setInfoDone(res));

      // updatedData[objIndex] = todo;
      // console.log(updatedData);

      dispatch(
        getNotes(infoDone.map((item) => (item.id === info.id ? todo : item)))
      );
      storage.storeNotes(
        infoDone.map((item) => (item.id === info.id ? todo : item))
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Screen>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons
                size={30}
                color={colors.grey}
                name="arrow-left"
              />
            </TouchableWithoutFeedback>
            <TextInput
              value={titleChange}
              onChangeText={(text) => {
                setTitleChange(text);
              }}
              style={styles.title}
            ></TextInput>
            <View style={styles.date}>
              <MaterialCommunityIcons
                size={40}
                name="clock"
                color={colors.green}
              />
              <View style={styles.time}>
                <Text style={styles.dateText}>
                  {new Date(info.date).getHours()}:{minutes}
                </Text>
                <Text style={styles.dateText}>
                  {monthNames[new Date(info.date).getMonth()]}{" "}
                  {new Date(info.date).getDate()}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.description}>
            <TextInput
              value={descriptionChange}
              onChangeText={(text) => {
                setDescriptionChange(text);
              }}
              style={styles.descriptionText}
              multiline
              numberOfLines={10}
            />
          </View>
          <View>
            <FlatList
              data={info.images}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, i) => item + i}
              renderItem={({ item }) => (
                <TouchableWithoutFeedback
                  onPress={() => {
                    setImageUrl(item);
                    setIsVisible(true);
                  }}
                >
                  <View style={{ marginHorizontal: 10 }}>
                    <Image
                      style={{ height: 120, width: 120, borderRadius: 25 }}
                      source={{ uri: item }}
                    />
                  </View>
                </TouchableWithoutFeedback>
              )}
            />
          </View>
        </View>
        <AppForm initialValues={{ images: [] }} onSubmit={changeTodo}>
          <View style={{ margin: 20 }}>
            <FormImagePicker name={"images"} />
            <View style={{ width: "70%", alignSelf: "center", marginTop: 70 }}>
              <SubmitButton title="Change Note" />
            </View>
          </View>
        </AppForm>
      </Screen>
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          setIsVisible(false);
        }}
      >
        <TouchableWithoutFeedback onPress={() => setIsVisible(false)}>
          <View style={styles.modal}>
            <Image
              style={{ height: 280, width: 300, borderRadius: 20, zIndex: 1 }}
              source={{ uri: uriImage }}
            />
            <BlurView style={styles.absolute} intensity={100} tint="light" />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 25,
  },
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontFamily: "NunitoRegular",
    width: "50%",
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    alignItems: "center",
    flexDirection: "row",
  },
  dateText: {
    fontFamily: "NunitoBold",
    color: colors.green,
  },
  time: {
    alignItems: "center",
  },
  description: {
    margin: 10,
  },
  descriptionText: {
    fontFamily: "NunitoRegular",
    fontSize: 20,
    color: colors.grey,
  },
});

export default PlansDetailsScreen;
