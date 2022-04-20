import React from "react";
import { LineChart } from "react-native-chart-kit";
import { View, StyleSheet, Dimensions } from "react-native";
import colors from "../config/colors";

const screenWidth = Dimensions.get("window").width * 0.9;

const chartConfig = {
  backgroundGradientFrom: "white",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "white",
  fillShadowGradientToOpacity: 0.7,
  fillShadowGradientFromOffset: 0.4,
  fillShadowGradientToOffset: 0.73,
  fillShadowGradientFromOpacity: 0.13,
  fillShadowGradientTo: "white",
  backgroundColor: "white",
  color: (opacity = 1) => `rgba(125, 191, 122, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.4,

  useShadowColorFromDataset: false, // optional
  propsForDots: {
    r: "6",
    strokeWidth: "3",
    stroke: colors.green,
    fill: "white",
  },
  propsForHorizontalLabels: {
    fill: colors.green,
    strokeWidth: 0.8,
  },
  propsForVerticalLabels: {
    fill: colors.sgreen,
    strokeLinecap: "butt",
  },
  decimalPlaces: 1,
};

function Graphics({ dataFor }) {
  const data = {
    datasets: [
      {
        data: dataFor,

        color: (opacity = 1) => `rgba(125, 191, 122, ${opacity})`, // optional
        strokeWidth: 5, // optional
      },
    ],
    legend: ["WEIGHT GRAPHICS"], // optional
  };
  return (
    <View style={styles.container}>
      <LineChart
        data={data}
        yAxisSuffix=" kg "
        withVerticalLabels={false}
        width={screenWidth}
        height={250}
        style={{
          borderRadius: 25,
          margin: 3,
          padding: 4,
          backgroundColor: "#fff",
          shadowColor: "#000",
          elevation: 20,
          borderRadius: 20,
          marginVertical: 20,
          shadowOpacity: 0.2,
        }}
        chartConfig={chartConfig}
        bezier
        withVerticalLines={false}
        withHorizontalLines={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Graphics;
