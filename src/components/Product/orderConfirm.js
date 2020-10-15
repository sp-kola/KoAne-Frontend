import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  // Text,
  Image,
  StatusBar,
  ScrollView,
  Dimensions
} from 'react-native';
import {ListItem, Body, Button, Text, Content, Row, Header, Left, Title} from 'native-base';
import {connect} from 'react-redux';
import {authLogout, getLoggedUser, updateLoggedCustomer, setCart, shareLocation, clearCart, createOrder} from '../../store/actions/index'
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DefaultButton from '../UI/DefaultButton/DefaultButton'
import DefaultInput from '../UI/DefaultInput/DefaultInput';
import Geocoder from 'react-native-geocoding';
import Modal from 'react-native-modal';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GOOGLE_PLACES_API_KEY = 'AIzaSyBcs4ko-dTv7DhkZWp0BbcTs0z2nodA4y8'; 

Geocoder.init(GOOGLE_PLACES_API_KEY);

const { width } = Dimensions.get('window');

// import DefaultButton from '../UI/DefaultButton/DefaultButton';

const cart = require('../../../assets/shopping.png');


class orderConfirm extends Component {

    state = {
    locationLatitude: '',
    locationLongitude: '',
    dataSource: this.props.cart ? this.props.cart : [],
    address: '',
    modalVisible: false,
    markedDates: this.props.selectedVendor.visitingDates,
    date: '',
    description: '',

    };
  

  renderItem = ({item}) => {
    var temp = item.quantity
    var price = temp * item.item.price
    return (
      <View style={styles.background}>
        <View style={styles.background1}>
          <Text style={styles.text1}>{item.item.productName}</Text>
          <Text>Rs. {item.item.price}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <Text>in cart : {temp}{'\t'}</Text>
        <Text style={{fontWeight: 'bold'}}>Rs. {price}{'\t'}</Text>
        </View>
      </View>
    );
  };
  componentDidMount() {
    console.log(this.props)
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

handleDate = (date) => {
    this.setState({
        date: date
    })
}

handleDescription = (val) => {
    this.setState({
        description: val
    })
}

handleConfirmOrder = async() => {
    const products = this.props.cart
    const description =  this.state.description
    const vendor = this.props.selectedVendor.id
    const lattitude = this.state.locationLatitude
    const longitude = this.state.locationLongitude
    const date = this.state.date
    const price = this.props.price

    if(products && vendor && lattitude && longitude && date && price){
        const orderData = {
            products,
            description,
            vendor,
            lattitude,
            longitude,
            date, 
            price
        }
        await this.props.onCreateOrder(orderData)
        await this.props.onClearCart()
        this.props.navigation.push('Recipt')
    }
    else{
        alert('Validation error')
        //this.props.navigation.pop(2)
    }
}

handleCancelOrder = async() => {
    await this.props.onClearCart()
    this.props.navigation.pop(2)
}


  render() {
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
    return (
      // <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.topbackground}>
            <Icon name="shopping-cart" color="white" size={50} />
            <Text style={{fontWeight: 'bold'}}> {this.props.price} </Text>
            <TouchableOpacity>
              <Button style={styles.button}>
                <Text style={styles.text2}>
                  YOUR ORDER
                </Text>
              </Button>
            </TouchableOpacity>
        </View>
        {modal}
        <Text style={styles.label}>Proceeding to CheckOut: </Text>
    <Text style={styles.label}>Set Date: {this.state.date}</Text>
        {this.state.markedDates.map(date => {
            return(
                <DefaultButton color='black' onPress={() => this.handleDate(date)}>
                    {date}
                </DefaultButton>    
            )
        })}
        <DefaultButton color='green' onPress={this.toggleModal}>
            {this.state.locationLatitude ? 'Change location' : 'Set Location'}
        </DefaultButton>
        <Text style={styles.label}>description: </Text>
        <DefaultInput
            placeholder= 'add any special note'
            onChangeText= {this.handleDescription} 
            value={this.state.description}
            //style={styles.inputField}
        />
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />

        <DefaultButton color='black' onPress={this.handleConfirmOrder}>
            confirm order
         </DefaultButton>
         <DefaultButton color='red' onPress={this.handleCancelOrder}>
            cancel order
         </DefaultButton>   
      </ScrollView>

      // </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  // item: {
  //   backgroundColor: '#f9c2ff',
  //   padding: 20,
  //   marginVertical: 8,
  //   marginHorizontal: 16,
  // },
  background: {
    backgroundColor: '#cfcfcf',
    //width: '100%',
    // height: '100%',
    padding: 5,
    marginTop: 15,
    height: 50,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    // borderRadius: 25,
    // padding: 10,
    // borderColor: 'rgb(7, 7, 7)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  background1: {
    marginLeft: 25,
  },
  topbackground: {
    backgroundColor: '#e0b743',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    borderColor: 'rgb(15, 17, 20)',
    height: 90,
    padding: 10,
    paddingLeft: 40,
    paddingRight: 40,
    alignContent: 'space-between',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  text: {
    fontSize: 16,
    marginTop: 40,
    width: 50,
    height: 30,
    backgroundColor: 'blue',
  },

  text1: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  text2: {
    fontSize: 15,
    // fontWeight: 'bold',
    color: 'white',
    justifyContent: 'center',
  },
  button: {
    width: 150,
    // marginTop: 15,
    // marginLeft: 150,
    // marginBottom: 50,
    height: 60,
    borderRadius: 40,
    justifyContent: 'space-around',
    // width: 100,
    // height: 100,
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 10,
    // borderRadius: 100,
    backgroundColor: '#000',
  },

  cartImage: {
    width: 50,
    height: 50,
    marginTop: 20,
    marginLeft: 30,
  },
  iteminside: {
    flex: 1,
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    //flex: 1,
    padding: 10,
    //height: 200,
    justifyContent: 'flex-start',
    margin: 0,
  },
});

const mapStateToProps = state => {
  return{
      loggedCustomer: state.auth.id,
      location: state.location.currentLocationOfUser,
      selectedVendor: state.vendor.selectedVendor,
      cart: state.order.cart,
      price: state.order.price
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onSetCart : (cart) => dispatch (setCart(cart)),
      onShareLocation : (lat,lon) => dispatch(shareLocation(lat,lon)),
      onCreateOrder : (orderData) => dispatch(createOrder(orderData)),
      onClearCart : () => dispatch(clearCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (orderConfirm);
