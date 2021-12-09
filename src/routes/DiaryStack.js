import React from 'react';
import { View, Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { getHeaderTitle } from '@react-navigation/elements';

import DiaryScreen from '../screens/DiaryScreen';

import Screen from '../components/Screen';

const Stack = createNativeStackNavigator();

function MyHeader({title, style}) {
  return (
    <Screen style={style}>

    </Screen>
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
          flex: 0.07,
          justifyContent: 'center',
        },
      })}
    >
      <Stack.Screen name="MyDiary" component={DiaryScreen} />
    </Stack.Navigator>
  );
}