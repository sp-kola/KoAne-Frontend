import React, {Component}  from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Container, Header, Left, Body, Right, Title, Subtitle , Button, Tab, Tabs, ScrollableTab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

import OrdersMap from '../../components/CustomerOrdersMap/OrdersMap'


class OrderView extends Component {
    render(){
        return(
            <View style={styles.container}>
                <OrdersMap/>
            </View>       
        )
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: 'black'
    },
    container: {
        flex: 1,
        height: '100%',
        width: '100%'
    }
})

export default OrderView;