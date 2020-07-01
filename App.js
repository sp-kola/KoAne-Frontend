import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import S1 from './Screen1';
import S2 from './Screen2';
import LoginRegister from './src/LoginRegister';
import Select_option from './src/Select_option';
import Login from './src/Login';
import CustomerRegister from './src/CustomerRegister';
import VendorRegister from './src/VendorRegister';

const App = createStackNavigator({
  // S1: {screen: S1},
  // S2: {screen: S2},
  LoginRegister: {screen: LoginRegister},
  Select_option: {screen: Select_option},
  Login: {screen: Login},
  CustomerRegister: {screen: CustomerRegister},
  VendorRegister: {screen: VendorRegister},
});

export default createAppContainer(App);
