import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SavedScreen from '../screens/SavedScreen';

const Stack = createNativeStackNavigator();

export default function SavedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SavedScreen" component={SavedScreen} />
    </Stack.Navigator>
  );
}