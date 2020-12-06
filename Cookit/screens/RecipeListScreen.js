import React, { Component } from 'react'
import { StyleSheet, View, Image, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import RecipeViewScreen from './RecipeViewScreen'

import RecipeThumb from '../components/RecipeThumb'
import caprese from '../assets/mockdata/Caprese_steak.jpg'
import cheese from '../assets/mockdata/Cheesesteak_stuffed_peppers.jpg'
import pancakes from '../assets/mockdata/Cornbread_pancakes.jpg'
import soup from '../assets/mockdata/French_onion_soup_with_ham.jpg'
import muffins from '../assets/mockdata/Ham_and_Cheddar_Cornbread_muffins.jpg'
import wraps from '../assets/mockdata/Hibachi_steak_lettuce_wraps.jpg'
import ragu from '../assets/mockdata/LambRagu.jpg'
import recipe1 from '../assets/mockdata/Recipe1.jpg'
import salad from '../assets/mockdata/Summer_melon_and_ham_salad.jpg'
import veggie from '../assets/mockdata/Veggie_fried_rice_with_crispy_ham.jpg'


class RecipeListScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedRecipeId: -1,
      recipeList: [
        { id: '0', name: 'Recipe1', pic: recipe1 },
        { id: '1', name: 'Caprese steak', pic: caprese },
        { id: '2', name: 'Cheesesteak stuffed peppers', pic: cheese },
        { id: '3', name: 'Cornbread pancakes', pic: pancakes },
        { id: '4', name: 'French onion soup with ham', pic: soup },
        { id: '5', name: 'Hibachi steak lettuce wraps', pic: wraps },
        { id: '6', name: 'Lamb ragu', pic: ragu },
        { id: '7', name: 'Summer melon and ham salad', pic: salad },
        { id: '8', name: 'Veggie fried rice with crispy ham', pic: veggie },
        { id: '9', name: 'Ham and Cheddar Cornbread muffins', pic: muffins }
      ]
    }

    this.goToRecipeView = this.goToRecipeView.bind(this)
  }

  goToRecipeView () {
    this.setState({
      selectedRecipeId: 0
    });
    navigation.navigate('RecipeViewScreen');
  }

  render() {
    const renderRecipes = ({ item }) => ( 
      <RecipeThumb image={item.pic} name={item.name} onPress={() => navigation.navigate('RecipeViewScreen')} /> 
    );

    return (
      <SafeAreaView style={styles.viewContainer}>
        <FlatList
          data={this.state.recipeList}
          renderItem={renderRecipes}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.list}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  list: {
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10
  }
})

export default RecipeListScreen;
