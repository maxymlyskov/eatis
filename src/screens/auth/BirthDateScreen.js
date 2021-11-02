import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import AppText from "../../components/AppText";
import Screen from "../../components/Screen";
import DateTimePicker from "@react-native-community/datetimepicker";

import PurposeButton from "../../components/PurposeButton";
import AppButton from "../../components/AppButton";
import colors from "../../config/colors";

function BirthDateScreen({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    console.log(selectedDate);
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.textContainer}>
        <AppText>Tell me your Birth Date</AppText>
      </View>
      <View style={styles.dateContainer}>
        <PurposeButton title="Choose date" onPress={showDatepicker} />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            minimumDate={new Date(1950, 0, 1)}
            maximumDate={new Date()}
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={() => {
              onChange();
            }}
          />
        )}
      </View>
      <View style={{ marginTop: "auto" }}>
        <AppButton
          title="Next"
          color={colors.green}
          onPress={() => navigation.navigate("Height")}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  dateContainer: {
    paddingVertical: Dimensions.get("window").height / 5,
  },
});

export default BirthDateScreen;
