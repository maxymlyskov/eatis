import React, { useState } from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import AppButton from "../../components/AppButton";
import colors from "../../config/colors";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { getBirthDate } from "../../store/auth/registerSlice";
import { getUserSuccess } from "../../store/auth/userSlice";

function BirthDateScreen({ addittonalFunc }) {
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
  const { user } = useSelector((state) => state.user);

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

    if (addittonalFunc) addittonalFunc();
    console.log(register);
    console.log(fDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <>
      <View>
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
    </>
  );
}

export default BirthDateScreen;
