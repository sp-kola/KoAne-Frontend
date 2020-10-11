import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import DefaultButton from '../UI/DefaultButton/DefaultButton';
import {Button} from 'native-base';

const logo = require('../../../assets/logo.png');
const back1 = require('../../../assets/back1.png');

export default class OrderConfirmRecipt extends Component {
  render() {
    return (
      <ImageBackground style={styles.backgroundContainer} source={back1}>
        <View style={styles.background}>
          <Text style={styles.text1}>YOUR ORDER IS BEING </Text>
          <Text style={styles.text2}>PLACED</Text>
          <Text style={styles.text2}>WE WILL NOTIFY YOU</Text>
          <Text style={styles.text2}>WHEN THE VENDOR </Text>
          <Text style={styles.text2}>ACCEPT YOUR ORDER</Text>
          <Text style={styles.text2}>THANK YOU FOR ORDERING </Text>
          <Text style={styles.text2}>WTIH US</Text>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.text3}>
            If you want to cancel the order, you can cancel the order before the
            vendor accpet the order.
          </Text>
          <DefaultButton color="red" fontWeight="bold">
            Cancel Order
          </DefaultButton>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 120,
    marginTop: 14,
    marginEnd: 1,
  },

  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },

  background: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    width: '85%',
    height: '95%',
    alignItems: 'center',
    borderRadius: 25,
    // padding: 10,
  },
  text1: {
    // height: 48,
    // borderRadius: 25,
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    color: 'rgba(1,1,1,0.7)',
    textAlign: 'center',
    marginTop: 40,
  },

  text2: {
    // height: 48,
    // borderRadius: 25,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    color: 'rgba(1,1,1,0.7)',
    textAlign: 'center',
    marginTop: 15,
  },

  text3: {
    // height: 48,
    // borderRadius: 25,
    fontSize: 18,
    marginRight: 5,
    marginLeft: 5,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    color: 'rgba(1,1,1,0.7)',
    textAlign: 'center',
    marginTop: 5,
  },
});
