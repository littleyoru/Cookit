import React, { Component, useState } from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native'

const CustomTextInput = (props) => {
  console.log('props ', props)
  const [ hasFocus, onChangeFocus ] = useState(false)
  return (
    <View style={styles.container}>
      {props.labelText && (<Text style={hasFocus ? styles.focusedLabel : styles.label}>{props.labelText}</Text>)}
      <View style={hasFocus ? [styles.textContainer, styles.focusedTextContainer] : styles.textContainer}>
        <TextInput
          {...props}
          selectionColor='#FF7F00'
          underlineColorAndroid='transparent'
          style={styles.text}
          onFocus={() => onChangeFocus(true)}
          onBlur={() => onChangeFocus(false)}
          secureTextEntry={props.isPass || false}
          // value={value}
          // onChangeText={text => onChangeText(text)} 
          />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 88
  },
  textContainer: {
    flex: 1,
    borderRadius: 20,
    shadowOffset: { width: 5, height: 10, },
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 1,
    marginBottom: 24,
    backgroundColor: '#FFFFFF'
  },
  text: {
    padding: 6,
    marginLeft: 8,
    justifyContent: 'center'
  },
  focusedTextContainer: {
    borderWidth: 1,
    borderColor: '#FF7F00',
  },
  label: {
    color: '#010101',
    marginLeft: 8,
  },
  focusedLabel: {
    color: '#FF7F00',
    marginLeft: 8
  }
})

export default CustomTextInput;
