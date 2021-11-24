import React from 'react';
import { View, Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { getHeaderTitle } from '@react-navigation/elements';

import DiaryScreen from '../screens/DiaryScreen';

const Stack = createNativeStackNavigator();

function MyHeader({title, style}) {
  return (
    <View style={style}>
      <Text>{title}</Text>
    </View>
  );
}

export default function DiaryStack() {
  return (
    <Stack.Navigator
      screenOptions={(route) => ({
        header: ({ navigation, route, options }) => {
          const title = getHeaderTitle(options, route.name);

          return <MyHeader title={title} style={options.headerStyle} />;
        },

        headerStyle: {
          height: 80,
          justifyContent: 'center'
        },
      })}
    >
      <Stack.Screen name="DiaryScreen" component={DiaryScreen} />
    </Stack.Navigator>
  );
}