import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Menuitem from './MenuItem';

const logo = require('../assets/logo.png');

export default class selection extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../assets/login1.jpg')}>
        <View style={styles.container}>
          <Image style={styles.logo} source={logo} />
        </View>
        <View>
          <Text style={styles.text}>SELECT YOUR OPTION</Text>
        </View>

        <View style={styles.bottom}>
          <Menuitem itemImage={require('../assets/cart.png')} />
          <Menuitem itemImage={require('../assets/lorry.png')} />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '25%',
    marginVertical: 80,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '25%',
    marginTop: '40%',
  },

  text: {
    fontFamily: 'lucida grande',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#141823',
    marginTop: 5,
    textAlign: 'center',
    //marginTop: 10,

    marginVertical: 125,
  },

  textstyle: {
    textAlign: 'center',
    marginTop: 5,
    //marginBottom: 100,
  },

  backgroundImage: {
    width: '100%',
    height: '100%',
    flex: 1,
  },

  bottom: {
    height: '25%',
    marginLeft: 30,
    marginTop: 10,

    marginBottom: '20%',
    //flexDirection: 'column',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  /* buttonText: {
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
  },*/

  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    width: 300,
    height: 200,
  },

  /*cart: {
    justifyContent: 'center',
    width: 75,
    height: 75,
  },*/
});
