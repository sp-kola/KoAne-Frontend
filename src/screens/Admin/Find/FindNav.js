import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import VendorHome from './VendorHome'
// import Test from './Test'
// import VendorPublicView from './VendorPublicView'
// import Home from '../PublicView/VendorProfile'

import Customer from './Customer'
import DisplayCustomer from './DisplayCustomer'

const VendorStack = createStackNavigator();

function FindNav() {
    return (
        <VendorStack.Navigator headerMode="none">
            <VendorStack.Screen name="Customer" component={Customer} />
            <VendorStack.Screen name="DisplayCustomer" component={DisplayCustomer} />
            {/* <VendorStack.Screen name="VendorPublicView" component={VendorPublicView} />
            <VendorStack.Screen name="VendorProfile" component={Home} /> */}
        </VendorStack.Navigator>
    )
}

export default FindNav;