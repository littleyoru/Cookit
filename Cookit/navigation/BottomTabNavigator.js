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
          tabBarIcon: () => <TabBarIcon name='fridge-outline' iconType='material-community' tintColor='#FF7F00' />
        }}
      />
      <BottomTab.Screen
        name='Recipes'
        component={RecipesNavigator}
        options={{
          tabBarIcon: () => <TabBarIcon name='menu-book' iconType='material' />
        }}
      />
      <BottomTab.Screen
        name='AddRecipe'
        component={AddRecipeScreen}
        options={{
          tabBarIcon: () => <TabBarIcon name='page-add' iconType='foundation' />
        }}
      />
      <BottomTab.Screen
        name='Favs'
        component={RecipesNavigator}
        options={{
          tabBarIcon: () => <TabBarIcon name='bookmark' iconType='octicon' />
        }}
      />
      <BottomTab.Screen
        name='Profile'
        component={UserProfileScreen}
        options={{
          tabBarIcon: () => <TabBarIcon name='person-outline' iconType='material' />
        }}
      />
    </BottomTab.Navigator>
  )
}

function TabBarIcon(props) {
  console.log('icon props ', props)
  return <Icon name={props.name} type='props.iconType' style={styles.iconStyle} size={30} />;
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
