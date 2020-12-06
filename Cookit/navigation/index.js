import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen'
import BottomTabNavigator from './BottomTabNavigator'

const OrangeTheme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      primary: '#FF7F00'
  }
}

const Stack = createStackNavigator();

function RootNavigator() {
  let hasToken = true
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {hasToken ? (
        <Stack.Screen name="Home" component={BottomTabNavigator} />) :
        (<Stack.Screen name="Authentication" component={LoginScreen} options={{ title: 'Please login or register!' }} />)
      }
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer
      // linking={LinkingConfiguration}
      theme={OrangeTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}