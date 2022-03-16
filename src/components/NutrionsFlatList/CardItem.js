import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";

import fonts from "../../styles/fonts";

const { width, height } = Dimensions.get('window');

export default function CardItem({ navigation, item }) {
  let ingredients;

  if ( item.ingredients !== '' ) {
    ingredients =
      <View>
        <Text style={[ fonts.Regular14, styles.color, styles.mainText ]}>{ item.ingredients }</Text>
        <Text style={[ fonts.Bold18, styles.color]}>
          { item.kcal }
          <Text style={[ fonts.semiBold14, styles.color]}> kcal</Text>
        </Text>
      </View>
  } else {
    ingredients = 
    <View>
      <Text style={[ fonts.Regular14, styles.color, styles.mainText ]}>Recommended: { item.recommendation } kcal</Text>
      <View style={{ backgroundColor: '#fff', width: 35, height: 35, justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>
        <MaterialCommunityIcons
          name={"plus"}
          color={item.bg}
          size={25}
        />
      </View>
    </View>
  }

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate("PluseScreen")}>
      <View style={{alignItems: 'center'}}>
        <View style={{
          position: 'absolute',
          alignItems: 'center',
          zIndex: 999
        }}>
          <View style={{
            width: width/4,
            height: 100,
            backgroundColor: 'rgba(255, 255, 255, .25)',
            padding: 10,
            borderRadius: 10000
          }}>
            <Image 
              source={item.image}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'center'
              }}
            />
          </View>
        </View>
        <View style={[styles.container, { backgroundColor: item.bg }]}>
          <View style={styles.content}>
            <Text style={[ fonts.Bold18, styles.color ]}>{ item.title }</Text>
            { ingredients }
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height*0.25,
    width: width/3,
    borderRadius: 20,
    padding: 10,
    marginTop: 50
  },

  color: {
    color: 'white'
  },

  mainText: {
    paddingVertical: 10
  },

  content: {
    marginTop: 40
  }
})