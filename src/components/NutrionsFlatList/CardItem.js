import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";

import fonts from "../../styles/fonts";

const { width, height } = Dimensions.get('window');

export default function CardItem({ item }) {
  let ingredients;

  if ( item.ingredients !== '' ) {
    ingredients =
      <>
        <Text style={[ fonts.Regular14, styles.color ]}>{ item.ingredients }</Text>
        <Text style={[ fonts.Bold18, styles.color]}>
          { item.kcal }
          <Text style={[ fonts.semiBold14, styles.color]}> kcal</Text>
        </Text>
      </>
  } else {
    ingredients = 
    <>
      <Text style={[ fonts.Regular14, styles.color ]}>Recommended: { item.recommendation } kcal</Text>
      <View style={{ backgroundColor: '#fff', width: 35, height: 35, justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>
        <MaterialCommunityIcons
          name={"plus"}
          color={item.bg}
          size={25}
        />
      </View>
    </>
  }

  return (
    <View style={[styles.container, { backgroundColor: item.bg }]}>
      <Text style={[ fonts.Bold18, styles.color ]}>{ item.title }</Text>
      { ingredients }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height*0.25,
    width: width/3,
    borderRadius: 20,
    padding: 10
  },

  color: {
    color: 'white'
  }
})