import React from 'react';
import {
  View,
  FlatList,
  StyleScheet,
  Text,
  Image,
  Dimensions
} from 'react-native';

import colors from '../../config/colors';
import fonts from '../../styles/fonts';

const width = Dimensions.get('window').width;
const itemSize = width/4;

const category = [
  { id: '1', text: 'Breakfast', image: require('../../../assets/imgs/breakfast.png'), bg: colors.green },
  { id: '2', text: 'Lunch', image: require('../../../assets/imgs/lunch.png'), bg: colors.purple },
  { id: '3', text: 'Dinner', image: require('../../../assets/imgs/dinner.png'), bg: colors.red },
  { id: '4', text: 'Snack', image: require('../../../assets/imgs/dinner.png'), bg: colors.red }
];

export default function Category() {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}

      data={category}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => {
        return (
          <View style={{alignItems: 'center'}}>
            <View style={{
              width: itemSize,
              height: itemSize,
              backgroundColor: item.bg,
              borderRadius: 999,
              padding: 10
            }}>
              <Image
                source={item.image}
                style={{
                  width: '100%',
                  height: '100%'
                }}
              />
            </View>
            <Text style={fonts.Regular14}>{item.text}</Text>  
          </View>
        );
      }}

      ItemSeparatorComponent={
        () => <View style={{width: 10}} />
      }

      style={{overflow: 'visible'}}
    />
  );
}