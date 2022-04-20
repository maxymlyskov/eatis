import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import storage from "../auth/storage";
import { useDispatch, useSelector } from "react-redux";

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
function NoteInfo({ title, date, description, id }) {
  const [titleChange, setTitleChange] = React.useState(title);
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.user);
  const [descriptionChange, setDescriptionChange] = React.useState(description);
  let minutes;
  if (new Date(date).getMinutes() < 10) {
    minutes = `0${new Date(date).getMinutes()}`;
  } else {
    minutes = new Date(date).getMinutes();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          value={titleChange}
          onChangeText={setTitleChange}
          style={styles.title}
        ></TextInput>
        <View style={styles.date}>
          <MaterialCommunityIcons size={40} name="clock" color={colors.green} />
          <View style={styles.time}>
            <Text style={styles.dateText}>
              {new Date(date).getHours()}:{minutes}
            </Text>
            <Text style={styles.dateText}>
              {monthNames[new Date(date).getMonth()]} {new Date(date).getDate()}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.description}>
        <TextInput
          value={descriptionChange}
          onChangeText={setDescriptionChange}
          style={styles.descriptionText}
          multiline
          numberOfLines={10}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  title: {
    fontSize: 30,
    fontFamily: "NunitoRegular",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
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

export default NoteInfo;
