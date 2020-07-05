
import  * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Root} from 'native-base';
import TrackMe from './src/screens/Location/TrackMe.js';
import CustomerMap from './src/screens/Location/CustomerLocation/Map';
import VendorHome from './src/screens/VendorHome/App'
import CustomerHome from './src/screens/CustomerHome';
import LoginRegister from './src/LoginRegister';
import Select_option from './src/Select_option';
import Login from './src/login';
import CustomerRegister from './src/CustomerRegister';
import VendorRegister from './src/VendorRegister';
import VenderSearch from './src/screens/VenderSearch'
import Testing from './src/screens/Testing';
import Home from './src/screens/HomePage/Home';
import AdminHome from './src/screens/AdminHome'

const RootStack = createStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode='none' >
      <RootStack.Screen
          name="LoginRegister"
          component={LoginRegister}
        />
      <RootStack.Screen
        name="VenderSearch"
        component= {VenderSearch}
          />
      <RootStack.Screen
        name="CustomerHome"
        component= {CustomerHome}
          />
      <RootStack.Screen
        name="VendorHome"
        component= {VendorHome}
          />
      <RootStack.Screen
        name="AdminHome"
        component= {AdminHome}
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
          name='CustomerMap'
          component={CustomerMap}
        />
         <RootStack.Screen
        name='Map'
        component={TrackMe}
        />
        <RootStack.Screen
          name="Home"
          component={Home}
        />
        
      </RootStack.Navigator>  
    </NavigationContainer>  
  )
}

export default App;