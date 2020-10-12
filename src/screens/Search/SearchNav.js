import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SearchHome from './SearchHome'
import VendorPublicView from './VendorPublicView'
import Order from './OrderPlaceContainer'
import OrderConfirm from './OrderConfirmContainer'
import Recipt from './ReciptContainer'

const SearchStack = createStackNavigator();

function SearchNav(){
    return(
        <SearchStack.Navigator headerMode="none">
            <SearchStack.Screen name="SearchHome" component={SearchHome}/>
            <SearchStack.Screen name= "VendorPublicView" component={VendorPublicView}/>
            <SearchStack.Screen name= "Order" component={Order}/>
            <SearchStack.Screen name= "OrderConfirm" component={OrderConfirm}/>
            <SearchStack.Screen name= "Recipt" component={Recipt}/>
        </SearchStack.Navigator>
    )
}

export default SearchNav;