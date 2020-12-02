import React, { Component, useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const CustomTextInput = (props) => {
  console.log('props ', props)
  const [ hasFocus, onChangeFocus ] = useState(false)
  return (
    <View style={styles.container}>
      <View style={hasFocus ? [styles.textContainer, styles.focusedTextContainer] : styles.textContainer}>
        <TextInput
          {...props}
          selectionColor='#D4AF37'
          underlineColorAndroid='transparent'
          style={styles.text}
          onFocus={() => onChangeFocus(true)}
          onBlur={() => onChangeFocus(false)}
          // value={value}
          // onChangeText={text => onChangeText(text)} 
          />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  textContainer: {
    flex: 1,
    borderRadius: 5,
    shadowOffset: { width: 5, height: 10, },
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 1,
    marginBottom: 10,
    backgroundColor: '#FFFFFF'
  },
  text: {
    minHeight: 40,
    padding: 6
  },
  focusedTextContainer: {
    borderWidth: 1,
    borderColor: '#D4AF37',
  }
})

export default CustomTextInput;
