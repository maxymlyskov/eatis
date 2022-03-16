import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';

import RecipeCard from '../../components/RecipeCard';

export default function Meals({ data, navigation }) {
  return (
    <View>
      <FlatList
          data={data.results}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <RecipeCard
              title={item.title}
              image={{ uri: item.image }}
              onPress={() => navigation.navigate("RecipeDetailsScreen", item)}
            />
          )}

          showsVerticalScrollIndicator={false}
        />
    </View>
  );
}