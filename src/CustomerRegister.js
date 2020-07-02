import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  Button,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
//import {TextInput} from 'react-native-gesture-handler';

export default class CustomerRegister extends React.Component {
  render() {
    return (
      <KeyboardAwareScrollView>
        <ImageBackground
          style={styles.backgroundContainer}
          source={require('../assets/vendorcustomerbackground8.jpg')}>
          <KeyboardAvoidingView
            style={styles.keyboardAwareness}
            automaticallyAdjustContentInsets={false}>
            <View style={styles.regform}>
              <Text style={styles.header}> Registration</Text>

              <TextInput
                style={styles.textinput}
                placeholder="Name"
                placeholderTextColor="#000"
                underlineColorAndroid={'transparent'}
              />

              <TextInput
                style={styles.textinput}
                placeholder="Mobile Phone Number"
                placeholderTextColor="#000"
                underlineColorAndroid={'transparent'}
              />
              <TextInput
                style={styles.textinput}
                placeholder="Username"
                placeholderTextColor="#000"
                underlineColorAndroid={'transparent'}
              />
              <TextInput
                style={styles.textinput}
                placeholder="Password"
                placeholderTextColor="#000"
                maxLength={10}
                underlineColorAndroid={'transparent'}
              />

              <TextInput
                style={styles.textinput}
                placeholder="Renter the password"
                placeholderTextColor="#000"
                maxLength={10}
                underlineColorAndroid={'transparent'}
              />

              <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  keyboardAwareness: {
    // flex: 1,
    marginBottom: 100,
  },
  backgroundContainer: {
    width: '100%',
    height: '100%',
    //flex: 1,
  },

  regform: {
    //alignSelf: 'stretch',
    //flex: 1,
    justifyContent: 'center',
    //alignItems: 'flex-end',
    paddingLeft: 60,
    paddingRight: 60,
  },

  header: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
    color: '#000',
    paddingBottom: 10,
    marginBottom: 50,
    borderBottomColor: '#fa7d09',
    borderBottomWidth: 5,
  },

  textinput: {
    alignSelf: 'stretch',
    fontSize: 18,

    height: 40,
    marginBottom: 25,
    color: '#115',
    borderBottomWidth: '#f8f8f8',
    borderBottomWidth: 1.5,
  },

  loginText: {
    fontSize: 22,
    fontWeight: '500',
    color: '#111111',
    textAlign: 'center',
    fontFamily: 'sans-serif-medium',
  },

  loginButton: {
    marginTop: 25,
    backgroundColor: '#fa7d09',
    width: 200,
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 5,
    marginHorizontal: 30,
    justifyContent: 'center',
  },
});
