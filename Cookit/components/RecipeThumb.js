import React, { Component } from 'react'
import { StyleSheet, TextInput, View, Image, Text } from 'react-native'

const RecipeThumb = (props) => {
  console.log('props ', props)
	return (
		<View style={styles.container}>
			<Image source={props.image} style={{height: 50, width: 50, margin: 10}} />
			<Text>{props.name}</Text>
		</View>
	)
}


// class RecipeThumb extends Component {
//   constructor(props) {
//     super(props)

//   }

//   render () {
//     console.log('image props ', this.props)
//     return (
//       <View style={styles.container}>
//         <Image source={this.props.image} style={{height: 50, width: 50, margin: 10}} />
//         <Text>{this.props.name}</Text>
//       </View>
//     )
//   }
// }

const styles = StyleSheet.create({
	container: {
    flex: 1,
    margin: 16
	}
})

export default RecipeThumb;
