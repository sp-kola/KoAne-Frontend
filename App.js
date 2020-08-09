import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Root} from 'native-base';
import TrackMe from './src/screens/Location/TrackMe.js';
import addProduct from './src/components/Product/addProduct';
import CustomerMap from './src/screens/Location/CustomerLocation/Map';
import VendorHome from './src/screens/VendorHome/App';
import CustomerHome from './src/screens/CustomerHome';
import LoginRegister from './src/LoginRegister';
import Select_option from './src/Select_option';
import Login from './src/login';
import CustomerRegister from './src/CustomerRegister';
import VendorRegister from './src/VendorRegister';
import VenderSearch from './src/screens/VenderSearch';
import Testing from './src/screens/Testing';
import Home from './src/screens/HomePage/Home';
import AdminHome from './src/screens/AdminHome';
import viewProduct from './src/components/Product/viewProduct';
import OrderConfirmRecipt from './src/components/Order_UI/OrderConfirmRecipt';
import SplashScreen from './src/SplashScreen';
import viewVendorProducts from './src/components/Product/viewVendorProducts';

const RootStack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />

        <RootStack.Screen name="LoginRegister" component={LoginRegister} />
        <RootStack.Screen name="Addnewproduct" component={addProduct} />
        <RootStack.Screen name="VenderSearch" component={VenderSearch} />
        <RootStack.Screen name="CustomerHome" component={CustomerHome} />
        <RootStack.Screen name="VendorHome" component={VendorHome} />
        <RootStack.Screen name="AdminHome" component={AdminHome} />
        <RootStack.Screen name="Select_option" component={Select_option} />
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen
          name="CustomerRegister"
          component={CustomerRegister}
        />
        <RootStack.Screen name="VendorRegister" component={VendorRegister} />
        <RootStack.Screen name="CustomerMap" component={CustomerMap} />
        <RootStack.Screen name="Map" component={TrackMe} />
        <RootStack.Screen name="Home" component={Home} />

        <RootStack.Screen
          name="viewVendorProduct"
          component={viewVendorProducts}
        />

        <RootStack.Screen
          name="orderConfirmRecipt"
          component={OrderConfirmRecipt}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
