import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from '../components/Screen';

import colors from '../config/colors';
import fonts from '../styles/fonts';

export default function ProfileScreen() {
  const data = [
    { type: 'Goal', info: 'Gain weight' },
    { type: 'Gendre', info: 'Male' },
    { type: 'Age', info: '17' },
    { type: '', info: '' },
    { type: '', info: '' },
    { type: '', info: '' },
    { type: '', info: '' },
    { type: '', info: '' },
    { type: '', info: '' },
    { type: '', info: '' },
  ]

  return (
    <Screen style={{backgroundColor: colors.green}}>
      <ScrollView>
      <View style={{padding: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <MaterialCommunityIcons
          size={24}
          name="cog-outline"
          color={'#fff'}
        />

        <MaterialCommunityIcons
          size={24}
          name="share-variant"
          color={'#fff'}
        />
      </View>

        <View style={{marginTop: 50, borderTopLeftRadius: 20, borderTopRightRadius: 20, alignItems: 'center', position: 'relative', backgroundColor: '#fff', paddingHorizontal: 20}}>
          <View style={{position: 'relative', width: '100%'}}>
            <View style={{
              position: 'absolute',
              top: -50,
              left: 0,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <View style={{
                width: 100,
                height: 100,
                borderWidth: 1,
                borderColor: colors.grey,
                borderRadius: 15,
              }}>
                <Image
                  source={require('../../assets/imgs/cookies.png')}
                  style={{width: 100, height: '100%'}}
                />
              </View>
            </View>

            <View style={{paddingTop: 50}}>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10}}>
                <Text style={fonts.Bold24}>Denlich</Text>
                <MaterialCommunityIcons
                  size={24}
                  name="chevron-down"
                  color={'#000'}
                />
              </View>

              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text style={fonts.Bold18}>Current weight</Text>
                  <Text style={fonts.Bold24}>70 kg</Text>
                </View>

                <View 
                  style={{
                    borderWidth: 1,
                    borderColor: colors.grey
                  }} 
                />

                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text style={fonts.Bold18}>Current weight</Text>
                  <Text style={fonts.Bold24}>70 kg</Text>
                </View>
              </View>

              <View 
                style={{
                  height: 275,
                  backgroundColor: '#fff',
                  shadowColor: '#000',
                  elevation: 20,
                  borderRadius: 20,
                  marginVertical: 20,
                  shadowOpacity: 0.2
                }}
              />

              <View style={{}}>
                <Text style={[fonts.Bold24, {marginVertical: 20}]}>Details</Text>

                {data.map((_, i) => {
                  return (
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}} key={i.toString()}>
                      <Text style={fonts.Bold18}>{ _.type }</Text>
                      <Text style={fonts.Regular18}>{ _.info }</Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const style = StyleSheet.create({})