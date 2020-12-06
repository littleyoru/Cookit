import React, { Component } from 'react'
import { StyleSheet, View, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import RecipeThumb from '../components/RecipeThumb'
import caprese from '../assets/mockdata/Caprese steak.jpg'
import cheese from '../assets/mockdata/Cheesesteak stuffed peppers.jpg'
import pancakes from '../assets/mockdata/Cornbread pancakes.jpg'
import soup from '../assets/mockdata/French onion soup with ham.jpg'
import muffins from '../assets/mockdata/Ham and Cheddar Cornbread muffins.jpg'
import wraps from '../assets/mockdata/Hibachi steak lettuce wraps.jpg'
import ragu from '../assets/mockdata/Lamb ragu.jpg'
import recipe1 from '../assets/mockdata/Recipe1.jpg'
import salad from '../assets/mockdata/Summer melon and ham salad.jpg'
import veggie from '../assets/mockdata/Veggie fried rice with crispy ham.jpg'


class RecipeListScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recipeList: [
        { name: 'Recipe1', pic: recipe1 },
        { name: 'Caprese steak', pic: caprese },
        { name: 'Cheesesteak stuffed peppers', pic: cheese },
        { name: 'Cornbread pancakes', pic: pancakes },
        { name: 'French onion soup with ham', pic: soup },
        { name: 'Hibachi steak lettuce wraps', pic: wraps },
        { name: 'Lamb ragu', pic: ragu },
        { name: 'Summer melon and ham salad', pic: salad },
        { name: 'Veggie fried rice with crispy ham', pic: veggie },
        { name: 'Ham and Cheddar Cornbread muffins', pic: muffins }
      ]
    }
  }
  render() {
    // const renderRecipes = (val) => {
    //   return (
    //     <RecipeThumb image={val.pic} />
    //   )
    // }
    let recipes = this.state.recipeList
    console.log('recipes[0].pic')
    return (
      <SafeAreaView style={styles.viewContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {/*this.state.recipeList.map(renderRecipes)*/}
          <RecipeThumb image={recipes[0].pic} name={recipes[0].name} />
          <RecipeThumb image={recipes[1].pic} name={recipes[1].name} />
          <RecipeThumb image={recipes[2].pic} name={recipes[2].name} />
          <RecipeThumb image={recipes[3].pic} name={recipes[3].name} />
          <RecipeThumb image={recipes[4].pic} name={recipes[4].name} />
          <RecipeThumb image={recipes[5].pic} name={recipes[5].name} />
          <RecipeThumb image={recipes[6].pic} name={recipes[6].name} />
          <RecipeThumb image={recipes[7].pic} name={recipes[7].name} />
          <RecipeThumb image={recipes[8].pic} name={recipes[8].name} />
          <RecipeThumb image={recipes[9].pic} name={recipes[9].name} />
          {/*<Image source={fruit} style={{height: 50, width: 50, margin: 10}} />
          <Image source={veggie} style={{height: 50, width: 50, margin: 10}} />
          <Image source={meat} style={{height: 50, width: 50, margin: 10}} />
          <Image source={spice} style={{height: 50, width: 50, margin: 10}} />*/}
        </ScrollView>
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
