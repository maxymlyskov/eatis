import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, { useState, useRef, useMemo, useCallback } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import colors from "../config/colors";
import { useGetInfoIngridientQuery } from "../store/recipes/infoById/ingredientApi";

function AppBottomSheet() {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(0);
  const infoIng = useGetInfoIngridientQuery(id);

  // ref
  const bottomSheetRef = useRef(BottomSheet);

  // variables
  const snapPoints = useMemo(() => ["80%", "100%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    bottomSheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  }, []);
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onClose={() => setIsOpen(false)}
        style={{
          borderColor: colors.grey,
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View style={{ marginRight: "auto" }}>
            <TouchableWithoutFeedback onPress={() => handleClosePress()}>
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
          <View style={{ marginRight: Dimensions.get("window").width / 2.9 }}>
            <Text
              style={{ fontSize: 30, fontFamily: "NunitoBold", padding: 10 }}
            >
              Details
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: colors.grey,
            borderBottomWidth: 1,
          }}
        />
        <BottomSheetView>
          <Text>WORkS</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppBottomSheet;
