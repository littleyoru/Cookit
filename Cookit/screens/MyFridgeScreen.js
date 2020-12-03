import React, { Component } from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import logo from '../assets/images/cauldron6.png'
import fruit from '../assets/images/fruit.png'
import veggie from '../assets/images/veggies2.png'
import meat from '../assets/images/meat3.png'
import spice from '../assets/images/spice.png'

class MyFridgeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal contentContainerStyle={styles.list}>
          <Image source={fruit} style={{height: 50, width: 50, margin: 10}} />
          <Image source={veggie} style={{height: 50, width: 50, margin: 10}} />
          <Image source={meat} style={{height: 50, width: 50, margin: 10}} />
          <Image source={spice} style={{height: 50, width: 50, margin: 10}} />
      </ScrollView>
        <Image source={logo} style={{width: 100, height: 100}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10
  }
})


export default MyFridgeScreen;
