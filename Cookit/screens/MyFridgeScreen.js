import React, { Component } from 'react';
import { View, Image, StyleSheet, ScrollView, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import logo from '../assets/images/cauldron6.png'
import fruit from '../assets/images/fruit.png'
import veggie from '../assets/images/veggies2.png'
import meat from '../assets/images/meat3.png'
import spice from '../assets/images/spice.png'

class MyFridgeScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      categories: [
        { id: '0', name: 'veggies', pic: veggie },
        { id: '1', name: 'fruits', pic: fruit },
        { id: '2', name: 'meat', pic: meat },
        { id: '3', name: 'spice', pic: spice }
      ]
    }
  }

  render() {
    // onPress={() => this.props.navigation.navigate('RecipeViewScreen', {recipeId: item.id})}
    const renderCategories = ({ item }) => (
      <Image source={item.pic} style={{height: 50, width: 50, margin: 10}} /> 
    );

    return (
      <SafeAreaView style={styles.viewContainer}>
        <View style={styles.container}>
          <View style={styles.topSection}>
            <FlatList
              horizontal
              contentContainerStyle={styles.list}
              data={this.state.categories}
              renderItem={renderCategories}
              keyExtractor={item => item.id} />
          </View>
          <View style={styles.bottomSection}>
            <Image source={logo} style={{width: 100, height: 100}} />
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  topSection: {
    flex: 2
  },
  bottomSection: {
    flex: 1
  },
  list: {
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10
  }
})


export default MyFridgeScreen;
