import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const logo = require('../assets/logo.png');

export default class login extends Component {
  render() {
    return (
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={require('../assets/login1.jpg')}>
        <View style={styles.container}>
          <Image style={styles.logo} source={logo} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },

  button: {
    backgroundColor: '#242424',
    width: 300,
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 16,
  },

  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 200,
  },
});
