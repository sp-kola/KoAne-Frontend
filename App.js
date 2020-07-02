import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import S1 from './Screen1';
// import S2 from './Screen2';
import LoginRegister from './src/LoginRegister';
import Select_option from './src/Select_option';
import Login from './src/login';
import CustomerRegister from './src/CustomerRegister';
import VendorRegister from './src/VendorRegister';

const RootStack = createStackNavigator();

// const App = createStackNavigator({
//   // S1: {screen: S1},
//   // S2: {screen: S2},
//   LoginRegister: {screen: LoginRegister},
//   Select_option: {screen: Select_option},
//   Login: {screen: Login},
//   CustomerRegister: {screen: CustomerRegister},
//   VendorRegister: {screen: VendorRegister},
// });

function App(){
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="LoginRegister"
          component={LoginRegister}
        />
        <RootStack.Screen
          name="Select_option"
          component={Select_option}
        />
        <RootStack.Screen
          name="Login"
          component={Login}
        />
        <RootStack.Screen
          name="CustomerRegister"
          component={CustomerRegister}
        />
        <RootStack.Screen
          name="VendorRegister"
          component={VendorRegister}
        />
      </RootStack.Navigator>  
    </NavigationContainer>  
  )
}

export default App;
