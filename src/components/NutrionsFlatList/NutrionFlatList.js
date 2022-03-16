import React from "react";
import { 
  View,
  FlatList
} from 'react-native';

import CardItem from "./CardItem";

import colors from '../../config/colors';

const nutrions = [
  { id: '1', title: 'Breakfast', image: require('../../../assets/imgs/breakfast.png'), bg: colors.green, ingredients: 'Egg,\nToast,\nFriedBacon...', kcal: '375'},
  { id: '2', title: 'Lunch', image: require('../../../assets/imgs/lunch.png'), bg: colors.purple, ingredients: 'Fried chicken,\nAvocado,\nTomatos...', kcal: '749'},
  { id: '3', title: 'Dinner', image: require('../../../assets/imgs/dinner.png'), bg: colors.red, ingredients: '', kcal: '', recommendation: '608'},
];

export default function NutrionsFlatList({ navigation }) {
  return (
    <FlatList 
      horizontal
      bounces={false}
      showsHorizontalScrollIndicator={false}

      data={nutrions}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => {
        return (
          <CardItem navigation={navigation} item={item}/>
        );
      }}

      style={{
        flex: 1,
        overflow: "visible"
      }}

      ItemSeparatorComponent={
        () => <View style={{width: 10}} />
      }
    />
  );
}