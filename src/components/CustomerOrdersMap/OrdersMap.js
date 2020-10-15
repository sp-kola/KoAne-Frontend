import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import MapView from 'react-native-maps';
import GeoLocation from '@react-native-community/geolocation'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Container, Header, Button,  Fab, Footer, FooterTab, Content, Toast } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DefaultButton from '../UI/DefaultButton/DefaultButton'
import {shareLocation, getCustomerOrders} from '../../store/actions/index'

class OrdersMap extends Component{
    
    state= {
        focusedLocation:{
            latitude: 7.2906 ,
            longitude:80.6337 ,
            latitudeDelta: 0.0122,
            longitudeDelta: Dimensions.get("window").width/ Dimensions.get("window").height * 0.0122
        },
        locationChose: false,
        shareLocation: false,
        watchID : null,
        pos : null,
        active: false,
        selectedMarker : null,
        viewOrders: false
    }

    componentDidMount(){
        console.log('loading')
       // this.props.onCustomerOrders()
        //console.log('orders:',this.props.orders)
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

    }

    shareLocationHandler = event => {
        if(this.state.locationChose == false){
            alert('First choose a location in the map')
        }
        else{
            this.setState(prevState => {
                return {
                    ...prevState,
                    shareLocation: true,

                }
            })
            console.log(this.state.focusedLocation.latitude)
            console.log(this.state.focusedLocation.longitude)

            this.props.onShareLocation(this.state.focusedLocation.latitude,this.state.focusedLocation.longitude)
        }
    }

    stopSharingLocationHandler = event => {
        GeoLocation.clearWatch(this.state.watchID);
        GeoLocation.stopObserving();
        this.setState(prevState => {
           return {
               ...prevState,
               shareLocation: false,
               watchID: null,
               pos: null
           }
       }) 
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
            alert(`Fetching the Position failed, please pick one manually!
(HINT: Check your GPS Connection in the device!)
            `)
        })
    }

    getOrdersHandler = () => {
        this.getLocationHandler()
        this.setState(prevState => {
            return{
                ...prevState,
                viewOrders: true
            }
        })
    }

    selectedMarker = (marker) => {
        //alert(marker.description)
        this.setState(prevState => {
            return {
                ...prevState,
                selectedMarker: marker
            }
        })
        //console.log(marker)
    }

    render(){

        let marker = null;

        if (this.state.locationChose){
            marker = <MapView.Marker coordinate= {this.state.focusedLocation}/>
        }

        let orders = null

        if(this.state.viewOrders){
            orders = this.props.orders.map(marker => (
            <MapView.Marker 
              coordinate={marker}
              title={marker.vendor}
             onPress = {() => this.selectedMarker(marker)}
            >
            <Icon name="map-pin" size={20} color="black" style={styles.iconStyle}/>
            </MapView.Marker>
          ))
        }

        let pos = null;

        if(this.state.selectedMarker){
            pos = <Text>{this.state.selectedMarker.description} </Text>
        }

        let shareLocation = null

        if(this.state.shareLocation){
            shareLocation=
            <Button  onPress={this.stopSharingLocationHandler} danger>
            <Icon name="stop" size={20} color="red" style={styles.iconStyle}/>
            <Text style={styles.textStyle}>Stop Sharing</Text>
            </Button>
        }
        else{
            shareLocation =
            <Button color='black' onPress={this.shareLocationHandler}>
            <Icon name="share" size={20} color="#fff" style={styles.iconStyle}/>
            <Text style={styles.textStyle}>Share location</Text>
            </Button>
        }

        return(
            <Container>
            <View style={styles.container}>
                <View style={styles.mapContainer}>
                    <MapView
                    initialRegion={this.state.focusedLocation}
                    style={styles.map}
                    onPress={this.pickLocationHandler}
                    //onRegionChange={this.onRegionChange}
                    ref={ref => this.map = ref}
                    >
                    {marker}
                    {orders}
                    </MapView>
                </View>
                <View style={styles.textContainer}>
                        <Text>Hello!</Text>
                        {pos}
                </View>
            </View>
            </Container>
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
    textContainer: {
        width: '100%',
        height: '20%',
        backgroundColor: 'rgba(255,255,255,0.4)',
        borderWidth: 1,
        borderRadius: 15,
        padding: 5,
        margin: 5,
        borderColor: '#808080'

    },
    map:{
        width: '100%',
        height: '100%'
    },
    footerTabStyle: {
        backgroundColor: 'black',
        
    },
    footerStyle: {
        backgroundColor: 'black',
    },
    iconStyle: {
        //backgroundColor: 'white',
       // color: 'white'
    },
    textStyle: {
        fontFamily:'Open Sans',
        color: 'white'
    },
})

const mapStateToProps = state => {
    //console.log(state)
    return{
        orders: state.location.orders,
        otherTypeUserLocation: state.location.otherTypeUserLocation,
        type: state.location.type,
        currentLocationOfUser: state.location.currentLocationOfUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onShareLocation: (lat,lon) => dispatch(shareLocation(lat,lon)),
        onCustomerOrders: () => dispatch(getCustomerOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersMap); 