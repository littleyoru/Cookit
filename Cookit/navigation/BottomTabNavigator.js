import React from 'react';
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements'

import RecipeListScreen from '../screens/RecipeListScreen'
import RecipeViewScreen from '../screens/RecipeViewScreen'
import AddRecipeScreen from '../screens/AddRecipeScreen'
import UserProfileScreen from '../screens/UserProfileScreen'
import MyFridgeScreen from '../screens/MyFridgeScreen'

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName='MyFridge'
      tabBarOptions={{activeTintColor: '#FF7F00', inactiveTintColor: 'gray'}}>
      <BottomTab.Screen
        name='MyFridge'
        component={MyFridgeScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='fridge-outline' color={color} iconType='material-community' />
        }}
      />
      <BottomTab.Screen
        name='Recipes'
        component={RecipesNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='book-open' color={color} iconType='font-awesome-5' />
        }}
      />
      <BottomTab.Screen
        name='AddRecipe'
        component={AddRecipeScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='addfile' color={color} iconType='antdesign' />
        }}
      />
      <BottomTab.Screen
        name='Favs'
        component={RecipesNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='bookmark' color={color} iconType='octicon' />
        }}
      />
      <BottomTab.Screen
        name='Profile'
        component={UserProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='person-outline' color={color} iconType='material' />
        }}
      />
    </BottomTab.Navigator>
  )
}

function TabBarIcon(props) {
  console.log('icon props ', props)
  return <Icon name={props.name} type='props.iconType' color={props.color} style={styles.iconStyle} size={30} />;
}

const RecipesStack = createStackNavigator();

function RecipesNavigator() {
  return (
    <RecipesStack.Navigator>
      <RecipesStack.Screen
        name='RecipeListScreen'
        component={RecipeListScreen}
        options={{ headerTitle: 'Recipes' }}
      />
      <RecipesStack.Screen
        name='RecipeViewScreen'
        component={RecipeViewScreen}
        options={{ headerTitle: 'Recipe view' }}
      />
    </RecipesStack.Navigator>
  )
}

const styles = StyleSheet.create({
  iconStyle: {
    marginBottom: 10
  }
})
