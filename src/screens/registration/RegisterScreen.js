import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
  Text,
} from "react-native";
import Swiper from "react-native-swiper";

import GoalScreen from "./GoalScreen";
import AppButton from "../../components/AppButton";
import colors from "../../config/colors";
import GenderScreen from "./GenderScreen";
import BirthDateScreen from "./BirthDateScreen";
import HeightScreen from "./HeightScreen";
import WeightScreen from "./WeightScreen";
import EndingScreen from "./EndingScreen";

function RegisterScreen(props) {
  const swiper = useRef(null);
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={true}
      index={0}
      loop
      ref={swiper}
      buttonWrapperStyle={{
        backgroundColor: "transparent",
        flexDirection: "row",
        position: "absolute",
        top: 0,
        left: 0,
        flex: 1,
        paddingHorizontal: 10,
        marginTop: 350,
        justifyContent: "space-between",
        alignItems: "center",
      }}
      nextButton={
        <View style={styles.nextB}>
          <Text style={styles.next}>Next</Text>
        </View>
      }
      prevButton={
        <View style={styles.backB}>
          <Text style={styles.next}>Back</Text>
        </View>
      }
      activeDot={
        <View
          style={{
            backgroundColor: colors.green,
            width: 14,
            height: 8,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3,
          }}
        />
      }
    >
      <View style={styles.slide1}>{<GoalScreen />}</View>
      <View style={styles.slide2}>
        <GenderScreen />
      </View>
      <View style={styles.slide3}>
        <BirthDateScreen />
      </View>
      <View style={styles.slide3}>
        <HeightScreen />
      </View>
      <View style={styles.slide3}>
        <WeightScreen />
      </View>
      <View style={styles.slide3}>
        <EndingScreen />
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  next: {
    fontSize: 20,
    fontFamily: "NunitoBold",
    color: "white",
  },
  nextB: {
    backgroundColor: colors.green,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 80,
  },
  backB: {
    backgroundColor: colors.grey,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 80,
  },
});

export default RegisterScreen;
