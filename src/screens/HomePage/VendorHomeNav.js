import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import VendorHome from './VendorHome'
import Test from './Test'
import VendorPublicView from './VendorPublicView'
import Home from '../PublicView/VendorProfile'

const VendorStack = createStackNavigator();

function VendorHomeNav(){
    return(
        <VendorStack.Navigator headerMode="none">
            <VendorStack.Screen name="VendorHome" component={VendorHome}/>
            <VendorStack.Screen name="Test" component={Test}/>
            <VendorStack.Screen name= "VendorPublicView" component={VendorPublicView}/>
            <VendorStack.Screen name= "VendorProfile" component={Home}/>
        </VendorStack.Navigator>
    )
}

export default VendorHomeNav;