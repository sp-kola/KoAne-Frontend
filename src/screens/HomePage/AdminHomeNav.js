import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AdminHome from './AdminHome'
import Test from './Test'

const AdminStack = createStackNavigator();

function AdminHomeNav(){
    return(
        <AdminStack.Navigator headerMode="none">
            
            <AdminStack.Screen name="AdminHome" component={AdminHome}/>
            <AdminStack.Screen name="Test" component={Test}/>
        </AdminStack.Navigator>
    )
}

export default AdminHomeNav;