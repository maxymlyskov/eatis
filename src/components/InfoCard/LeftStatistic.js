import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import fonts from '../../styles/fonts';
import colors from '../../config/colors';

export default function LeftStatistic({ source, title, statisticText }) {
  return (
    <View style={styles.container}>
      <Image 
        source={source}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={[fonts.semiBold14, {color: colors.grey}]}>{ title }</Text>
        <Text style={fonts.semiBold18}>{ statisticText }</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center',
  },

  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10
  },

  image: {
    width: 32,
    height: 32
  }
});