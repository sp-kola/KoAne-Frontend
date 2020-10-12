/* eslint-disable prettier/prettier */
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Switch,
  Dimensions
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Tab,
  Tabs,
  ScrollableTab,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ViewProducts from '../../components/Product/viewProduct';
import {authLogout, getLoggedUser, updateLoggedCustomer, getLoggedVendor, updateLoggedVendor, searchVendor} from '../../store/actions/index';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DefaultButton from '../../components/UI/DefaultButton/DefaultButton'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Geocoder from 'react-native-geocoding';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { selectVendor } from '../../store/actions/vendor';

const GOOGLE_PLACES_API_KEY = 'AIzaSyBcs4ko-dTv7DhkZWp0BbcTs0z2nodA4y8'; 

Geocoder.init(GOOGLE_PLACES_API_KEY);

const { width } = Dimensions.get('window');

class VendorHome extends Component {

  state= {
    isEnabled: this.props.delivering,
    email: '',
    firstName: '',
    lastName: '',
    contactNo: '',
    visitingDates: [],
    vistingPlaces: [],
    nic: '',
    bio: '',
    businessName: '',
    businessAddress: '',
    timeModal: false,
    temp: new Date(),
    vehicleNo: '',
    startTime: this.props.startTime!= undefined ? this.props.startTime: "",
    endTime: this.props.endTime!= undefined ? this.props.endTime: "",
    mode: 'date',
    show: false,
    startTimePicker: false,
    endTimePicker: false,
    calandarModal: false,
    markedDates: this.props.visitingDates != undefined ? this.props.visitingDates: [],
    visitingMarkedDates: [],
    locationModalShow: false,
    mapModalShow: false,
    markedPlaces: this.props.visitingPlaces!= undefined ? this.props.visitingPlaces: [],
    placeToAdd: '',
    isUpdateModalVisible: false
  }

  async componentDidMount(){
    await this.props.onLogIn()
    await this.props.onSearch(this.props.id)
  }

  toggleUpdateModal = () => {
    this.setState(prevState => {
      return{
        isUpdateModalVisible: !prevState.isUpdateModalVisible
      }
    })
  }

  placeToAddTextHandler = (val) => {
    this.setState({
      placeToAdd: val
    })
  }

  addToMarkDates = (day) => {
    var temp = this.state.markedDates
    var dateToAdd = day.dateString
    // var dateObject = {
    //   dateToAdd :
    // }
    var flag = temp.find(data => data == dateToAdd)
    if(flag){
      temp = temp.filter(date => date != dateToAdd)
      this.setState({
        markedDates : temp
      })
    }
    else{
      temp.push(dateToAdd)
      this.setState({
        markedDates : temp
      })
    }
    console.log('dates ', this.state.markedDates)
  }

  toggleTimeModal = () => {
    this.setState(prevState => {
      return{
        timeModal: !prevState.timeModal
      }
    })
  }

  toggleLocationModal = () => {
    this.setState(prevState => {
      return{
        locationModalShow: !prevState.locationModalShow
      }
    })
  }

  toggleMapModal = () => {
    this.setState(prevState => {
      return{
        mapModalShow: !prevState.mapModalShow
      }
    })
  }

  addToMarkPlaces = (day) => {
    var temp = this.state.markedDates
    var dateToAdd = day.dateString
    // var dateObject = {
    //   dateToAdd :
    // }
    var flag = temp.find(data => data == dateToAdd)
    if(flag){
      temp = temp.filter(date => date != dateToAdd)
      this.setState({
        markedDates : temp
      })
    }
    else{
      temp.push(dateToAdd)
      this.setState({
        markedDates : temp
      })
    }
    console.log('dates ', this.state.markedDates)
  }

  toggleCalendarModal = () => {
    this.setState(prevState => {
      return{
        calandarModal: !prevState.calandarModal
      }
    })
  }

  setTime = () => {
    this.setState(prevState => {
      return{
        timeModal: !prevState.timeModal,

      } 
    })
    this.handleUpdate()
  }
  
  showDatepicker = () => {
    this.setState(prevState => {
        return{
            ...prevState,
            mode: 'date',
            show: true
        }
    })
}
  showStartTimepicker = () => {
    this.setState(prevState => {
        return{
            ...prevState,
            mode: 'time',
            startTimePicker: !prevState.startTimePicker
        }
    })
  }

  showEndTimepicker = () => {
    this.setState(prevState => {
        return{
            ...prevState,
            mode: 'time',
            endTimePicker: !prevState.endTimePicker
        }
    })
  }

  hideDatepicker = () => {
    this.setState(prevState => {
        return{
            ...prevState,
            show: true
        }
    })
}
  
  hideStartTimepicker = () => {
    this.setState(prevState => {
        return{
            ...prevState,
            startTimePicker: true
        }
    })
  }

  hideEndTimepicker = () => {
    this.setState(prevState => {
        return{
            ...prevState,
            endTimePicker: true
        }
    })
  }

  onChangeStartTime = (val) => {
    var hours = val.getHours()
    var min = val.getMinutes()
    var time = hours.toString()+":"+min.toString()
    this.setState({
      startTime : time,
      startTimePicker: false
    })
    
    console.log(this.state.startTime)
  }

  onChangeEndTime = (val) => {
    var hours = val.getHours()
    var min = val.getMinutes()
    var time = hours.toString()+":"+min.toString()
    this.setState({
      endTime : time,
      endTimePicker: false
    })
  }

  toggleSwitch = async() => {
    this.setState(prevState => {
       return {
         isEnabled: !prevState.isEnabled
      }
    })
    await this.handleUpdate()
  };

  clearStops = () => {
    this.setState({
      markedPlaces: []
    })
  }

  addressChangedHandler = (val) => {
    //console.log(val)
    var temp = this.state.markedPlaces
    var flag = temp.find(data => data == val)
    if(flag){
      temp = temp.filter(data => data != val)
      this.setState({
        markedPlaces : temp
      })
    }
    else{
      temp.push(val)
      this.setState({
        markedPlaces : temp
      })
    }
    console.log('dates ', this.state.markedPlaces)
    
}

handleFirstName = (val) => {
  this.setState({
    firstName: val
  })
}

handleEmail = (val) => {
  this.setState({
    email: val
  })
}

handleLastName = (val) => {
  this.setState({
    lastName: val
  })
}

handleContactNo = (val) => {
  this.setState({
    contactNo: val
  })
}

handleNIC = (val) => {
  this.setState({
    nic: val
  })
}

handleBusinessName = (val) => {
  this.setState({
    businessName : val
  })
}

handleBusinessAddress = (val) => {
  this.setState({
    businessAddress: val
  })
}

handleVehicleNo = (val) => {
  this.setState({
    vehicleNo: val
  })
}

handleBio = (val) => {
  this.setState({
    bio: val
  })
}

handleUpdate = () => {
//(email,firstName,lastName,contactNo,visitingDates, visitingPlaces,nic,businessName, businessAddress,vehicleNo,delivering, startTime, endTime, bio)
const email = this.state.email ? this.state.email : this.props.email
const firstName = this.state.firstName ? this.state.firstName : this.props.firstName
const lastName = this.state.lastName ? this.state.lastName : this.props.lastName
const contactNo = this.state.contactNo ? this.state.contactNo : this.props.contactNo
const visitingDates = this.state.markedDates ? this.state.markedDates : this.props.visitingDates
const visitingPlaces = this.state.markedPlaces != [] ? this.state.markedPlaces : this.props.visitingPlaces
const nic = this.state.nic ? this.state.nic : this.props.nic
const businessName = this.state.businessName ? this.state.businessName : this.props.businessName
const businessAddress = this.state.businessAddress ? this.state.businessAddress : this.props.businessAddress
const startTime = this.state.startTime ? this.state.startTime : this.props.startTime
const endTime = this.state.endTime ? this.state.endTime : this.props.endTime
const delivering = this.state.isEnabled ? this.state.isEnabled : this.props.delivering 
const vehicleNo = this.state.vehicleNo ? this.state.vehicleNo : this.props.vehicleNo
const bio = this.state.bio ? this.state.bio : this.props.bio

if(email && firstName && lastName && contactNo && nic && businessAddress && businessName){
  this.props.onUpdateVendor(email,firstName,lastName,contactNo,visitingDates, visitingPlaces,nic,businessName, businessAddress,vehicleNo,delivering, startTime, endTime, bio)
}
else{
  alert('Validation error')
}

this.setState({
  startTimePicker: false,
  endTimePicker: false,
  calandarModal: false,
  locationModalShow: false,
  mapModalShow: false,
  isUpdateModalVisible: false
})

}
  
handlePublicView = async() => {

  await this.props.onSearch(this.props.id)
  if(this.props.selectedVendor){
    console.log('moving to public view')
    await this.props.nav.navigate('VendorPublicView')
  }
  

}


  render(){
    // console.log('hello ', this.props.visitingDates, this.props.visitingPlaces, this.props.startTime, this.props.endTime)
    var updateModal = <Modal 
                        isVisible={this.state.isUpdateModalVisible} 
                        style={styles.modal} 
                        backdropOpacity={0.8}
                        animationIn="zoomInDown"
                        animationOut="zoomOutUp"
                        animationInTiming={600}
                        animationOutTiming={600}
                        backdropTransitionInTiming={600}
                        backdropTransitionOutTiming={600}
                        swipeDirection={['up', 'left', 'right', 'down']}
                        >
                        <ScrollView>  
                        <Header style={styles.header} androidStatusBarColor='black' backgroundColor='#E0B743'>
                        <Left>
                            {/* <Button transparent>
                            <Icon name="map" size={30} color="white" />
                            </Button> */}
                        </Left>
                        <Body>
                            <Title>Updating profile</Title>
                        </Body>
                        </Header>
                        
                        <Text style={styles.label}>first name: </Text>
                        <DefaultInput
                            placeholder= {this.props.firstName}
                            onChangeText= {this.handleFirstName} 
                            value={this.state.firstName}
                            //style={styles.inputField}
                        />
                        <Text style={styles.label}>last Name: </Text>
                        <DefaultInput
                            placeholder= {this.props.lastName}
                            onChangeText= {this.handleLastName} 
                            value={this.state.lastName}
                            //style={styles.inputField}
                        /> 
                        <Text style={styles.label}>email: </Text>
                        <DefaultInput
                            placeholder= {this.props.email}
                            onChangeText= {this.handleEmail} 
                            value={this.state.email}
                            //style={styles.inputField}
                        />
                        <Text style={styles.label}>nic: </Text>
                        <DefaultInput
                            placeholder= {this.props.nic}
                            onChangeText= {this.handleNIC} 
                            value={this.state.nic}
                            //style={styles.inputField}
                        />
                        <Text style={styles.label}>Business Name: </Text>
                        <DefaultInput
                            placeholder= {this.props.businessName}
                            onChangeText= {this.handleBusinessName} 
                            value={this.state.businessName}
                            //style={styles.inputField}
                        />
                        <Text style={styles.label}>Business Address: </Text>
                        <DefaultInput
                            placeholder= {this.props.businessAddress}
                            onChangeText= {this.handleBusinessAddress} 
                            value={this.state.businessAddress}
                            //style={styles.inputField}
                        />
                        <Text style={styles.label}>Vehicle No: </Text>
                        <DefaultInput
                            placeholder= {this.props.vehicleNo}
                            onChangeText= {this.handleVehicleNo} 
                            value={this.state.vehicleNo}
                            //style={styles.inputField}
                        />
                        <Text style={styles.label}>Bio: </Text>
                        <DefaultInput
                            placeholder= {this.props.bio}
                            onChangeText= {this.handleBio} 
                            value={this.state.bio}
                            //style={styles.inputField}
                        />
                        <Text style={styles.label}>contact number: </Text>
                        <DefaultInput
                            placeholder= 'contact number'
                            onChangeText= {this.handleContactNumber} 
                            value={this.state.contactNumber}
                            //style={styles.inputField}
                        />
                        
                        <DefaultButton  
                        color='black' 
                        onPress={this.toggleUpdateModal}
                        >
                            close
                        </DefaultButton>
                        <DefaultButton  
                        color='#2ba685' 
                        onPress={this.handleUpdate}
                        >
                            update
                        </DefaultButton>
                        </ScrollView>
                    </Modal>
    var timeModal = <Modal 
                      isVisible={this.state.timeModal} 
                      style={styles.modal} 
                      backdropOpacity={0.8}
                      animationIn="zoomInDown"
                      animationOut="zoomOutUp"
                      animationInTiming={600}
                      animationOutTiming={600}
                      backdropTransitionInTiming={600}
                      backdropTransitionOutTiming={600}
                      swipeDirection={['up', 'left', 'right', 'down']}
                      >
                      <Header style={styles.header} androidStatusBarColor='black' backgroundColor='#E0B743'>
                      <Left>
                          {/* <Button transparent>
                          <Icon name="map" size={30} color="white" />
                          </Button> */}
                      </Left>
                      <Body>
                          <Title>Updating Time</Title>
                      </Body>
                      </Header>
                      <DateTimePickerModal
                        isVisible={this.state.startTimePicker}
                        mode="time"
                        date= {new Date()}
                        onConfirm={this.onChangeStartTime}
                        onCancel={this.hideStartTimepicker}
                      />
                      <DateTimePickerModal
                        isVisible={this.state.endTimePicker}
                        mode="time"
                        date= {new Date()}
                        onConfirm={this.onChangeEndTime}
                        onCancel={this.hideEndTimepicker}
                      />
                      <Text style={styles.label}>start time: </Text>
                      <View style={{flexDirection: 'row', width: 350 ,justifyContent: 'space-between', alignContent: 'center', alignItems: 'center'}}>
                      <DefaultInput
                          placeholder= 'start time'
                          onChangeText= {this.onChangeStartTime} 
                          value={this.state.startTime}
                          //style={styles.inputField}
                          editable={false}
                      />
                      <TouchableOpacity onPress={this.showStartTimepicker}>
                        <Icon name="clock-o" size={29} color="black" />
                      </TouchableOpacity>
                      </View>
                      <Text style={styles.label}>end time: </Text>
                      <View style={{flexDirection: 'row', width: 350 ,justifyContent: 'space-between', alignContent: 'center', alignItems: 'center'}}>
                      <DefaultInput
                          placeholder= 'end time'
                          onChangeText= {this.onChangeEndTime} 
                          value={this.state.endTime}
                          //style={styles.inputField}
                          editable={false}
                      />
                      <TouchableOpacity onPress={this.showEndTimepicker}>
                        <Icon name="clock-o" size={29} color="black" />
                      </TouchableOpacity>
                      </View>
                      <DefaultButton  
                      color='black' 
                      onPress={this.toggleTimeModal}
                      >
                          close
                      </DefaultButton>
                      <DefaultButton  
                      color='green' 
                      onPress={this.setTime}
                      >
                          set time
                      </DefaultButton>
                  </Modal>
    var selectedDates = null
    if(this.state.markedDates){
      selectedDates = this.state.markedDates.map(
        date => <Text style={styles.selectedDate}>{date}</Text>
      )
    }
    var seletedPlaces = null
    if(this.state.markedPlaces){
      seletedPlaces = this.state.markedPlaces.map(
        data => <Text style={styles.selectedDate}>{data}</Text>
      )
    }
    var dataModal = <Modal 
                      isVisible={this.state.calandarModal} 
                      style={styles.modal} 
                      backdropOpacity={0.8}
                      animationIn="zoomInDown"
                      animationOut="zoomOutUp"
                      animationInTiming={600}
                      animationOutTiming={600}
                      backdropTransitionInTiming={600}
                      backdropTransitionOutTiming={600}
                      swipeDirection={['up', 'left', 'right', 'down']}
                      >
                      <Header style={styles.header} androidStatusBarColor='black' backgroundColor='#E0B743'>
                      <Left>
                          {/* <Button transparent>
                          <Icon name="map" size={30} color="white" />
                          </Button> */}
                      </Left>
                      <Body>
                          <Title>Updating Time</Title>
                      </Body>
                      </Header>
                      <Calendar
                        minDate = {new Date()}
                        onDayLongPress={(day) => {this.addToMarkDates(day)}}
                        onDayPress={(day) => {this.addToMarkDates(day)}}
                      />
                      <View>
                        <Text style={styles.selectedDateHeader}>Selected dates: </Text>
                        <View style={{  alignContent: 'center'}}>
                          {selectedDates!= null ? selectedDates :<Text>Add some dates</Text>}
                        </View>
                      </View>  
                      <DefaultButton  
                      color='black' 
                      onPress={this.toggleCalendarModal}
                      
                      >
                          close
                      </DefaultButton>
                      <DefaultButton  
                      color='green' 
                      onPress={this.handleUpdate}
                      >
                          update dates
                      </DefaultButton>
                  </Modal>
    var mapModal = <Modal 
                    isVisible={this.state.mapModalShow} 
                    style={styles.modal} 
                    backdropOpacity={0.8}
                    animationIn="zoomInDown"
                    animationOut="zoomOutUp"
                    avoidKeyboard = {true}
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
                    onPress={this.toggleMapModal}
                    >
                        Close
                    </DefaultButton>
                    <DefaultButton  
                    color='green' 
                    onPress={this.toggleMapModal}
                    >
                        Set Location
                    </DefaultButton>
                </Modal>
    var locationModal = <Modal 
                          isVisible={this.state.locationModalShow} 
                          style={styles.modal} 
                          backdropOpacity={0.8}
                          animationIn="zoomInDown"
                          animationOut="zoomOutUp"
                          animationInTiming={600}
                          animationOutTiming={600}
                          backdropTransitionInTiming={600}
                          backdropTransitionOutTiming={600}
                          swipeDirection={['up', 'left', 'right', 'down']}
                          avoidKeyboard = {true}
                          >
                          <Header style={styles.header} androidStatusBarColor='black' backgroundColor='#E0B743'>
                          <Left>
                              {/* <Button transparent>
                              <Icon name="map" size={30} color="white" />
                              </Button> */}
                          </Left>
                          <Body>
                              <Title>Updating Stops</Title>
                          </Body>
                          </Header>
                          {mapModal}
                          <DefaultInput
                          placeholder= 'add a stop'
                          onChangeText= {this.placeToAddTextHandler} 
                          value = {this.state.placeToAdd}
                          //style={styles.inputField}
                          />
                          <DefaultButton  
                          color='#3285a8' 
                          onPress={() => this.addressChangedHandler(this.state.placeToAdd)}
                          
                          >
                              Add stop
                          </DefaultButton>
                          <DefaultButton  
                          color='#ba422d' 
                          onPress={this.clearStops}
                          
                          >
                              Clear all stops
                          </DefaultButton>
                          <View>
                            <Text style={styles.selectedDateHeader}>Selected stops: </Text>
                            <View style={{  alignContent: 'center'}}>
                              {seletedPlaces!= null ? seletedPlaces :<Text>Add some places</Text>}
                            </View>
                          </View>  
                          <DefaultButton  
                          color='#3285a8' 
                          onPress={this.toggleMapModal}
                          
                          >
                              search for a location 
                          </DefaultButton>
                          <DefaultButton  
                          color='black' 
                          onPress={this.toggleLocationModal}
                          
                          >
                              close
                          </DefaultButton>
                          <DefaultButton  
                          color='green' 
                          onPress={this.handleUpdate}
                          >
                              update stops
                          </DefaultButton>
                      </Modal>
                  //console.log('time modal', this.state.timeModal)
    return (
      <ScrollView keyboardShouldPersistTaps= "always">
        {timeModal}
        {dataModal}
        {locationModal}
        {updateModal}
        <View style={{flex: 1, width: '100%'}}>
          <View style={styles.wall}>
            <ImageBackground
              source={require('./wall.jpg')}
              style={styles.backgroundImage}
            />
          </View>
          <View style={styles.posImage}>
            <Image source={require('./logo.png')} style={styles.profileImage} />
          </View>
          {/* <View style={[styles.cameraImage, styles.coverCamera]}>
            <TouchableOpacity>
              <Icon name="camera" size={17} color="black" />
            </TouchableOpacity>
          </View> */}
          {/* <View style={[styles.cameraImage, styles.proCamera]}>
            <TouchableOpacity>
              <Icon name="camera" size={17} color="black" />
            </TouchableOpacity>
          </View> */}
          <TouchableOpacity onPress={() =>  this.props.nav.navigate('VendorPublicView')}>
            <View style={styles.buttonPublicView}>
              <Text style={[styles.text, styles.publicView]}>
                {' '}
                PUBLIC VIEW <Icon name="eye" size={15} color="white" />
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toggleUpdateModal}>
            <View style={styles.buttonPublicView}>
              <Text style={[styles.text, styles.publicView]}>
                {' '}
                UPDATE <Icon name="edit" size={15} color="white" />
              </Text>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={[styles.text, styles.profileName]}>{this.props.businessName? this.props.businessName: 'N/A'}</Text>
            <Text style={[styles.text, styles.profileDetails]}>{this.props.firstName ? this.props.firstName+" "+ this.props.lastName: 'N/A'}</Text>
            <Text style={[styles.text, styles.profileDetails]}>{this.props.email ? this.props.email: 'N/A'}</Text>
            <Text style={[styles.text, styles.profileBioDetails]}>{this.props.bio ? this.props.bio: 'add your bio'}</Text>
          </View>
          <View style={styles.statusView}>
            <Switch
              style={styles.statusSwitch}
              trackColor={{false: '#b9b9ba', true: '#98c99c'}}
              thumbColor={this.state.isEnabled ? 'green' : 'red'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={this.toggleSwitch}
              value={this.state.isEnabled}
            />
            <Text style={[styles.text, styles.status]}>
              {' '}
              {this.state.isEnabled ? 'On the roads' : 'Not delivering now'}
            </Text>
          </View>
          <View style={styles.orderProductView}>
            <TouchableOpacity
              onPress={() => {
                props.nav.push('viewVendorProduct');
              }}>
              <View style={styles.buttonViewOrders}>
                <Text style={[styles.text, styles.viewOrders]}>
                  {' '}
                  VIEW ORDERS <Icon name="list-alt" size={16} color="white" />
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props.nav.push('Test');
              }}>
              <View style={styles.buttonAddProduct}>
                <Text style={[styles.text, styles.viewOrders]}>
                  {' '}
                  ADD PRODUCT <Icon name="plus-circle" size={16} color="white" />
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.deliveryDetailsView}>
            <View style={styles.deliveryHoursView}>
              <TouchableOpacity onPress={this.toggleTimeModal}>
                <Icon name="clock-o" size={29} color="black" />
              </TouchableOpacity>
              <Text style={styles.deliveryHours}>
                <Text> Normal delivery hours </Text>
                <Text style={styles.deliveryDetails}> {this.state.startTime? this.state.startTime: "N/A"} - {this.state.endTime? this.state.endTime: "N/A"} </Text>
              </Text>
            </View>
            <View style={styles.deliveryHoursView}>
              <TouchableOpacity onPress={this.toggleCalendarModal}>
                <Icon name="calendar" size={25} color="black" />
              </TouchableOpacity>
              <Text style={[styles.deliveryHours], {alignItems: 'center', alignContent: 'space-between', paddingRight: 10}}>
                <Text> Next visiting date </Text>
            <Text style={styles.deliveryDetails}>{this.state.markedDates[0]!= undefined ? this.state.markedDates[0]: 'add your delivery dates'}</Text>
              </Text>
            </View>
            <View style={[styles.deliveryHoursView]}>
              <TouchableOpacity onPress={this.toggleLocationModal}>
                <Icon name="map" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.deliveryHours}> Routes </Text>
              <View style={[styles.deliveryHours], {alignItems: 'center', alignContent: 'space-between', paddingRight: 10}}>
                <Text style={styles.deliveryDetails}>
                {this.props.visitingPlaces != undefined ? this.props.visitingPlaces.map(data => data + "  "): 'add your stops'}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.deliveryDetailsView}>
            <View style={styles.deliveryHoursView}>
              <TouchableOpacity>
                <Icon
                  name="truck"
                  size={22}
                  color="black"
                  style={{transform: [{rotateY: '180deg'}]}}
                />
              </TouchableOpacity>
              <Text style={styles.deliveryHours}>
                <Text>Vehicle number</Text>
                <Text style={styles.deliveryDetails}>{this.props.vehicleNo ? this.props.vehicleNo:' add your vehicle number'} </Text>
              </Text>
            </View>
            <View style={styles.deliveryHoursView}>
              <TouchableOpacity>
                <Icon name="phone" size={25} color="black" />
              </TouchableOpacity>
              <Text style={styles.deliveryHours}>
                <Text> Phone number </Text>
                <Text style={styles.deliveryDetails}> {this.props.contactNo? this.props.contactNo: 'N/A'} </Text>
              </Text>
            </View>
            <View style={styles.deliveryHoursView}>
              <TouchableOpacity>
                <Icon name="map-marker" size={25} color="black" />
              </TouchableOpacity>
              <Text style={styles.deliveryHours}> Business address </Text>
              <View style={styles.deliveryHours}>
                <Text style={styles.deliveryDetails}>
                {this.props.businessAddress? this.props.businessAddress: 'N/A'}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.deliveryDetailsView}>
            <View style={[styles.deliveryHoursView, styles.reviews]}>
              <Text style={[styles.deliveryDetails, styles.reviews]}>3.9 </Text>
              <TouchableOpacity>
                <Icon name="star" size={22} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.deliveryHoursView}>
              <Text style={styles.deliveryHours}>
                <Text style={styles.deliveryDetails}> Kavindu Gunaratne </Text>
                <Text> Pleasant service </Text>
              </Text>
            </View>
            <View style={styles.deliveryHoursView}>
              <Text style={styles.deliveryHours}>
                <Text style={styles.deliveryDetails}> Gayani Kariyawasam </Text>
                <Text> Delicious food </Text>
              </Text>
            </View>
          </View>
          <ViewProducts />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  selectedDateHeader : {
    fontWeight: 'bold',
    marginTop: 5
  },
  selectedDates: {
    marginLeft: 10,
    marginTop: 5,
    paddingLeft: 15
  },
  header: {
    backgroundColor: 'black',
  },
  text: {
    fontFamily: 'OpenSans-Regular',
  },

  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#e0b743',
  },
  posImage: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 120,
    left: '9%',
    alignSelf: 'flex-start',
    zIndex: 50,
  },
  backgroundImage: {
    width: '100%',
    height: 180,
  },
  wall:{
    width: '100%',
    height: 180,
  },
  coverCamera: {
    position: 'absolute',
    left: '85%',
    top: 140,
    zIndex: 60,
  },
  proCamera: {
    position: 'absolute',
    left: '31%',
    top: 190,
    zIndex: 60,
  },
  cameraImage: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 30,
    height: 30,
    borderRadius: 120,
    borderWidth: 1,
    borderColor: '#e0b743',
  },
  publicView: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonPublicView: {
    top: 10,
    left: '63%',
    justifyContent: 'center',
    width: '34%',
    height: 35,
    backgroundColor: '#e0b743',
    margin: 5,
    borderRadius: 30,
  },
  profileName: {
    fontSize: 26,
    fontWeight: '700',
    alignSelf: 'flex-start',
    left: '3%',
    top: 5,
  },
  profileDetails: {
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'flex-start',
    left: '5%',
    top: 3,
  },
  profileBioDetails: {
    fontSize: 18,
    fontWeight: '600',
    fontStyle: 'italic',
    alignSelf: 'flex-start',
    left: '5%',
    top: 3,
  },
  statusView: {
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-start',
    left: '3%',
  },
  statusSwitch: {
    transform: [{scaleX: 1.3}, {scaleY: 1.3}],
  },
  status: {
    fontSize: 17,
    fontWeight: '700',
    color: 'black',
  },
  orderProductView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
  },
  viewOrders: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
  },
  buttonViewOrders: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    // left: '15%',
    width: '100%',
    height: 35,
    margin: '2%',
    borderRadius: 20,
  },
  buttonAddProduct: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    // left: '60%',
    width: '100%',
    height: 35,
    margin: '2%',
    borderRadius: 20,
  },
  deliveryHoursView: {
    flexDirection: 'row',
    height: 44,
    width: '100%',
    justifyContent: 'flex-start',
    left: '7%',
    alignItems: 'flex-start',
  },
  deliveryHours: {
    fontSize: 15,
  },
  deliveryDetails: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  deliveryDetailsView: {
    borderColor: 'black',
    borderWidth: 0.5,
    margin: '5%',
    padding: '2%',
  },
  reviews: {
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  headerText: {
    color: 'white',
  },
  modal: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    //flex: 1,
    padding: 10,
    //height: 200,
    justifyContent: 'flex-start',
    margin: 0,
  },
  label:{
    //fontVariant: 'small-caps',
    textTransform: 'uppercase',
    fontStyle: 'italic',
    fontSize: 16,
    marginTop: 5,
  },
});

const mapStateToProps = state => {
  return{
      // email: state.users.loggedUserEmail,
      // userName: state.users.loggedUserName,
      // contactNumber: state.users.loggedUserContactNumber,
      isLoading: state.ui.isLoading,
      id: state.vendor.loggedVendorID,
      email: state.vendor.loggedVendorEmail,
      firstName: state.vendor.loggedVendorFirstName,
      lastName: state.vendor.loggedVendorLastName,
      contactNo: state.vendor.loggedVendorContactNo,
      visitingDates: state.vendor.loggedVendorVisitingDates,
      visitingPlaces: state.vendor.loggedVendorVisitingPlaces,
      nic: state.vendor.loaggedVendorNIC,
      businessName: state.vendor.loggedVendorBusinessName,
      businessAddress: state.vendor.loggedVendorBusinessAddress,
      delivering: state.vendor.loggedVendorDeliveringStatus,
      selectedVendor: state.vendor.selectedVendor,
      vehicleNo: state.vendor.loggedVendorVehicleNo,
      bio: state.vendor.loggedVendorBio,
      startTime: state.vendor.loggedVendorStartTime,
      endTime: state.vendor.loggedVendorEndTime,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      // onLogOut: (nav) => dispatch(authLogout(nav)),
      onLogIn: () => dispatch(getLoggedVendor()),
      // onUpdateCustomer: (userName,firstName,lastName,email,contactNo,lastReportedLocation,deliveryAddresses) => dispatch (updateLoggedCustomer(userName,firstName,lastName,email,contactNo,lastReportedLocation,deliveryAddresses)),
      //onUpdateAvatar: (image) => dispatch (updateAvatar(image)),
      onUpdateVendor: (email,firstName,lastName,contactNo,visitingDates, visitingPlaces,nic,businessName, businessAddress,vehicleNo,delivering, startTime, endTime, bio) => dispatch(updateLoggedVendor(email,firstName,lastName,contactNo,visitingDates, visitingPlaces,nic,businessName, businessAddress,vehicleNo,delivering, startTime, endTime, bio)),
      onSearch: (id) => dispatch(searchVendor(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (VendorHome);