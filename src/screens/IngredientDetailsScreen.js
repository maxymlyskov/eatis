import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Animated,
  Text,
} from "react-native";
import Screen from "../components/Screen";
import AnimatedHeader from "../components/AnimatedHeader";
import IngridientsCard from "../components/IngridientsCard";

import { imageURL } from "../store/constants";
import { useGetInfoIngridientQuery } from "../store/recipes/infoById/ingredientApi";
import colors from "../config/colors";

function IngredientDetailsScreen({ route, navigation }) {
  const ingridient = route.params;
  const { data } = useGetInfoIngridientQuery(ingridient);
  console.log(data);
  const offset = React.useRef(new Animated.Value(0)).current;

  const { width, height } = Dimensions.get("window");
  const HEADER_HEIGHT = height / 4;
  // const image = imageURL + data.image;
  return (
    <Screen>
      {data ? (
        <>
          <AnimatedHeader
            animatedValue={offset}
            img={imageURL + data.image}
            navigation={navigation}
          />
          <Animated.ScrollView
            style={{
              flex: 1,
              backgroundColor: colors.white,
            }}
            contentContainerStyle={{
              paddingTop: HEADER_HEIGHT + 150,
              paddingHorizontal: 10,
            }}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={1}
            overScrollMode={"never"}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: offset } } }],
              { useNativeDriver: false }
            )}
          >
            <View style={styles.title}>
              <Text style={styles.titleText}>{data.name}</Text>
              <View
                style={{
                  marginLeft: "auto",
                }}
              >
                <Text style={styles.consistency}>
                  {"\u25CF"} {data.aisle}
                  {"\n"}
                  {"\u25CF"} {data.consistency}
                </Text>
              </View>
            </View>
            {data.nutrition && (
              <FlatList
                data={data.nutrition.nutrients}
                keyExtractor={(item, i) => i}
                renderItem={({ item }) => (
                  <IngridientsCard
                    title={item.name}
                    subTitle={`${item.amount} ${item.unit}`}
                  />
                )}
                style={{
                  borderWidth: 1,
                  borderColor: colors.green,
                  borderRadius: 20,
                  // padding: 10
                }}
                contentContainerStyle={{
                  marginTop: 20,
                  marginBottom: 20,
                }}
              />
            )}
          </Animated.ScrollView>
        </>
      ) : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  titleText: {
    color: colors.black,
    fontFamily: "NunitoBold",
    fontSize: 45,
  },
  consistency: {
    color: colors.green,
    fontFamily: "NunitoBold",
    fontSize: 20,
  },
});

export default IngredientDetailsScreen;
