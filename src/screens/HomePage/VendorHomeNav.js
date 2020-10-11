import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import VendorHome from './VendorHome'
import Test from './Test'

const VendorStack = createStackNavigator();

function VendorHomeNav(){
    return(
        <VendorStack.Navigator headerMode="none">
            
            <VendorStack.Screen name="VendorHome" component={VendorHome}/>
            <VendorStack.Screen name="Test" component={Test}/>
        </VendorStack.Navigator>
    )
}

export default VendorHomeNav;