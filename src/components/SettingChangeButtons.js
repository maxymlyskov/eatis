import React from "react";
import { View, StyleSheet } from "react-native";
import AppButton from "./AppButton";
import MiniButton from "./MiniButton";
import colors from "../config/colors";
import { ScrollView } from "react-native-gesture-handler";

function SettingChangeButtons({
  firstTitle,
  secondTitle,
  thirdTitle,
  fourthTitle,
  fifthTitle,
  onPressFirst,
  onPressSecond,
  onPressThird,
  onPresssFourth,
  onPressFifth,
  firstColor,
  firstColorB,
  secondColor,
  secondColorB,
  thirdColor,
  fourthColor,
  thirdColorB,
  fifthColor,
  fourthColorB,
  fifthColorB,
}) {
  return (
    <View style={styles.container}>
      {firstTitle && (
        <View style={{ margin: 5 }}>
          <MiniButton
            title={firstTitle}
            onPress={onPressFirst}
            backgroundColor={firstColor}
            borderColor={firstColorB}
            color={firstColorB}
            borderWidth={1}
          />
        </View>
      )}
      {secondTitle && (
        <View style={{ margin: 5 }}>
          <MiniButton
            title={secondTitle}
            onPress={onPressSecond}
            backgroundColor={secondColor}
            borderColor={secondColorB}
            color={secondColorB}
            borderWidth={1}
          />
        </View>
      )}
      <View></View>
      {thirdTitle && (
        <View style={{ margin: 5 }}>
          <MiniButton
            title={thirdTitle}
            onPress={onPressThird}
            backgroundColor={thirdColor}
            borderColor={thirdColorB}
            color={thirdColorB}
            borderWidth={1}
          />
        </View>
      )}
      {fourthTitle && (
        <View style={{ margin: 5 }}>
          <MiniButton
            title={fourthTitle}
            onPress={onPresssFourth}
            backgroundColor={fourthColor}
            borderColor={fourthColorB}
            color={fourthColorB}
            borderWidth={1}
          />
        </View>
      )}
      {fifthTitle && (
        <View style={{ margin: 5 }}>
          <MiniButton
            title={fifthTitle}
            onPress={onPressFifth}
            backgroundColor={fifthColor}
            borderColor={fifthColorB}
            color={fifthColorB}
            borderWidth={1}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default SettingChangeButtons;
