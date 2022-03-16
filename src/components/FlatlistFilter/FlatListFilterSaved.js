import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Dimensions, Animated } from "react-native";

import Paginator from "./Paginator";
import Plan from "./Plan";
import Meals from "./Meals";
import SavedRecipes from "./SavedRecipes";
import SavedDayPlannerScreen from "../../screens/SavedDayPlannerScreen";
import SavedWeekPlannerScreen from "../../screens/SavedWeekPlannerScreen";

const width = Dimensions.get("window").width;

export default function FlatListFilterSaved({ data, navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);
  const pan = useRef(new Animated.ValueXY()).current;

  const scrollToIndex = (i) => {
    slidesRef.current.scrollToIndex({ animated: true, index: i });
  };

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const preFilters = [
    {
      id: "1",
      text: "Recipes",
      component: <SavedRecipes data={data} navigation={navigation} />,
    },
    {
      id: "2",
      text: "For Day",
      component: <SavedDayPlannerScreen navigation={navigation} />,
    },
    {
      id: "3",
      text: "For Week",
      component: <SavedWeekPlannerScreen navigation={navigation} />,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={{ marginVertical: 20 }}>
        <Paginator
          width={width - 40}
          data={preFilters}
          pan={pan}
          scrollToIndex={scrollToIndex}
        />
      </View>

      <Animated.FlatList
        data={preFilters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={{ flex: 1, width: width - 40 }}>{item.component}</View>
          );
        }}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        paddingEnabled
        snapToInterval={width}
        decelerationRate={"fast"}
        removeClippedSubviews={true}
        disableIntervalMomentum={true}
        scrollEnabled={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: pan.x } } }],
          {
            useNativeDriver: false,
          }
        )}
        onViewableItemsChanged={viewableItemsChanged}
        ref={slidesRef}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    justifyContent: "center",
  },
});
