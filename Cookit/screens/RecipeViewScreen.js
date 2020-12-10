import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, ScrollView, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements'

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
    let ingredients = [
      { id: '0', name: 'Sunflower oil, to shallow-fry' },
      { id: '1', name: '14 cooked prawns, peeled, halved, tails and shells reserved'},
      { id: '2', name: '2 cups loosely packed leftover Asian herbs (we used Thai basil, Vietnamese mint and coriander), leaves picked'},
      { id: '3', name: '1 green mango, shredded (we used a julienne peeler)'},
      { id: '4', name: 'Chopped salted roasted cashews and baby red cress (optional), to serve'},
      { id: '5', name: 'CHILLI DRESSING'},
      { id: '6', name: '4 long red chillies, seeds removed from half, chopped'},
      { id: '7', name: '1/2 garlic clove'},
      { id: '8', name: '2cm piece (10g) ginger, chopped'},
      { id: '9', name: '1 tsp finely grated palm sugar'},
      { id: '10', name: '1 Asian (red) eschalot, chopped'},
      { id: '11', name: '2 tbs fish sauce'},
      { id: '12', name: 'Juice of 2 limes, plus extra lime cheeks to serve'}
    ]

    const renderIngredient = ({ item }) => (
      <View style={{flexDirection: 'row'}}>
        <Text>{'\u2022' + ' '}</Text>
        <Text style={{flex: 1, paddingLeft: 4}}>{item.name}</Text>
      </View>
    );

    return (
      <SafeAreaView style={styles.viewContainer}>
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.list}>
            <View style={styles.topSection}>
              <View style={styles.topInfo}>
                <Icon name='people' type='material' color='#FF7F00' style={styles.iconStyle} size={30} />
                <Text style={styles.text}>2</Text>
              </View>
              <View style={styles.topInfo}>
                <Icon name='timer' type='material' color='#FF7F00' style={styles.iconStyle} size={30} />
                <Text style={styles.text}>15min</Text>
              </View>
              <View style={styles.topInfo}>
                <Icon name='thermometer' type='font-awesome' color='#FF7F00' style={styles.iconStyle} size={30} />
                <Text style={styles.text}>None</Text>
              </View>
              <View style={styles.topInfo}>
                <Icon name='gauge' type='entypo' color='#FF7F00' style={styles.iconStyle} size={30} />
                <Text style={styles.text}>Easy</Text>
              </View>
            </View>
            <View style={styles.separator} />
            <Text style={styles.header}>Ingredients</Text>
            {/*<Text>Sunflower oil, to shallow-fry
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
            Juice of 2 limes, plus extra lime cheeks to serve</Text>*/}
            <FlatList
              data={ingredients}
              renderItem={renderIngredient}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.list}
            />
            <View style={styles.separator} />
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
    // backgroundColor: '#D3D3D3' // '#3C3C3C'
  },
  header: {
    color: '#FF7F00',
    fontWeight: '700',
    marginBottom: 4
  },
  label: {
    color: '#FF7F00'
  },
  text: {
    fontWeight: '700',
    textAlign: 'center'
  },
  iconStyle: {
    marginBottom: 4
  },
  separator: {
    marginVertical: 20,
    height: 1,
    // width: '90%',
    backgroundColor: '#FF7F00'
  }
})

export default RecipeViewScreen;
