import React, { Component } from 'react'
import { StyleSheet, TextInput, View, Image, Text, TouchableHighlight } from 'react-native'

const RecipeThumb = (props) => {
  console.log('props ', props, props.name)
	return (
		<TouchableHighlight style={styles.container} onPress={props.onPress}>
			<Image source={props.image} style={styles.image} />
			<Text>{props.name}</Text>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    margin: 16
	},
	image: {
		// minHeight: 100,
		// minWidth: 100,
		// maxHeight: 200,
		// maxWidth: 200,
		height: 150,
		width: 150
	}
})

export default RecipeThumb;
