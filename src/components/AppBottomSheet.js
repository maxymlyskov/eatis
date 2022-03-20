import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import React, { useState, useRef, useMemo, useCallback } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import IngridientsCard from "./IngridientsCard";
import { useGetInfoIngridientQuery } from "../store/recipes/infoById/ingredientApi";

function AppBottomSheet(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(0);
  const info = useGetInfoIngridientQuery(id);

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
        {info.data && (
          <IngridientsCard
            title={capitalizeFirstLetter(info.data.name)}
            preSubTitle="100g"
            image={imageURL + info.data.image}
            style={{ fontSize: 30 }}
          />
        )}
        <BottomSheetScrollView>
          <View>
            {info.data && (
              <>
                <FlatList
                  data={info.data.nutrition.nutrients}
                  keyExtractor={(item, i) => i}
                  renderItem={({ item }) => (
                    <IngridientsCard
                      title={item.name}
                      subTitle={`${item.amount} ${item.unit}`}
                    />
                  )}
                  style={{
                    borderWidth: 1,
                    borderColor: "white",
                    borderRadius: 20,
                    // padding: 10
                  }}
                  contentContainerStyle={{
                    marginTop: 20,
                    marginBottom: 20,
                  }}
                />
              </>
            )}
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppBottomSheet;
