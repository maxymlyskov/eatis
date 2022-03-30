import React, { useState } from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import AppButton from "../../components/AppButton";
import colors from "../../config/colors";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { getBirthDate } from "../../store/auth/registerSlice";

function BirthDateScreen(props) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Empty");
  const [day, setDay] = useState("DD");
  const [month, setMonth] = useState("MM");
  const [year, setYear] = useState("YYYY");
  const [tempDate, setTempDate] = useState("");

  const dispatch = useDispatch();
  const register = useSelector((state) => state.register.birthDate);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    setTempDate(tempDate);
    let day = tempDate.getDate();
    let month = tempDate.getMonth() + 1;
    let year = tempDate.getFullYear();
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    setText(fDate);
    setDay(day);
    setMonth(month);
    setYear(year);
    dispatch(getBirthDate(tempDate));
    console.log(register);
    console.log(fDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Tap your birth date</Text>
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            setMode("date");
            setShow(true);
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 15,
            }}
          >
            <View
              style={{ borderBottomColor: colors.black, borderBottomWidth: 2 }}
            >
              <Text style={{ fontSize: 35 }}>{day}</Text>
            </View>
            <View
              style={{ borderBottomColor: colors.black, borderBottomWidth: 2 }}
            >
              <Text style={{ fontSize: 35 }}>{month}</Text>
            </View>
            <View
              style={{ borderBottomColor: colors.black, borderBottomWidth: 2 }}
            >
              <Text style={{ fontSize: 35 }}>{year}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>

        {show && (
          <DateTimePicker
            testID="datetimepicker"
            value={date}
            mode={mode}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
      <View style={styles.bottom}>
        <Text style={styles.bottomText}>
          We’ll use this to calculates and to create better recomendations for
          you.
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 180 },
  text: {
    fontFamily: "NunitoBold",
    fontSize: 25,
  },
  textContainer: {
    margin: 40,

    marginBottom: 100,
  },
  bottom: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  bottomText: {
    color: colors.grey,
    fontSize: 15,
  },
});

export default BirthDateScreen;
