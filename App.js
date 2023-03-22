import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import StackNavigator from './src/Navigators/StackNavigator';
import COLOR from './src/Services/Constants/COLORS';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      {/* <StatusBar
        backgroundColor={COLOR.yellow}
      /> */}
      <StackNavigator />
    </SafeAreaProvider>
  );
}
