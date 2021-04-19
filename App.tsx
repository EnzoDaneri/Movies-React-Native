import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { Navigation } from './src/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { FadeInScreen } from './src/screens/FadeInScreen';
import { GradientProvider } from './src/context/GradientContext';

const AppState = ({ children }: any) => {

  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
      </AppState>
      {/* <FadeInScreen /> */}
    </NavigationContainer>

  )
}