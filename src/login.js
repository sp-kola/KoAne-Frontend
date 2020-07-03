import React, {Component} from 'react';
import {connect} from 'react-redux';
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
  ActivityIndicator,
} from 'react-native';
//import {TextInput} from 'react-native-gesture-handler';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import validate from './utils/validation';
import DefaultInput from './components/UI/DefaultInput/DefaultInput';
import {login} from './store/actions/index'

const logo = require('../assets/logo.png');

const {width: WIDTH} = Dimensions.get('window');

class Login extends Component {
  // function for set the password vissible and hidden
  constructor() {
    super();
    this.state = {
      showPass: true,
      press: false,
      controls : {
        email:{
            value: "",
            valid: false,  
            validationRules:{
                isEmail: true
            },
            touched : false
        },
        password: {
            value: "",
            valid: false,
            validationRules:{
                minLength: 6
            },
            touched : false
        },
      },
      
    };
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

  loginHandler = () => {
    const authData ={ 
      email: this.state.controls.email.value,
      password: this.state.controls.password.value
    }
    if(this.state.controls.email.valid === true && this.state.controls.password.valid === true){
      this.props.onLogin(authData,this.props);
  }
  else{ 
      alert(`Validation error`)
    }
  }

  showPass = () => {
    if (this.state.press == false) {
      this.setState({showPass: false, press: true});
    } else {
      this.setState({showPass: true, press: false});
    }
  };
  render() {

    let submitButton = (
      <TouchableOpacity style={styles.loginButton} onPress={this.loginHandler}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
     )

     if(this.props.isLoading){
      submitButton = <ActivityIndicator/>
    }

    return (
      <ImageBackground
        style={styles.backgroundContainer}
        source={require('../assets/back1.png')}>
        <View style={styles.background}>
        <View style={styles.container}>
          <Image style={styles.logo} source={logo} />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome5
            name="user"
            size={28}
            color={'rgba(1,1,1,0.7)'}
            style={styles.inputIcon}
          />
          <DefaultInput 
            placeholder='Your e-mail address' 
            style={styles.input}
            value={this.state.controls.email.value}
            onChangeText = {(val) => this.updateInputState('email',val)}
            valid = {this.state.controls.email.valid}
            touched= {this.state.controls.email.touched}
            placeholderTextColor={'rgba(1,1,1,0.7)'}
            autoCapitalize = 'none'
            autoCorrect = {false}
            keyboardType = 'email-address'
          />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome5
            name="lock"
            size={30}
            color={'rgba(1,1,1,0.7)'}
            style={styles.inputIcon}
          />
          <DefaultInput 
            placeholder='Password' 
            style={styles.input}
            value={this.state.controls.password.value}
            onChangeText = {(val) => this.updateInputState('password',val)}
            valid = {this.state.controls.password.valid}
            touched= {this.state.controls.password.touched}
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
        {submitButton}
        </View>
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
  background:{
    backgroundColor: 'rgba(255,255,255,0.9)',
    width: '95%',
    alignItems: 'center',
    borderRadius: 25,
    padding: 10
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
    height: 48,
    borderRadius: 25,
    fontSize: 16,
    fontFamily: 'Verdana',
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(1,1,1,0.7)',
    marginHorizontal: 25,
    borderColor: 'rgba(0,0,0,0.35)'
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

const mapStateToProps = state => {
  return{
      isLoading: state.ui.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onLogin: (authData,nav) => dispatch(login(authData,nav)),
  }
}

export default connect( mapStateToProps,mapDispatchToProps )(Login);