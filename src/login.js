import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
  TextComponent,
} from 'react-native';
//import {TextInput} from 'react-native-gesture-handler';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

const logo = require('../assets/logo.png');

const {width: WIDTH} = Dimensions.get('window');

export default class Login extends Component {
  // function for set the password vissible and hidden
  constructor() {
    super();
    this.state = {
      showPass: true,
      press: false,
    };
  }

  showPass = () => {
    if (this.state.press == false) {
      this.setState({showPass: false, press: true});
    } else {
      this.setState({showPass: true, press: false});
    }
  };
  render() {
    return (
      <ImageBackground
        style={styles.backgroundContainer}
        source={require('../assets/login1.jpg')}>
        <View style={styles.container}>
          <Image style={styles.logo} source={logo} />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome5
            name="user"
            size={30}
            color={'rgba(1,1,1,0.7)'}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder={'  Username'}
            placeholderTextColor={'rgba(1,1,1,0.7)'}
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome5
            name="lock"
            size={30}
            color={'rgba(1,1,1,0.7)'}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder={'  Password'}
            secureTextEntry={this.state.showPass}
            placeholderTextColor={'rgba(1,1,1,0.7)'}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity
            style={styles.btnEye}
            onPress={this.showPass.bind(this)}>
            <FontAwesome5
              name={this.state.press == false ? 'eye-slash' : 'eye'}
              size={26}
              color={'rgba(1,1,1,0.7)'}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //marginBottom: 15,
    marginTop: 1,
  },

  logo: {
    //justifyContent: 'center',
    //alignItems: 'center',
    width: 200,
    height: 120,
  },

  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    fontFamily: 'Verdana',
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(1,1,1,0.7)',
    marginHorizontal: 25,
  },

  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37,
  },

  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37,
  },

  inputContainer: {
    marginTop: 12,
  },

  loginText: {
    fontSize: 22,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },

  loginButton: {
    backgroundColor: '#242424',
    width: 250,
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 10,
  },
});
