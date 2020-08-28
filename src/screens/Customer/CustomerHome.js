import React,{Component} from 'react';
import {View,Text,TextInput,TouchableOpacity,Image,ScrollView,StyleSheet,Dimensions} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/FontAwesome5';
import { Container, Header, Title, Content, Button, Left, Right, Body,  Tab, Tabs, ScrollableTab} from "native-base";
import Icon from 'react-native-vector-icons/Foundation';
import FontAweseomeIcon from 'react-native-vector-icons/FontAwesome5';
import Modal from 'react-native-modal';
import Geocoder from 'react-native-geocoding';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import DefaultButton from '../../components/UI/DefaultButton/DefaultButton'

//import FlatButton from './Button';
const GOOGLE_PLACES_API_KEY = 'AIzaSyBcs4ko-dTv7DhkZWp0BbcTs0z2nodA4y8'; 

Geocoder.init(GOOGLE_PLACES_API_KEY);

const { width } = Dimensions.get('window');

export default class CustomerHome extends Component
{
    state = {
        locationLatitude: '',
        locationLongitude: '',
        address: '',
        modalVisible: false           
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
    }

    ShowSearch=()=>
    {
        alert("The vendors list");
    }
    ShowOrder=()=>
    {
        alert("The orderd");
    }
    ShowMap=()=>
    {
        alert("The Map");
    }
    componentDidMount() {
        setTimeout(() => {this.scrollView.scrollTo({x: -30}) }, 1) // scroll view position fix
        //console.log('props',this.props.route.params.user.userName)
	}
    render()
    {
        const itemsCount = 50
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
                        color='green' 
                        onPress={this.modalVisibleHandler}
                        >
                            Set Location
                        </DefaultButton>
                    </Modal>

        //console.log('address',this.state.address)                
        return(
            <View>
                {modal}
                <TouchableOpacity onPress={this.modalVisibleHandler}>
                <View style={{flexDirection:'row',borderWidth:1,justifyContent:'center',
                            alignItems:'center',width:'90%',height:50,margin:'5%',borderRadius:118}}> 
                {/* <TextInput style={{borderWidth:1, borderColor:'black',margin:10, borderRadius:18,flex:1,flexDirection:'row'}}> */}
                <Text style={{flex: 1, textTransform:'uppercase', paddingLeft: 15, fontSize:16 }}>{this.state.address!=''? this.state.address : 'select your address'}</Text>
                <Icon name="target-two" style={{color:'black',paddingRight:15,fontSize:18}}/>
                 </View>
                </TouchableOpacity>    
                <Image
                    style={{width:345, height:120, marginLeft:'8%',borderRadius:10,marginTop:20}}
                    source={require('./Elements/1.jpg')}
                />
                
                <View style={{flexDirection: 'row',marginLeft:'15%',marginTop:12}}>    
                
                <TouchableOpacity onPress={()=> this.props.navigation.push('VenderSearch')}>
                    <View style={{ borderRadius: 15,
                                    width: '95%',
                                    height: 25,
                                    paddingVertical: 18,
                                    paddingHorizontal: 20, 
                                    backgroundColor: 'black',
                                    alignItems:'center',
                                    flexDirection: 'row',
                                    flex: 1,
                                    justifyContent: 'center',
                                    marginTop: 5,
                                    justifyContent:'space-between'}}>
                        <Text style={{ color: 'white',
                                        fontWeight: 'bold', 
                                        fontSize:12,
                                        textTransform: 'uppercase',
                                        textAlign: 'center',
                                        flexDirection:'row'}}>search
                                       <Feather name="search" size={15} color="white" paddingLeft={10}/> 
                                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.ShowOrder}>
                <View style={{ borderRadius: 15,
                                    width: '95%',
                                    height: 25,
                                    paddingVertical: 18,
                                    paddingHorizontal: 20, 
                                    backgroundColor: 'black',
                                    alignItems:'center',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    marginTop: 5,
                                    justifyContent:'space-between'}}>
                        <Text style={{ color: 'white',
                                        fontWeight: 'bold', 
                                        fontSize:12,
                                        textTransform: 'uppercase',
                                        textAlign: 'center',
                                        flexDirection:'row'}}>order
                                       <Feather name="shopping-bag" size={15} color="white" paddingLeft={10} /> 
                                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> this.props.navigation.push('CustomerMap')}>
                <View style={{ borderRadius: 15,
                                    width: '95%',
                                    height: 25,
                                    paddingVertical: 18,
                                    paddingHorizontal: 26, 
                                    backgroundColor: 'black',
                                    alignItems:'center',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    marginTop: 5,
                                    justifyContent:'space-between'}}>
                        <Text style={{ color: 'white',
                                        fontWeight: 'bold', 
                                        fontSize:12,
                                        textTransform: 'uppercase',
                                        textAlign: 'center',
                                        flexDirection:'row'}}>Map
                                       <Feather name="map-marker-alt" size={15} color="white" paddingLeft={10} /> 
                                        </Text>
                    </View>
                </TouchableOpacity>

                </View>  

                <Text style={{fontWeight: "bold",fontSize:15, marginLeft:'8%', marginTop:20}}>VENDORDS IN YOUR AREA</Text>

                <ScrollView ref={(scrollView) => { this.scrollView = scrollView; }}
                            style={styles.container}
                            //pagingEnabled={true}
                            horizontal= {true}
                            decelerationRate={0}
                            snapToOffsets={[...Array(itemsCount)].map((x, i) => (i * (width - 60)) )}
                            snapToAlignment={"start"}
                            contentInset={{
                            top: 0,
                            left: 30,
                            bottom: 0,
                            right: 30,}}>
                        {[...Array(itemsCount)].map((x, i) =>
                    <View style={[styles.view, {backgroundColor: i % 2 == 0 ? 'black' : 'yellow',}]} />)}
                </ScrollView>
        <Text style={{fontWeight: "bold",fontSize:15, marginLeft:'8%', marginTop:20}}>THE VENDORS YOU PREVIOUSLY PLACED ORDERS</Text>
        <ScrollView ref={(scrollView) => { this.scrollView = scrollView; }}
                            style={styles.container}
                            //pagingEnabled={true}
                            horizontal= {true}
                            decelerationRate={0}
                            snapToOffsets={[...Array(itemsCount)].map((x, i) => (i * (width - 60)) )}
                            snapToAlignment={"start"}
                            contentInset={{
                            top: 0,
                            left: 30,
                            bottom: 0,
                            right: 30,}}>
                        {[...Array(itemsCount)].map((x, i) =>
                    <View style={[styles.view, {backgroundColor: i % 2 == 0 ? 'black' : 'yellow',}]} />)}
                </ScrollView>
            </View>
        );
       
    }
}
const styles = StyleSheet.create({
    container: {},
    view: {
      marginTop: 10,
      //backgroundColor: 'blue',
      width: width - 300,
      margin: 10,
      height: 90,
      borderRadius: 10,
      borderWidth:1,
    },
    header:{
        backgroundColor: 'black'
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    headerText: {
        color: 'white'
    },
    modal: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        flex: 1,
        padding: 10
    },
  });