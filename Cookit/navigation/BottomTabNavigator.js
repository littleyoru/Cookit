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
    <BottomTab.Navigator initialRouteName='MyFridge'>
      <BottomTab.Screen
        name='MyFridge'
        component={MyFridgeScreen}
        options={() => <TabBarIcon icon='fridge-outline' iconType='material-community' />}
      />
      <BottomTab.Screen
        name='Recipes'
        component={RecipesNavigator}
        options={() => <TabBarIcon icon='menu-book' iconType='material' />}
      />
      <BottomTab.Screen
        name='AddRecipe'
        component={AddRecipeScreen}
        options={() => <TabBarIcon icon='page-add' iconType='foundation' />}
      />
      <BottomTab.Screen
        name='Favs'
        component={RecipesNavigator}
        options={() => <TabBarIcon icon='bookmark' iconType='octicon' />}
      />
      <BottomTab.Screen
        name='Profile'
        component={UserProfileScreen}
        options={() => <TabBarIcon icon='person-outline' iconType='material' />}
      />
    </BottomTab.Navigator>
  )
}

function TabBarIcon() {
  return <Icon name={props.icon} type='props.iconType' fill='#FF7F00' style={styles.iconStyle} size={30} />;
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
