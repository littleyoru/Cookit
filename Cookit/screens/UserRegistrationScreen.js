import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';

class UserRegistrationScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      photo: null,
      username: '',
      email: '',
      password: '',
      repeatPassword: ''
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

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cookit Registration</Text>
        <CustomTextInput
          placeholder='Username'
          icon='info'
          onChangeText={(text) => this.onChangeText('username', text)}
          value={this.state.username}
        />
        <CustomTextInput
            placeholder='Email'
            icon='info'
            onChangeText={(text) => this.onChangeText('email', text)}
            value={this.state.email}
        />
        <CustomTextInput
          placeholder='Password'
          icon='info'
          onChangeText={(text) => this.onChangeText('password', text)}
          value={this.state.password}
        />
        <CustomTextInput
            placeholder='Repeat password'
            icon='info'
            onChangeText={(text) => this.onChangeText('repeatPassword', text)}
            value={this.state.repeatPassword}
        />
        <TouchableHighlight style={styles.btn} onPress={this.createUser}>
          <Text style={styles.btnText}>Create user</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
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
