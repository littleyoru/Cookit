import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class RecipeViewScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      id: 0,
      name: '',
      portions: 0,
      time: '',
      temperature: 0,
      ingredients: [],
      preparation: ''
    }

    this.goToSection = this.goToSection.bind(this)
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Portions</Text>
        <Text>4</Text>
        <Text style={styles.header}>Time</Text>
        <Text>45min</Text>
        <Text style={styles.header}>Temperature</Text>
        <Text>200</Text>
        <Text style={styles.header}>Ingredients</Text>
        <Text></Text>
        <Text style={styles.header}>Preparation</Text>
        <Text></Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {

  }
})

export default RecipeViewScreen;
