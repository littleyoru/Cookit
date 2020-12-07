import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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

    // this.goToSection = this.goToSection.bind(this)
  }

  render () {
    return (
      <SafeAreaView style={styles.viewContainer}>
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.list}>
            <View style={styles.topSection}>
              <View style={styles.topInfo}>
                <Text style={styles.label}>Portions</Text>
                <Text style={styles.text}>2</Text>
              </View>
              <View style={styles.topInfo}>
                <Text style={styles.label}>Time</Text>
                <Text style={styles.text}>15min</Text>
              </View>
              <View style={styles.topInfo}>
                <Text style={styles.label}>Temperature</Text>
                <Text style={styles.text}>None</Text>
              </View>
              <View style={styles.topInfo}>
                <Text style={styles.label}>Difficulty</Text>
                <Text style={styles.text}>Easy</Text>
              </View>
            </View>
            <Text style={styles.header}>Ingredients</Text>
            <Text>Sunflower oil, to shallow-fry
            14 cooked prawns, peeled, halved, tails and shells reserved
            2 cups loosely packed leftover Asian herbs (we used Thai basil, Vietnamese mint and coriander), leaves picked
            1 green mango, shredded (we used a julienne peeler)
            Chopped salted roasted cashews and baby red cress (optional), to serve
            CHILLI DRESSING
            4 long red chillies, seeds removed from half, chopped
            1/2 garlic clove
            2cm piece (10g) ginger, chopped
            1 tsp finely grated palm sugar
            1 Asian (red) eschalot, chopped
            2 tbs fish sauce
            Juice of 2 limes, plus extra lime cheeks to serve</Text>
            <Text style={styles.header}>Preparation</Text>
            <Text>1. For the chilli dressing, using a mortar and pestle, pound chillies, garlic, ginger, sugar and eschalot to a paste. Stir through fish sauce and lime juice, and set aside (dressing can be stored, chilled in an airtight container, for up to 5 days).
            2. Heat 2cm oil in a frypan over high heat. In 2 batches, shallow-fry prawn tails and shells for 1-2 minutes or until crispy, then remove with a slotted spoon and drain on paper towel. When cool enough to handle, coarsely crumble.
            3. Arrange herbs, mango, prawn and crumbled tails and shells on a serving platter. Scatter with cashews and baby red cress, if using, and drizzle with dressing. Serve immediately with lime cheeks.</Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    // paddingVertical: 8,
  },
  list: {
    justifyContent: 'center',
    paddingVertical: 8
  },
  topSection: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  topInfo: {
    padding: 8,
    backgroundColor: '#D3D3D3' // '#3C3C3C'
  },
  header: {
    color: '#FF7F00',
    fontWeight: '700',
    marginTop: 16
  },
  label: {
    color: '#FF7F00'
  },
  text: {
    fontWeight: '700',
    textAlign: 'center'
  }
})

export default RecipeViewScreen;
