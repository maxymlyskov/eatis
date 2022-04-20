import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CheckButton from "./buttons/CheckButton";
import { useSelector, useDispatch } from "react-redux";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";

function Note({
  title,
  description,
  hours,
  minutes,
  onPress,
  onPressDelete,
  onPressCheck,
  checkNeed,
  check,
  uri,
}) {
  const [touch, setTouch] = useState(false);
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.user);
  const [checkDone, setCheckDone] = useState(false);

  if (minutes < 10) minutes = `0${minutes}`;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      {!uri ? (
        <View style={styles.container}>
          {/* <Image source={{ uri: uri }} style={{ height: 200, width: 200 }} /> */}
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <View style={styles.dateContainer}>
              <MaterialCommunityIcons
                size={15}
                name="clock"
                color={colors.green}
              />
              <Text style={styles.dateText}>
                {" "}
                {hours}:{minutes}
              </Text>
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Text numberOfLines={4} style={styles.descriptionText}>
              {description}
            </Text>
          </View>
          <View
            style={{
              marginTop: "auto",
              justifyContent: "space-between",
              flexDirection: "row",
              padding: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                onPressCheck();
                setCheckDone(true);
              }}
            >
              {check && (
                <View style={{}}>
                  {!checkDone ? (
                    <MaterialCommunityIcons
                      size={25}
                      name="check-circle-outline"
                      color={colors.green}
                    />
                  ) : (
                    <CheckButton
                      onPressAnimated={() => console.log("done")}
                      image={require("../../assets/animations/check.json")}
                    />
                  )}
                </View>
              )}
            </TouchableOpacity>
            <View style={{ marginLeft: "auto" }}>
              <TouchableOpacity onPress={onPressDelete}>
                <MaterialCommunityIcons
                  size={25}
                  name="delete-sweep"
                  color={colors.danger}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.card}>
            <ImageBackground
              style={styles.image}
              source={{ uri: uri }}
              tint="tint"
              overflow="visible"
            >
              <View style={styles.titleContainer}>
                <Text style={styles.titleTextImage}>{title}</Text>
                <View style={styles.dateContainer}>
                  <MaterialCommunityIcons
                    size={15}
                    name="clock"
                    color={colors.blackGreen}
                  />
                  <Text style={styles.dateText}>
                    {" "}
                    {hours}:{minutes}
                  </Text>
                </View>
              </View>
            </ImageBackground>
            <View
              style={{
                marginTop: "auto",
                justifyContent: "space-between",
                flexDirection: "row",
                padding: 10,
                marginTop: 5,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  onPressCheck();
                  setCheckDone(true);
                }}
              >
                {check && (
                  <View style={{}}>
                    {!checkDone ? (
                      <MaterialCommunityIcons
                        size={25}
                        name="check-circle-outline"
                        color={colors.green}
                      />
                    ) : (
                      <CheckButton
                        onPressAnimated={() => console.log("done")}
                        image={require("../../assets/animations/check.json")}
                      />
                    )}
                  </View>
                )}
              </TouchableOpacity>
              <View style={styles.descriptionContainer}>
                <Text numberOfLines={2} style={styles.descriptionText}>
                  {description}
                </Text>
              </View>
              <View style={{ marginLeft: "auto" }}>
                <TouchableOpacity onPress={onPressDelete}>
                  <MaterialCommunityIcons
                    size={25}
                    name="delete-sweep"
                    color={colors.danger}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )}
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    margin: 3,

    backgroundColor: "#fff",
    shadowColor: "#000",
    elevation: 5,
    borderRadius: 20,
    marginVertical: 20,
    shadowOpacity: 0.4,
    height: 200,
    width: "90%",
  },
  titleText: {
    fontFamily: "NunitoBold",
    fontSize: 28,

    color: colors.black,
  },
  titleTextImage: {
    fontFamily: "NunitoBold",
    fontSize: 28,
    color: "white",
  },
  image: {
    width: "100%",
    overflow: "hidden",
    height: 150,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
  },
  card: {
    borderRadius: 15,
    backgroundColor: "white",
    marginBottom: 20,
    overflow: "hidden",
  },
  titleContainer: {
    margin: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 10,
  },
  descriptionText: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.grey,
    fontFamily: "NunitoRegular",
  },
  descriptionContainer: {
    marginHorizontal: 15,
    width: 200,
  },
  dateText: {
    fontSize: 10,
    fontWeight: "600",
    color: colors.black,
    fontFamily: "NunitoBold",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Note;
