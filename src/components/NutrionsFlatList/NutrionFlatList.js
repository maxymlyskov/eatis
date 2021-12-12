import React from "react";
import { View, FlatList } from 'react-native';

import CardItem from "./CardItem";

import colors from '../../config/colors';

const nutrions = [
  { id: '1', title: 'Breakfast', bg: colors.green, ingredients: 'Egg,\nToast,\nFriedBacon...', kcal: '375'},
  { id: '2', title: 'Lunch', bg: colors.purple, ingredients: 'Fried chicken,\nAvocado,\nTomatos...', kcal: '749'},
  { id: '3', title: 'Dinner', bg: colors.red, ingredients: '', kcal: '', recommendation: '608'},
];

export default function NutrionsFlatList() {
  return (
    <FlatList 
      horizontal
      bounces={false}
      showsHorizontalScrollIndicator={false}

      data={nutrions}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => {
        return (
          <CardItem item={item}/>
        );
      }}

      style={{flex: 1}}

      ItemSeparatorComponent={
        () => <View style={{width: 5}} />
      }
    />
  );
}