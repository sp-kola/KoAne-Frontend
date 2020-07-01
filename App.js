import  * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Root} from 'native-base';
import TrackMe from './src/screens/Location/TrackMe.js';
import CustomerMap from './src/screens/Location/CustomerLocation/Map';
import Testing from './src/screens/Testing'

const RootStack = createStackNavigator();


function App(){
  return (
    <NavigationContainer>
      <Root>
      <RootStack.Navigator >
      {/* <RootStack.Screen
          name='Test'
          component={Testing}
        /> */}
        <RootStack.Screen
          name='Customer'
          component={CustomerMap}
        />
        <RootStack.Screen
        name='Map'
        component={TrackMe}
        />
      </RootStack.Navigator>  
      </Root>
    </NavigationContainer>
  )
}

export default App;