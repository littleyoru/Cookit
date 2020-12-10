import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

class AddRecipeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.viewContainer}>
        <View style={styles.container}>
          <Text>Page in the making..</Text>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    // justifyContent: 'center'
  },
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 24
  },
})

export default AddRecipeScreen;