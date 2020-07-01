import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button,
  Icon,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import Menuitem from './Menuitem';

const logo = require('../assets/logo.png');

export default class Select_option extends React.Component {
  Cart = () => {
    this.props.navigation.navigate('CustomerRegister');
  };

  Truck = () => {
    this.props.navigation.navigate('VendorRegister');
  };

  render() {
    return (
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../assets/login1.jpg')}>
        <View style={styles.top}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.header}>Select Your Option</Text>
        </View>
        <View style={styles.menuContainer}>
          <TouchableOpacity
            title="Cart"
            onPress={this.Cart}
            style={styles.button}>
            <Menuitem itemImage={require('../assets/shopping.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            title="Truck"
            onPress={this.Truck}
            style={styles.button}>
            <Menuitem itemImage={require('../assets/truck.png')} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    flex: 1,
  },

  top: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    width: 300,
    height: 200,
    /*padding: 20,
    paddingRight: 40,
    paddingLeft: 40,*/
  },

  header: {
    fontSize: 30,
    fontFamily: 'sans-serif-medium',
    //marginBottom: 10,
  },

  menuContainer: {
    //flex: 1,
    height: '40%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',

    //flexWrap: 'wrap',
  },

  button: {
    width: '80%',
    height: '75%',
    padding: 2,

    //justifyContent: 'space-around',
  },
});
