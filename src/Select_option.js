import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import Menuitem from './MenuItem';
import {Icon} from 'native-base';
import DefaultButton from './components/UI/DefaultButton/DefaultButton'


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
      <View style={styles.backgroundImage}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../assets/back1.png')}>
        <View style={styles.background}>
        <View style={styles.top}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.header}>Select Your Option</Text>
        </View>

        <View style={styles.menuContainer} >
          <View style={styles.buttonView}>
          <DefaultButton onPress={this.Cart}>
           <Icon name ='cart' style={{fontSize: 80, color: 'black'}}/ >
          </DefaultButton>
          <Text style={styles.buttonText}>Customer</Text>
          </View>
          <View style={styles.buttonView}>
          <DefaultButton  onPress={this.Truck}>
           <Icon type='MaterialCommunityIcons' name='truck' style={{fontSize: 80, color: 'black'}}/>
          </DefaultButton>  
          <Text style={styles.buttonText}>Vendor</Text>
          </View>
        </View>  
       
        </View>
      </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  backgroundImage: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background:{
    backgroundColor: 'rgba(255,255,255,0.9)',
    width: '90%',
    alignItems: 'center',
    borderRadius: 25,
    //padding: 10
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
  buttonView:{
    alignItems: 'center'
  },
  buttonText:{
    fontSize: 20
  }

});
