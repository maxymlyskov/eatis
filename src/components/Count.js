import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";

function Count({ price, paddingLeft, onPressMinus, onPressPlus }) {
  let [number, setNumber] = React.useState(1);
  let zero = null;
  if (0 < number) zero = 0;

  return (
    <View style={styles.price}>
      {price ? <Text style={styles.priceText}>{price}</Text> : null}
      <View style={[styles.number, { paddingLeft: paddingLeft }]}>
        <TouchableOpacity onPress={onPressMinus}>
          <MaterialCommunityIcons name="minus-box" size={30} />
        </TouchableOpacity>
        <View style={styles.numberText}>
          <Text>
            {zero}
            {number}
          </Text>
        </View>
        <TouchableOpacity onPress={onPressPlus}>
          <MaterialCommunityIcons name="plus-box" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  price: {
    paddingHorizontal: 15,
    flexDirection: "row",
  },
  priceText: {
    fontWeight: "bold",
  },

  number: {
    paddingLeft: Dimensions.get("window").width / 2.3,
    flexDirection: "row",
  },
  numberText: {
    paddingHorizontal: 5,
  },
});

export default Count;
