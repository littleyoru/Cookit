import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomTextInput from '../components/CustomTextInput';

class UserRegistrationScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      // photo: null,
      username: 'Elena',
      email: 'elena@mail.com',
      password: 'passtest',
      repeatPassword: 'passtest'
    }

    this.onChangeText = this.onChangeText.bind(this)
    this.createUser = this.createUser.bind(this)
  }

  onChangeText (name, value) {
    this.setState({
      [name]: value
    })
  }

  createUser () {
    console.log('create user function')
  }

  render() {
    return (
      <SafeAreaView style={styles.viewContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Cookit Registration</Text>
          <CustomTextInput
            placeholder='Username'
            onChangeText={(text) => this.onChangeText('username', text)}
            value={this.state.username}
          />
          <CustomTextInput
              placeholder='Email'
              onChangeText={(text) => this.onChangeText('email', text)}
              value={this.state.email}
          />
          <CustomTextInput
            placeholder='Password'
            onChangeText={(text) => this.onChangeText('password', text)}
            value={this.state.password}
            isPass={true}
          />
          <CustomTextInput
              placeholder='Repeat password'
              onChangeText={(text) => this.onChangeText('repeatPassword', text)}
              value={this.state.repeatPassword}
              isPass={true}
          />
          <TouchableHighlight style={styles.btn} onPress={this.createUser}>
            <Text style={styles.btnText}>Create user</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
    marginBottom: 16
  },
  btn: {
    backgroundColor: '#FF7F00',
    width: '70%',
    marginTop: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 10,
    shadowOffset: { width: 5, height: 10, },
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 1,
    alignSelf: 'center'
  },
  btnText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: '#FFFFFF'
  }
});

export default UserRegistrationScreen;
