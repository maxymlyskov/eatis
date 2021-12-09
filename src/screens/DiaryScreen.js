import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';

import Screen from '../components/Screen';
import MyCalendar from '../components/Calendar';
import InfoCard from '../components/InfoCard/InfoCard';

import styles from '../config/styles';
import fonts from '../styles/fonts';

export default function DiartScreen({ navigation, route}) {
  return (
    <Screen style={{paddingHorizontal: 20}}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{route.name}</Text>
      </View>

      {/* <MyCalendar /> */}

      
      <View style={{flex: .4, marginVertical: 20}}>
        <InfoCard />
      </View>

      <Text style={fonts.Bold24}>Nutrion</Text>

      <View>
        
      </View>
    </Screen>
  );
}