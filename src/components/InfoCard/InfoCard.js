import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import CircularProgress from 'react-native-circular-progress-indicator';

import colors from "../../config/colors";
import fonts from "../../styles/fonts";
import InfoItem from "./InfoItem";

export default function InfoCard() {
  return (
    <>
      <View style={styles.card}>
        <View style={styles.statistic}>
          <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
            <View style={styles.container}>
              <Image 
              source={require('../../../assets/imgs/cookies.png')}
              style={styles.image}
              />
              <View style={styles.textContainer}>
                <Text style={fonts.semiBold14Grey}>Eaten</Text>
                <Text style={fonts.semiBold18}>1124</Text>
              </View>
            </View>

            <View style={styles.container}>
              <Image 
              source={require('../../../assets/imgs/cardio.png')}
              style={styles.image}
              />
              <View style={styles.textContainer}>
                <Text style={fonts.semiBold14Grey}>Burned</Text>
                <Text style={fonts.semiBold18}>281</Text>
              </View>
            </View>
          </View>

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
            <CircularProgress
              value={1124}
              maxValue={2026}
              textColor={colors.green}
              textStyle={fonts.Bold24}
              titleStyle={fonts.semiBold14Grey}
              titleColor={colors.grey}
              title={'kcal eaten'}

              radius={70}

              inActiveStrokeColor={colors.green}
              inActiveStrokeOpacity={0.1}
            />
          </View>
        </View>

        {/* Protein, Card, Fat - Info */}

        <View style={{ flex: .3, flexDirection: 'row', marginTop: 10 }}>
          <View style={{flex: 1}}>
            <InfoItem title={"Protein"} max={55} eaten={40} />
          </View>
          <View style={{flex: 1, marginHorizontal: 30}}>
            <InfoItem title={"Carbs"} max={266} eaten={195} />
          </View>
          <View style={{flex: 1}}>
            <InfoItem title={"Fat"} max={40} eaten={38} />
          </View>
        </View>

      </View>
      <View style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 0
      }}>
        <View 
        style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        elevation: 25,
        borderRadius: 20,
        opacity: 0.5
        }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    borderRadius: 20,
    padding: 20,
    zIndex: 1
  },

  statistic: {
    flex: .7,
    flexDirection: 'row',
  },

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
})