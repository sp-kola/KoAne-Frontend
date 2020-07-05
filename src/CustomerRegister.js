import React from 'react';
import {connect} from 'react-redux';
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
  ScrollView
} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import validate from './utils/validation';
import DefaultInput from './components/UI/DefaultInput/DefaultInput';
import {signup} from './store/actions/index'
//import {TextInput} from 'react-native-gesture-handler';

class CustomerRegister extends React.Component {


  state = {
    controls : {
      email:{
          value: "",
          valid: false,  
          validationRules:{
              isEmail: true
          },
          touched : false
      },
      firstName: {
        value: "",
        valid: false,
        validationRules:{
            notEmpty: true
        },
        touched : false
      },
      lastName: {
        value: "",
        valid: false,
        validationRules:{
          notEmpty: true
        },
        touched : false
      },
      userName: {
        value: "",
        valid: false,
        validationRules:{
          notEmpty: true
        },
        touched : false
      },
      password: {
          value: "",
          valid: false,
          validationRules:{
              strongPassword: true
          },
          touched : false
      },
      confrimPassword: {
        value: "",
        valid: false,
        validationRules:{
            equalTo: "password"
        },
        touched : false
      },
      contactNo: {
        value: "",
        valid: false,
        validationRules:{
            minLength: 10
        },
        touched : false
      },
    },
  }

  updateInputState = (key, value) => {
    let connectedValue = {};
    if(this.state.controls[key].validationRules.equalTo){
        const equalControl = this.state.controls[key].validationRules.equalTo;
        const equalValue = this.state.controls[equalControl].value;
        connectedValue ={
            ...connectedValue,
            equalTo: equalValue
        }
    }
    if(key === 'password'){
        const equalControl = "password"
        connectedValue ={
            ...connectedValue,
            equalTo: value
        }
    }
    this.setState(prevState => {
        return{
            controls: {
                ...prevState.controls,
                confrimPassword:{
                    ...prevState.controls.confrimPassword,
                    valid: key === 'password'? validate(prevState.controls.confrimPassword.value,prevState.controls.confrimPassword.validationRules,connectedValue) 
                    : prevState.controls.confrimPassword.valid
                },
                [key]: {
                    ...prevState.controls[key],
                    value: value,
                    valid: validate(value, prevState.controls[key].validationRules, connectedValue),
                    touched: true
                    
                }
            }
        }
    })
}


submitHandler = () => {
  const signUpData ={ 
    email: this.state.controls.email.value,
    password: this.state.controls.password.value,
    firstName: this.state.controls.firstName.value,
    lastName: this.state.controls.lastName.value,
    userName: this.state.controls.userName.value,
    contactNo: this.state.controls.contactNo.value,
    }
    if(this.state.controls.email.valid === true && this.state.controls.password.valid === true && this.state.controls.firstName.valid === true && this.state.controls.lastName.valid === true && this.state.controls.contactNo.valid === true && this.state.controls.userName.valid === true){
      alert(`Pass`)
      this.props.onSignup(signUpData,this.props)
  }
  else{ 
      alert(`Validation error`)
    }
}

  render() {
    return (
        <ImageBackground
          style={styles.backgroundContainer}
          source={require('../assets/back1.png')}>
          <KeyboardAvoidingView
            style={styles.keyboardAwareness}
            automaticallyAdjustContentInsets={true}
            >
            <View style={styles.regform}>
              <Text style={styles.header}> Registration</Text>
              <DefaultInput
                style={styles.textinput}
                placeholder="First Name"
                placeholderTextColor="#000"
                underlineColorAndroid={'transparent'}
                value={this.state.controls.firstName.value}
                onChangeText = {(val) => this.updateInputState('firstName',val)}
                valid = {this.state.controls.firstName.valid}
                touched= {this.state.controls.firstName.touched}
              />
              <DefaultInput
                style={styles.textinput}
                placeholder="Last Name"
                placeholderTextColor="#000"
                underlineColorAndroid={'transparent'}
                value={this.state.controls.lastName.value}
                onChangeText = {(val) => this.updateInputState('lastName',val)}
                valid = {this.state.controls.lastName.valid}
                touched= {this.state.controls.lastName.touched}
              />
              <DefaultInput
                style={styles.textinput}
                placeholder="User Name"
                placeholderTextColor="#000"
                underlineColorAndroid={'transparent'}
                value={this.state.controls.userName.value}
                onChangeText = {(val) => this.updateInputState('userName',val)}
                valid = {this.state.controls.userName.valid}
                touched= {this.state.controls.userName.touched}
              />
              <DefaultInput 
                placeholder='Email' 
                style={styles.textinput}
                value={this.state.controls.email.value}
                onChangeText = {(val) => this.updateInputState('email',val)}
                valid = {this.state.controls.email.valid}
                touched= {this.state.controls.email.touched}
                placeholderTextColor="#000"
                autoCapitalize = 'none'
                autoCorrect = {false}
                keyboardType = 'email-address'
                underlineColorAndroid={'transparent'}
              />
              <DefaultInput
                style={styles.textinput}
                placeholder="Mobile Phone Number"
                placeholderTextColor="#000"
                underlineColorAndroid={'transparent'}
                value={this.state.controls.contactNo.value}
                onChangeText = {(val) => this.updateInputState('contactNo',val)}
                valid = {this.state.controls.contactNo.valid}
                touched= {this.state.controls.contactNo.touched}
              />
              <DefaultInput
                style={styles.textinput}
                placeholder="Password"
                placeholderTextColor="#000"
                underlineColorAndroid={'transparent'}
                value={this.state.controls.password.value}
                onChangeText = {(val) => this.updateInputState('password',val)}
                valid = {this.state.controls.password.valid}
                touched= {this.state.controls.password.touched}
                secureTextEntry
              />
              <DefaultInput
                style={styles.textinput}
                placeholder="Re-enter the Password"
                placeholderTextColor="#000"
                underlineColorAndroid={'transparent'}
                value={this.state.controls.confrimPassword.value}
                onChangeText = {(val) => this.updateInputState('confrimPassword',val)}
                valid = {this.state.controls.confrimPassword.valid}
                touched= {this.state.controls.confrimPassword.touched}
                secureTextEntry
              />

              <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginText} onPress={() => this.submitHandler()}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  keyboardAwareness: {
    // flex: 1,
    //marginBottom: 100,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      
  },
  backgroundContainer: {
    width: '100%',
    height: '100%',
    //flex: 1,
  },
  background:{
    backgroundColor: 'rgba(255,255,255,0.9)',
    //width: '95%',
    //alignItems: 'center',
    //borderRadius: 25,
    //padding: 10
  },
  regform: {
    //alignSelf: 'stretch',
    //flex: 1,
    justifyContent: 'center',
    //alignItems: 'flex-end',
    paddingLeft: 60,
    paddingRight: 60,
    backgroundColor: 'rgba(255,255,255,0.9)',
    width: '90%',
    borderRadius: 25,
    paddingBottom: 10,
    paddingTop: 10
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
    //color: '#115',
    //borderBottomWidth: '#f8f8f8',
    borderBottomWidth: 1.5,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'black',
    borderTopColor: 'transparent',
    borderEndColor: 'transparent',
    borderStartColor: 'transparent'

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

const mapDispatchToProps = dispatch => {
  return {
      onSignup: (signupData,nav) => dispatch(signup(signupData,nav))
  }
}

export default connect(null, mapDispatchToProps)(CustomerRegister); 