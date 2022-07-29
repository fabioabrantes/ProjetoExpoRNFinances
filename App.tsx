import React from 'react';
import {ThemeProvider} from 'styled-components';
import { ActivityIndicator,StyleSheet,View} from "react-native";

import {
  useFonts, 
  Poppins_400Regular, 
  Poppins_700Bold, 
  Poppins_500Medium
} from '@expo-google-fonts/poppins';

import {Dashboard} from './src/pages/Dashboard'

import theme from './src/global/styles/theme';

export default function App() {
  const [fontsCarregados] = useFonts({
    Poppins_400Regular, 
    Poppins_700Bold, 
    Poppins_500Medium
  });
  if (!fontsCarregados){
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#00ff00"/>
      </View>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});