import React, {Component}  from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import { Container, Header, Left, Body, Right, Title, Subtitle , Button, Tab, Tabs, ScrollableTab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {shareLocation} from '../../store/actions/index'
import Geocoder from 'react-native-geocoding';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import LocationButton from '../../components/LocationSumButton/LocationSumButton'
import DefaultButton from '../../components/UI/DefaultButton/DefaultButton'

const GOOGLE_PLACES_API_KEY = 'AIzaSyBcs4ko-dTv7DhkZWp0BbcTs0z2nodA4y8'; 

Geocoder.init(GOOGLE_PLACES_API_KEY);

const { width } = Dimensions.get('window');

class MapSum extends Component {
    state = {
        locationLatitude: this.props.location?this.props.location[0]:'',
        locationLongitude: this.props.location?this.props.location[1]:'',
        address: '',
        modalVisible: false           
    }

    toggleModal = () => {
        this.setState(prevState => {
            return {
            modalVisible: prevState.modalVisible ? false: true
            }
        })
    }

    addressChangedHandler = (val) => {
        console.log(val)
        this.setState(prevState => {
            return {
              address: val
            };
          });
        Geocoder.from(val)
        .then(json => {
            var location = json.results[0].geometry.location;
            this.setState({
              locationLatitude: location.lat,
              locationLongitude: location.lng
            })
            //this.locationPicker.changeState(location);
        })
        .catch(error => console.warn(error));
        
    }

    modalVisibleHandler = () => {
        this.setState(prevState => {
            return {
            modalVisible: prevState.modalVisible ? false: true
            }
        })
        console.log("lat ",this.state.locationLatitude)
        if(this.state.address && this.state.locationLongitude && this.state.locationLatitude){
            this.props.onShareLocation(this.state.locationLatitude,this.state.locationLongitude)
        }
    }

    render(){
        const modal = <Modal 
                        isVisible={this.state.modalVisible} 
                        style={styles.modal} 
                        backdropOpacity={0.8}
                        animationIn="zoomInDown"
                        animationOut="zoomOutUp"
                        animationInTiming={600}
                        animationOutTiming={600}
                        backdropTransitionInTiming={600}
                        backdropTransitionOutTiming={600}
                        >
                        <Header style={styles.header} androidStatusBarColor='black' backgroundColor='#E0B743'>
                        <Left>
                            <Button transparent>
                            <Icon name="map" size={30} color="white" />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Filter your address</Title>
                        </Body>
                        </Header>
                        <GooglePlacesAutocomplete
                        //onChangeText= {this.shopNameChangedHandler} 
                        //value={this.state.controls.shopName.value}
                        query={{
                            key: GOOGLE_PLACES_API_KEY,
                            language: 'en', // language of the results
                            components: 'country:lk',
                        }}
                        onPress={( data,details = null) => {
                            console.log(data, details)
                            this.addressChangedHandler(data.description)
                        }}
                        //onPress={console.log(query)}
                        listViewDisplayed={false}  
                        
                        onFail={error => console.error(error)}
                        requestUrl={{
                            url:
                            'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
                            useOnPlatform: 'web',
                        }} // this in only required for use on the web. See https://git.io/JflFv more for details.
                        styles={{
                            textInputContainer: {
                            backgroundColor: 'rgba(0,0,0,0)',
                            borderTopWidth: 0,
                            borderBottomWidth: 0,
                            },
                            textInput: {
                            marginLeft: 0,
                            marginRight: 0,
                            height: 38,
                            color: '#5d5d5d',
                            fontSize: 16,
                            },
                            predefinedPlacesDescription: {
                            color: '#1faadb',
                            },
                        }}/>
                        <DefaultButton  
                        color='black' 
                        onPress={this.toggleModal}
                        >
                            Close
                        </DefaultButton>
                        <DefaultButton  
                        color='green' 
                        onPress={this.modalVisibleHandler}
                        >
                            Set Location
                        </DefaultButton>
                    </Modal>
        console.log('location in home', this.state.locationLatitude) 
        return(
            <View>
                {modal}
                <View style={styles.buttonContainer} >
                    <LocationButton title="Your location" data="Change your location" onPress={this.toggleModal}>
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

    },
    modal: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        flex: 1,
        padding: 10
    },
})

const mapDispatchToProps = dispatch => {
    return{
        onShareLocation : (lat,lon) => dispatch(shareLocation(lat,lon)),
    }
    }
    
    const mapStateToProps = state => {
        return {
            isLoading: state.ui.isLoading,
            location: state.location.currentLocationOfUser
            
        }
    }
    

    export default connect(mapStateToProps, mapDispatchToProps) (MapSum);