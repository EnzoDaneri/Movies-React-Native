import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { Navigation } from './src/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
Navigation
export const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>

  )
}