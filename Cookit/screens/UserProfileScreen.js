import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomTextInput from '../components/CustomTextInput';

class UserProfileScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      // photo: null,
      username: 'Elena',
      email: 'elena@mail.com',
      password: 'passtest'
    }

    this.onChangeText = this.onChangeText.bind(this)
    this.gotToRegister = this.gotToRegister.bind(this)
  }

  onChangeText (name, value) {
    this.setState({
      [name]: value
    })
  }

  gotToRegister () {
    console.log('create user function')
  }

  render () {
    return (
      <SafeAreaView style={styles.viewContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Profile</Text>
          <CustomTextInput
            placeholder='Username'
            onChangeText={(text) => this.onChangeText('username', text)}
            value={this.state.username}
            labelText={'Username'}
          />
          <CustomTextInput
            placeholder='Email'
            onChangeText={(text) => this.onChangeText('email', text)}
            value={this.state.email}
            labelText={'Email'}
          />
        <TouchableHighlight style={styles.link} onPress={this.gotToRegister}>
          <Text style={styles.linkText}>Change password</Text>
        </TouchableHighlight>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  link: {
    marginTop: 16,
    marginBottom: 16,
    padding: 16
  },
  linkText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: '#FF7F00'
  }
})

export default UserProfileScreen;
