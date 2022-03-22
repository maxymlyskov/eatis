import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  Text,
} from "react-native";
import colors from "../config/colors";

function BottomSheetHeader({ onPress, title, onPressClear, color }) {
  return (
    <View>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View>
          <TouchableWithoutFeedback onPress={onPress}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: "NunitoBold",
                padding: 10,
                color: colors.grey,
              }}
            >
              Cancel
            </Text>
          </TouchableWithoutFeedback>
        </View>
        <View>
          <Text style={{ fontSize: 30, fontFamily: "NunitoBold", padding: 10 }}>
            {title}
          </Text>
        </View>
        <View>
          <TouchableWithoutFeedback onPress={onPressClear}>
            <Text style={[styles.clearText, color]}>Clear</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: colors.grey,
          borderBottomWidth: 1,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  clearText: {
    fontSize: 15,
    fontFamily: "NunitoBold",
    padding: 10,
    color: "white",
  },
});

export default BottomSheetHeader;
