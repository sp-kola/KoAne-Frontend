import  * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Root} from 'native-base';
import TrackMe from './src/screens/Location/TrackMe.js';
import CustomerMap from './src/screens/Location/CustomerLocation/Map';
import LoginRegister from './src/LoginRegister';
import Select_option from './src/Select_option';
import Login from './src/login';
import CustomerRegister from './src/CustomerRegister';
import VendorRegister from './src/VendorRegister'
import Testing from './src/screens/Testing'

const RootStack = createStackNavigator();

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
        <RootStack.Screen
          name='Customer'
          component={CustomerMap}
        />
        <RootStack.Screen
        name='Map'
        component={TrackMe}
        />
      </RootStack.Navigator>  
    </NavigationContainer>  
  )
}

export default App;