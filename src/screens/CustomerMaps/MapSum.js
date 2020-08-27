import React, {Component}  from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Container, Header, Left, Body, Right, Title, Subtitle , Button, Tab, Tabs, ScrollableTab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'

import LocationButton from '../../components/LocationSumButton/LocationSumButton'


class MapSum extends Component {
    render(){
        return(
            <View>
                <View style={styles.buttonContainer} >
                    <LocationButton title="Your location" data="Change your location">
                        <Icon name="search-location" size={80} color="#E0B743" />
                    </LocationButton> 
                    <LocationButton title="Your orders" data="Orders to be recieved:">
                        <Icon name="box" size={80} color="#E0B743" />
                    </LocationButton> 
                </View>
                <View style={styles.buttonContainer}>
                    <LocationButton title="search vendors" data="vendors currently delivering in area">
                        <Icon name="shipping-fast" size={80} color="#E0B743" />
                    </LocationButton> 
                    <LocationButton title="flag" data="help the community: report vendors">
                        <Icon name="flag" size={80} color="#E0B743" />
                    </LocationButton>    
                </View>
            </View>       
        )
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: 'black'
    },
    buttonContainer: {
        flexDirection: 'row',
        height: '48%',
        padding: 10,
        justifyContent: 'space-evenly',
        alignContent: 'center'

    }
})

export default MapSum;