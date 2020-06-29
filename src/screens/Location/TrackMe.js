import React, {Component} from 'react';
import {View, Button,Text, StyleSheet, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import GeoLocation from '@react-native-community/geolocation'

import DefaultButton from '../../components/UI/DefaultButton/DefaultButton'

class TrackMe extends Component{
    
    state= {
        focusedLocation:{
            latitude: 7.2906 ,
            longitude:80.6337 ,
            latitudeDelta: 0.0122,
            longitudeDelta: Dimensions.get("window").width/ Dimensions.get("window").height * 0.0122
        },
        locationChose: false
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

    shareLocationHandler = event => {
        if(this.state.locationChose == false){
            alert('First choose a location in the map')
        }
        else{
            console.log(this.state.focusedLocation.latitude)
            console.log(this.state.focusedLocation.longitude)
        }
    }

    getLocationHandler = () => {
        GeoLocation.getCurrentPosition(pos => {
            const coordsEvent = { 
                nativeEvent: {
                    coordinate:{
                        latitude: pos.coords.latitude,
                        longitude: pos.coords.longitude
                    }
                }
            }
            //console.log(coordsEvent.nativeEvent.coordinate.latitude)
            this.pickLocationHandler(coordsEvent)
        }, err => {
            console.log(err)
            alert(`Fetching the Position failed,
             please pick one manually!`)
        })
    }

    render(){

        let marker = null;

        if (this.state.locationChose){
            marker = <MapView.Marker coordinate= {this.state.focusedLocation}/>
        }

        return(
            <View style={styles.container}>
                <View style={styles.mapContainer}>
                    <MapView
                    initialRegion={this.state.focusedLocation}
                    style={styles.map}
                    onPress={this.pickLocationHandler}
                    ref={ref => this.map = ref}
                    >
                    {marker}
                    </MapView>
                    <View style={styles.buttonContainer}>    
                        <DefaultButton 
                        color='black'
                        onPress={this.getLocationHandler}
                        >
                            Locate Me
                        </DefaultButton>    
                        <DefaultButton 
                        color='black'
                        onPress={this.shareLocationHandler}
                        >
                            Share
                        </DefaultButton>
                    </View>
                    <View style={styles.textContainer}>
                        <Text>Hello!</Text>
                    </View>    
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({  
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#e8e8e8'
    },
    mapContainer: {
        //flex: 1,
        width: '95%',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center'
    },  
    buttonContainer: {
        //flex: 4,
        flexDirection: 'row',
        //justifyContent: 'center'
    },
    textContainer: {
        width: '100%',
        height: '25%',
        backgroundColor: 'rgba(255,255,255,0.4)',
        borderWidth: 1,
        borderRadius: 15,
        padding: 5,
        margin: 5,
        borderColor: '#808080'

    },
    placeholder:{
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: '#eee',
        width: '100%',
        height: 150,
        borderRadius: 15
    },
    button: {
        margin: 8
    },
    map:{
        width: '100%',
        height: '100%'
    }
})

export default TrackMe; 