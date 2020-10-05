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
                    <LocationButton title="share your location" data="Change your location">
                        <Icon name="location-arrow" size={80} color="#E0B743" />
                    </LocationButton> 
                    <LocationButton title="Deliveries" data="Orders to be dilivered:">
                        <Icon name="box" size={80} color="#E0B743" />
                    </LocationButton> 
                </View>
                <View style={styles.buttonContainer}>
                    <LocationButton title="vendors" data="vendors currently delivering in area">
                        <Icon name="truck" size={80} color="#E0B743" />
                    </LocationButton> 
                    <LocationButton title="customers" data="customers within your range">
                        <Icon name="user-friends" size={80} color="#E0B743" />
                    </LocationButton>    
                </View>
                <View style={styles.buttonContainer}>
                    <LocationButton title="Your sales" data="You earning from app" sales={true}>
                        <Icon name="hand-holding-usd" size={80} color="#E0B743" />
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
        height: '35%',
        padding: 10,
        justifyContent: 'space-evenly',
        alignContent: 'center'

    },
    saleButton: {
        width: '100%'
    }
})

export default MapSum;