import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CircularProgress from "react-native-circular-progress-indicator";
import InfoItem from "./InfoItem";
import LeftStatistic from "./LeftStatistic";
import { useDispatch, useSelector } from "react-redux";
import { getCalories } from "../../store/auth/userSlice";

import colors from "../../config/colors";
import fonts from "../../styles/fonts";

export default function InfoCard() {
  const [eat, setEat] = useState(0);
  const [data, setData] = useState(0);
  const [check, setCheck] = useState(0);
  const [color, setColor] = useState(colors.green);

  const { user } = useSelector((state) => state.user);
  const eaten = useSelector((state) => state.user.eaten);

  const getKey = async () => {
    let eatenKey = await AsyncStorage.getItem("eatenKey");
    let dataKey = await AsyncStorage.getItem("dataKey");
    let parsed = JSON.parse(eatenKey);
    let parsedData = JSON.parse(dataKey);
    console.log(parsedData);
    return parsed;
  };
  const getData = async () => {
    let dataKey = await AsyncStorage.getItem("dataKey");
    let parsedData = JSON.parse(dataKey);
    console.log(parsedData);
    return parsedData;
  };
  useEffect(async () => {
    getData().then(async (res) => {
      setData(res);
      const dataNow = new Date().getDate();
      if (dataNow != res) {
        await AsyncStorage.removeItem("eatenKey");
        console.log(data);
      }
    });
  }, []);

  useEffect(() => {
    getKey().then((res) => setCheck(res));
  }, []);
  useEffect(() => {
    getKey().then((res) => {
      if (check === res) setEat(res + eaten);
      else {
        setEat(res);
      }
    });
  }, [eaten]);
  useEffect(() => {
    if (eat > BMR) setColor(colors.danger);
  }, [eat]);

  const dispatch = useDispatch();
  const dateBorn = new Date(user.birthDate);
  const dateNow = new Date();
  const years = dateNow.getFullYear() - dateBorn.getFullYear();
  let BMR = null;

  if (user.gender === "Male") {
    if (user.goal === "Lose weight") {
      if (user.activity === "Low") {
        BMR =
          66.5 +
          13.75 * user.weight +
          5.003 * user.height -
          6.75 * years -
          200 +
          200;
      }
      if (user.activity === "Below average") {
        BMR =
          66.5 +
          13.75 * user.weight +
          5.003 * user.height -
          6.75 * years -
          200 +
          300;
      }
      if (user.activity === "Average") {
        BMR =
          66.5 +
          13.75 * user.weight +
          5.003 * user.height -
          6.75 * years -
          200 +
          400;
      }
      if (user.activity === "Above average") {
        BMR =
          66.5 +
          13.75 * user.weight +
          5.003 * user.height -
          6.75 * years -
          200 +
          500;
      }
      if (user.activity === "High") {
        BMR =
          66.5 +
          13.75 * user.weight +
          5.003 * user.height -
          6.75 * years -
          200 +
          600;
      }
    } else if (user.goal === "Save weight") {
      if (user.activity === "Low") {
        BMR =
          66.5 + 13.75 * user.weight + 5.003 * user.height - 6.75 * years + 200;
      }
      if (user.activity === "Below average") {
        BMR =
          66.5 + 13.75 * user.weight + 5.003 * user.height - 6.75 * years + 300;
      }
      if (user.activity === "Average") {
        BMR =
          66.5 + 13.75 * user.weight + 5.003 * user.height - 6.75 * years + 400;
      }
      if (user.activity === "Above average") {
        BMR =
          66.5 + 13.75 * user.weight + 5.003 * user.height - 6.75 * years + 500;
      }
      if (user.activity === "High") {
        BMR =
          66.5 + 13.75 * user.weight + 5.003 * user.height - 6.75 * years + 600;
      }
    } else if (user.goal === "Gain weight") {
      if (user.activity === "Low") {
        BMR =
          66.5 +
          13.75 * user.weight +
          5.003 * user.height -
          6.75 * years +
          200 +
          200;
      }
      if (user.activity === "Below average") {
        BMR =
          66.5 +
          13.75 * user.weight +
          5.003 * user.height -
          6.75 * years +
          200 +
          300;
      }
      if (user.activity === "Average") {
        BMR =
          66.5 +
          13.75 * user.weight +
          5.003 * user.height -
          6.75 * years +
          200 +
          400;
      }
      if (user.activity === "Above average") {
        BMR =
          66.5 +
          13.75 * user.weight +
          5.003 * user.height -
          6.75 * years +
          200 +
          500;
      }
      if (user.activity === "High") {
        BMR =
          66.5 +
          13.75 * user.weight +
          5.003 * user.height -
          6.75 * years +
          200 +
          600;
      }
    }
  } else {
    BMR = 655.1 + 9.563 * user.weight + 1.85 * user.height - 4.676 * years;
  }
  console.log(parseInt(BMR));
  dispatch(getCalories(BMR));

  return (
    <>
      <View style={styles.card}>
        <View style={styles.statistic}>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <LeftStatistic
              source={require("../../../assets/imgs/cookies.png")}
              title="Eaten"
              statisticText={eat}
            />
            <LeftStatistic
              source={require("../../../assets/imgs/calories.webp")}
              title="Daily need"
              statisticText={parseInt(BMR)}
            />
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <CircularProgress
              value={eat}
              maxValue={BMR}
              textColor={color}
              progressValueColor={colors.red}
              clockwise
              textStyle={fonts.Bold24}
              titleStyle={[fonts.semiBold14, { color: colors.grey }]}
              titleColor={colors.grey}
              activeStrokeColor={color}
              title={"kcal eaten"}
              radius={65}
              inActiveStrokeColor={color}
              inActiveStrokeOpacity={0.1}
            />
          </View>
        </View>

        {/* Protein, Card, Fat - Info */}

        <View style={{ flex: 0.3, flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <InfoItem
              title={"Protein"}
              max={parseInt(BMR * 0.075)}
              eaten={parseInt(eat * 0.075)}
              backgroundColor={color}
              borderColor={color}
            />
          </View>
          <View style={{ flex: 1, marginHorizontal: 30 }}>
            <InfoItem
              title={"Carbs"}
              max={parseInt(BMR * 0.08)}
              backgroundColor={color}
              borderColor={color}
              eaten={parseInt(eat * 0.08)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <InfoItem
              title={"Fat"}
              backgroundColor={color}
              borderColor={color}
              max={parseInt(BMR * 0.02)}
              eaten={parseInt(eat * 0.02)}
            />
          </View>
        </View>
      </View>

      {/* shadow */}
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#000",
            elevation: 25,
            borderRadius: 20,
            opacity: 0.3,
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    borderRadius: 20,
    padding: 20,
    zIndex: 1,
  },

  statistic: {
    flex: 0.7,
    flexDirection: "row",
  },
});
