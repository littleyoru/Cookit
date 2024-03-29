import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomTextInput from '../components/CustomTextInput';
import { login } from '../actions/authentication';

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
    // let data = {
    //   "Email": "elena@mail.com",
    //   "Password": "password1"
    // }
    // this.props.login(data).then(() => this.props.navigation.navigate('MyFridgeScreen'))
    this.props.navigation.navigate('MyFridgeScreen');
  }

  gotToRegister () {
    this.props.navigation.navigate('UserRegistrationScreen');
  }

  render() {
    return (
      <SafeAreaView style={styles.viewContainer}>
        <View style={styles.container}>
          <Text style={styles.label}>Please Login to continue</Text>
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
          <TouchableHighlight style={styles.btn} onPress={this.login}>
            <Text style={styles.btnText}>Sign in</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.link} onPress={this.gotToRegister}>
            <Text style={styles.linkText}>Sign up</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    );
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
  label: {
    fontSize: 20,
    alignSelf: 'flex-start',
    paddingBottom: 24,
    marginLeft: 8,
    marginBottom: 16
  },
  title: {
    fontSize: 20
  },
  btn: {
    backgroundColor: '#FF7F00',
    width: '60%',
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
  },
  link: {
    width: '60%',
    marginTop: 16,
    marginBottom: 16,
    padding: 16,
    alignSelf: 'center',
  },
  linkText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: '#FF7F00'
  }
});

export default LoginScreen;
