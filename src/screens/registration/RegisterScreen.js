import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
  Text,
  FlatList
} from "react-native";

import GoalScreen from "./GoalScreen";
import GenderScreen from "./GenderScreen";
import BirthDateScreen from "./BirthDateScreen";
import HeightScreen from "./HeightScreen";
import WeightScreen from "./WeightScreen";
import EndingScreen from "./EndingScreen";

import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";

import colors from "../../config/colors";
import fonts from "../../styles/fonts";

const width = Dimensions.get("window").width;
const slides = [
  { id: '1', title: "What`s your goal?", comp: <GoalScreen /> },
  { id: '2', title: "Choose your gender", comp: <GenderScreen /> },
  { id: '3', title: "Choose your birth date", comp: <BirthDateScreen /> },
  { id: '4', title: "Write your height", comp: <HeightScreen /> },
  { id: '5', title: "Write your weight", comp: <WeightScreen /> },
  { id: '6', title: "Let's end it", subTitle: '', comp: <EndingScreen /> }
];

function RegisterScreen() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const goBack = () => {
    const nextSlideIndex = currentSlideIndex - 1;
    if (nextSlideIndex >= 0) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  return (
    <Screen>
      <View style={{flex: 1}}>
        <FlatList
          data={slides}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flex: 1,
                  width: width,
                  paddingHorizontal: 20
                }}
              >
                <View style={{flex: 1, justifyContent: "space-around"}}>
                  <View style={styles.textContainer}>
                    <Text style={[fonts.Bold24, styles.text]}>{ item.title }</Text>
                  </View>
                  { item.comp }
                  <View style={styles.bottom}>
                    <Text style={[fonts.Regular16, styles.bottomText]}>
                      We’ll use this to calculates and to create better recomendations for you.
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}

          onMomentumScrollEnd={updateCurrentSlideIndex}
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
          snapToInterval={width}
          scrollEnabled={false}
          ref={ref}
        />
      </View>

      <View style={styles.row}>
        <View style={{flex: 1}}>
          <TouchableWithoutFeedback onPress={goBack}>
            <Text style={[fonts.Bold24, styles.backB]}>Back</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={{flex: 2}}>
          <TouchableWithoutFeedback onPress={goToNextSlide}>
            <Text style={[fonts.Bold24, styles.nextB]}>Next</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 20
  },

  backB: {
    flex: 1,
    color: colors.grey,
    textAlign: "left",
    textAlignVertical: "center"
  },

  nextB: {
    color: '#fff',
    backgroundColor: colors.green,
    width: '100%',
    paddingVertical: 15,
    textAlign: 'center',
    borderRadius: 10
  },

  bottom: {
    justifyContent: "center",
    alignItems: "center",
  },

  bottomText: {
    color: colors.grey,
    textAlign: 'center'
  }
});

export default RegisterScreen;
