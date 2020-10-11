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
import {authLogout, getLoggedUser, updateLoggedCustomer, getLoggedVendor} from '../../store/actions/index';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DefaultButton from '../../components/UI/DefaultButton/DefaultButton'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

class VendorHome extends Component {

  state= {
    isEnabled: false,
    email: '',
    firstName: '',
    lastName: '',
    contactNo: '',
    visitingDates: [],
    vistingPlaces: [],
    nic: '',
    businessName: '',
    businessAddress: '',
    timeModal: false,
    temp: new Date(),
    startTime: "",
    endTime: "",
    mode: 'date',
    show: false,
    startTimePicker: false,
    endTimePicker: false,
    calandarModal: false
  }

  toggleTimeModal = () => {
    this.setState(prevState => {
      return{
        timeModal: !prevState.timeModal
      }
    })
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

  toggleSwitch = () => {
    this.setState(prevState => {
       return {
         isEnabled: !prevState.isEnabled
      }
    })
  };
  //console.log(props.route.params)
  render(){
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
                      <Calendar/>
                      <DefaultButton  
                      color='black' 
                      onPress={this.calandarModal}
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
                  //console.log('time modal', this.state.timeModal)
    return (
      <ScrollView>
        {timeModal}
        {dataModal}
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
          <TouchableOpacity>
            <View style={styles.buttonPublicView}>
              <Text style={[styles.text, styles.publicView]}>
                {' '}
                PUBLIC VIEW <Icon name="eye" size={15} color="white" />
              </Text>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={[styles.text, styles.profileName]}>{this.props.businessName? this.props.businessName: 'N/A'}</Text>
            <Text style={[styles.text, styles.profileDetails]}>{this.props.firstName ? this.props.firstName+" "+ this.props.lastName: 'N/A'}</Text>
            <Text style={[styles.text, styles.profileDetails]}>{this.props.email ? this.props.email: 'N/A'}</Text>
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
              <Text style={styles.deliveryHours}>
                <Text> Next visiting date </Text>
            <Text style={styles.deliveryDetails}>{this.props.visitingDates != '' ? this.props.visitingDates[0]: 'add your delivery dates'}</Text>
              </Text>
            </View>
            <View style={styles.deliveryHoursView}>
              <TouchableOpacity>
                <Icon name="map" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.deliveryHours}> Routes </Text>
              <View style={styles.deliveryHours}>
                <Text style={styles.deliveryDetails}>
                {this.props.visitingDates[0]!= undefined ? this.props.visitingDates.map(data => data + " ,"): 'add your stops'}
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
      vistingPlaces: state.vendor.loggedVendorVisitingPlaces,
      nic: state.vendor.loaggedVendorNIC,
      businessName: state.vendor.loggedVendorBusinessName,
      businessAddress: state.vendor.loggedVendorBusinessAddress,
      delivering: state.vendor.loggedVendorDeliveringStatus,
      selectedVendor: state.vendor.selectedVendor,
      vehicleNo: state.vendor.loggedVendorVehicleNo
  }
}

const mapDispatchToProps = dispatch => {
  return {
      // onLogOut: (nav) => dispatch(authLogout(nav)),
      // onLogIn: (email) => dispatch(getLoggedUser(email))
      // onUpdateCustomer: (userName,firstName,lastName,email,contactNo,lastReportedLocation,deliveryAddresses) => dispatch (updateLoggedCustomer(userName,firstName,lastName,email,contactNo,lastReportedLocation,deliveryAddresses)),
      //onUpdateAvatar: (image) => dispatch (updateAvatar(image))
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (VendorHome);