import React, {Component} from 'react';
import {View, Button,Text, StyleSheet, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import MapView from 'react-native-maps';
import GeoLocation from '@react-native-community/geolocation'

import DefaultButton from '../../components/UI/DefaultButton/DefaultButton'
import {shareLocation} from '../../store/actions/index'

class Map extends Component{
    
    state= {
        focusedLocation:{
            latitude: 7.2906 ,
            longitude:80.6337 ,
            latitudeDelta: 0.0122,
            longitudeDelta: Dimensions.get("window").width/ Dimensions.get("window").height * 0.0122
        },
        locationChose: false,
    }

    pickLocationHandler = event => {
        const coords = event.nativeEvent.coordinate;
        this.map.animateToRegion({
            ...this.state.focusedLocation,
            latitude: coords.latitude,
            longitude: coords.longitude
        });
        this.setState(prevState => {
            return{
                focusedLocation:{
                    ...prevState.focusedLocation,
                    latitude: coords.latitude,
                    longitude: coords.longitude
                },
                locationChose: true
            }
        })

        // this.props.onLocationPick({
        //     latitude: coords.latitude,
        //     longitude: coords.longitude
        // })
    }

    render(){

        let marker = null;

        if (this.state.locationChose){
            marker = <MapView.Marker coordinate= {this.state.focusedLocation}/>
        }

        return(
            
            <View style={styles.mapContainer}>
                <MapView
                initialRegion={this.state.focusedLocation}
                style={styles.map}
                onPress={this.pickLocationHandler}
                ref={ref => this.map = ref}
                >
                {marker}
                </MapView>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({  
    mapContainer: {
        //flex: 1,
        width: '95%',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center'
    },  
    map:{
        width: '100%',
        height: '100%'
    }
})

export default Map; 