import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const GoldenTheme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      primary: '#D4AF37'
  }
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen name="Authentication" component={AuthenticationScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer
      // linking={LinkingConfiguration}
      theme={GoldenTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}