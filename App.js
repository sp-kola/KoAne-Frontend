import  * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TrackMe from './src/screens/Location/TrackMe.js';

const RootStack = createStackNavigator();


function App(){
  return (
    <NavigationContainer>
      <RootStack.Navigator >
        <RootStack.Screen
        name='Map'
        component={TrackMe}
        />
      </RootStack.Navigator>  
    </NavigationContainer>
  )
}

export default App;