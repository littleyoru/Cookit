import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';

class LoginScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this.onChangeText = this.onChangeText.bind(this)
    this.login = this.login.bind(this)
    this.gotToRegister = this.gotToRegister.bind(this)
  }

  onChangeText (name, value) {
    this.setState({
      [name]: value
    })
  }

  login () {

  }

  gotToRegister () {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cookit Login</Text>
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
        <TouchableHighlight style={styles.btn} onPress={this.login}>
          <Text style={styles.btnText}>OK</Text>
        </TouchableHighlight>
        <Text>or</Text>
        <TouchableHighlight style={styles.btn} onPress={this.gotToRegister}>
          <Text style={styles.btnText}>Register</Text>
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
    backgroundColor: '#D4AF37',
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

export default LoginScreen;
