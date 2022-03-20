import React, { useState, useRef } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

function TestScreen(props) {
  const sheetRef = useRef(BottomSheet);
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = ["20%"];

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose
        onClose={() => setIsOpen(false)}
      >
        <BottomSheetView style={{ backgroundColor: "green" }}>
          <Text>hello</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "gray" },
  text: {
    fontSize: 15,
  },
});

export default TestScreen;
