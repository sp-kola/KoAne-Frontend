import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import TrackMe from './src/screens/Location/TrackMe.js';
// import addProduct from './src/components/Product/addProduct';
import viewProduct from './src/components/Product/viewProduct';

const RootStack = createStackNavigator();

function App() {
  return (
    // <NavigationContainer>
    //   <RootStack.Navigator >
    //     <RootStack.Screen
    //     name='Map'
    //     component={TrackMe}
    //     />
    //   </RootStack.Navigator>
    // </NavigationContainer>

    // <NavigationContainer>
    //   <RootStack.Navigator>
    //     <RootStack.Screen name="Add new product" component={addProduct} />
    //   </RootStack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="View all products" component={viewProduct} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
