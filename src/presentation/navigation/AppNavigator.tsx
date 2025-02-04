/**
 * @file AppNavigator.tsx
 * @description Este archivo define la navegación principal de la aplicación usando un Stack Navigator.
 * @copyright (c) 2025 - Santiago Novoa
 * @license MIT
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CryptoListScreen from '../screens/CryptoListScreen';
import CryptoDetailScreen from '../screens/CryptoDetailScreen';

// Define el Stack Navigator para la navegación de la aplicación.
const Stack = createStackNavigator<ReactNavigation.RootParamList>();

// Define el componente de navegación principal y define las rutas de la aplicación.
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
          title: 'Criptomonedas', // Título de la pantalla
        }} name="CryptoList" component={CryptoListScreen} />
        <Stack.Screen options={{
          title: 'Información detallada', // Título de la pantalla
        }}
          name="CryptoDetail" component={CryptoDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;