import React, {useState, useEffect, Component} from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableHighlight, ImageBackground } from 'react-native';
import { Container, Header, Content, Thumbnail, Left, Body, Title, Right, Footer} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {authLogout, getLoggedUser, updateLoggedCustomer} from '../../store/actions/index'
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
    SafeAreaView, 
  } from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';
import user from '../../assets/user.jpg'

import CustomerHome from '../HomePage/CustomerHome'
import VendorSearch from '../VenderSearch'
import Maps from '../CustomerMaps/MapContainer'
import Profile from '../Customer/CustomerProfileContainer'
import MessagesHome from '../Messages/MessageContainer'
import AdminContact from '../AdminContact/ChatPage'
import SearchHome from '../Search/SearchNav'

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import DefaultButton from '../../components/UI/DefaultButton/DefaultButton'


function CustomDrawerContent({ progress, ...rest }) {
  //console.log(rest)
  var [isModalVisible, setModalVisible] = useState(false);
  var [isUpdateModalVisible, setUpdateModalVisible] = useState(false);
  var [userName, setUserName] = useState('');
  var [firstName, setFirstName] = useState('');
  var [lastName, setLastName] = useState('');
  var [email, setEmail] = useState('');
  var [contactNumber, setContactNumber] = useState(''); 

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleUpdateModal = () => {
    setUpdateModalVisible(!isUpdateModalVisible);
  };

  const handleUserName = (val) => {
    console.log('updating user name', val)
    setUserName(val);
    console.log(userName)
  }

  const handleFirstName = (val) => {
    setFirstName(val);
  }

  const handleLastName = (val) => {
    setLastName(val);
  }

  const handleEmail = (val) => {
    setEmail(val);
  }

  const handleContactNumber = (val) => {
    setContactNumber(val);
  }

  const updateButtonHandler = () => {
    const userName1= userName? userName: rest.children.userName
    const firstName1= firstName? firstName: rest.children.firstName
    const lastName1= lastName? lastName: rest.children.lastName
    const email1= email? email:rest.children.email
    const contactNumber1= contactNumber?contactNumber:rest.children.contactNumber
    const lastReportedLocation1= rest.children.lastReportedLocation
    const deliveryAddresses1= rest.children.deliveryAddresses  
    rest.children.onUpdateCustomer(userName1,firstName1,lastName1,email1,contactNumber1,lastReportedLocation1, deliveryAddresses1)
    toggleUpdateModal()
    handleContactNumber('')
    handleEmail('')
    handleFirstName('')
    handleLastName('')
    handleUserName('')
}

  //console.log('update modal', isUpdateModalVisible)
  const translateX = Animated.interpolate(progress, {
      inputRange: [0, 1],
      outputRange: [-100, 0],
    });
  
    return (
      <DrawerContentScrollView {...rest}>
        <Animated.View style={{ transform: [{ translateX }] }}>
          <TouchableOpacity style={styles.profileStyle} onPress={toggleModal}>
          <View style={{flexDirection:'row'}}>
          <Thumbnail large source={user} />
            
            <Text style={styles.profileText}>Hello{'\n'}{rest.children.userName}</Text>
          </View>
        </TouchableOpacity>
        <Modal 
          isVisible={isUpdateModalVisible} 
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
              <Title>Updating profile</Title>
          </Body>
          </Header>
          <Text style={styles.label}>userName: </Text>
           <DefaultInput
              placeholder= {rest.children.userName}
              onChangeText= {handleUserName} 
              value={userName}
              //style={styles.inputField}
          />
          <Text style={styles.label}>first name: </Text>
          <DefaultInput
              placeholder= {rest.children.firstName}
              onChangeText= {handleFirstName} 
              value={firstName}
              //style={styles.inputField}
          />
          <Text style={styles.label}>last Name: </Text>
          <DefaultInput
              placeholder= {rest.children.lastName}
              onChangeText= {handleLastName} 
              value={lastName}
              //style={styles.inputField}
          /> 
          <Text style={styles.label}>email: </Text>
          <DefaultInput
              placeholder= {rest.children.email}
              onChangeText= {handleEmail} 
              value={email}
              //style={styles.inputField}
          />
          {/* <Text style={styles.label}>contact number: </Text>
          <DefaultInput
              placeholder= {rest.children.contactNumber}
              onChangeText= {handleContactNumber} 
              value={contactNumber}
              //style={styles.inputField}
          /> */}
          
          <DefaultButton  
          color='black' 
          onPress={toggleUpdateModal}
          >
              close
          </DefaultButton>
          <DefaultButton  
          color='red' 
          onPress={updateButtonHandler}
          >
              update
          </DefaultButton>
      </Modal>
        <Modal isVisible={isModalVisible}>
        
          <View style={styles.profileModal}>
            <Container>
            <Header span noLeft style={styles.header} androidStatusBarColor='black' backgroundColor='#E0B743'>
            {/* #E0B743 */}
            <Left/>
            <Body>
              <Title>Hi {rest.children.userName}</Title>
              <Text style={styles.detailText}>{rest.children.firstName} {rest.children.lastName} </Text>
            </Body>
            
          </Header>
          {/* <ImageBackground source={hi} style={styles.backgroundImg}> */}
          <View style={styles.content}>
          <Text style={styles.introText}>Your registered email: </Text>
          <Text style={styles.detailText}>{rest.children.email}</Text>
          <Text style={styles.introText}>Your registered contact number: </Text>
          <Text style={styles.detailText}>{rest.children.contactNumber}</Text>
          
            </View>
            {/* </ImageBackground> */}
            <Button color='rgba(26, 118, 207, 0.9)' title="UPDATE" onPress={toggleUpdateModal} />
            <Button color='rgba(224, 183, 67, 0.9)' title="BACK" onPress={toggleModal} />
        </Container>
            
          </View>
        </Modal>
          <DrawerItem 
          label="LogOut" 
          // onPress={() =>{rest.children[0](rest)}} 
          onPress = {() => alert('Logging out') }
          icon = {() => <Icon color='white' size={20} name='sign-out-alt' />}
          inactiveTintColor= 'white'
          //labelStyle={{fontWeight: 'bold'}}
          />
          <DrawerItemList {...rest} />
        </Animated.View>
      </DrawerContentScrollView>
    );
  }

const Drawer = createDrawerNavigator();

class MyDrawer extends Component {
  //console.log('user',data.route.params.email)
  //console.log(data)
  render(){
  return (
          <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props} >
            {/* {data.onLogOut} */}
            {/* {data.email}
            {data.contactNumber}
            {data.userName} */}
            {this.props}
          </CustomDrawerContent>  
            } 
          drawerContentOptions={{
              activeTintColor:'white',
              activeBackgroundColor: '#E0B743',
              inactiveTintColor: 'black',
              itemStyle: { marginVertical: 5 },
              inactiveTintColor: 'white',
            }}
          drawerStyle={{
          backgroundColor: 'black',
          activeTintColor:'white',
          activeBackgroundColor: 'white',
          fontColor: 'white',
          labelColor: 'white',
          contentOptions:{
            labelColor:'white'
          },
          inactiveTintColor: 'white',


    
  }}
    >
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ 
            drawerLabel:  'Profile', 
            activeTintColor:'black',
            drawerIcon: () => <Icon color='white' size={20} name='user' />,
            color: 'white',
            contentOptions:{
              labelStyle:{
              fontColor: 'white',
              fontWeight: 'bold'
            }
            }  
        }}
      />
      <Drawer.Screen
        name="Home"
        component={CustomerHome}
        options={{ 
            drawerLabel:  'Home', 
            activeTintColor:'black',
            drawerIcon: () => <Icon color='white' size={20} name='home' />,
            color: 'white',
            contentOptions:{
              labelStyle:{
              fontColor: 'white',
              fontWeight: 'bold'
            }
            }  
        }}
      />
      <Drawer.Screen
        name="Search"
        component={SearchHome}
        options={{ 
            drawerLabel:  'Search', 
            activeTintColor:'black',
            drawerIcon: () => <Icon color='white' size={20} name='search' />,
            color: 'white',
            contentOptions:{
              labelStyle:{
              fontColor: 'white',
              fontWeight: 'bold'
            }
            }  
        }}
      />
      <Drawer.Screen
        name="Maps"
        component={Maps}
        options={{ 
            drawerLabel:  'Maps', 
            activeTintColor:'black',
            drawerIcon: () => <Icon color='white' size={20} name='street-view' />,
            color: 'white',
            contentOptions:{
              labelStyle:{
              fontColor: 'white',
              fontWeight: 'bold'
            }
            }  
        }}
      />
      <Drawer.Screen
        name="Messages"
        component={MessagesHome}
        options={{
          drawerLabel: 'Messages',
          activeTintColor: 'black',
          drawerIcon: () => <Icon color='white' size={20} name='envelope' />,
          color: 'white',
          contentOptions: {
            labelStyle: {
              fontColor: 'white',
              fontWeight: 'bold'
            }
          }
        }}
      />
      <Drawer.Screen
        name="AdminContact"
        component={AdminContact}
        options={{
          drawerLabel: 'Contact Admin',
          activeTintColor: 'black',
          drawerIcon: () => <Icon color='white' size={20} name='user-lock' />,
          color: 'white',
          contentOptions: {
            labelStyle: {
              fontColor: 'white',
              fontWeight: 'bold'
            }
          }
        }}
      />
          </Drawer.Navigator>
        );
      }
}

const styles = StyleSheet.create({
  profileStyle: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    height: 100,
    padding: 10,
    margin: 10,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  profileModal: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    height: '70%',
    //flex: 1,
    justifyContent: 'space-around',
    alignContent: 'flex-start'

  },
  content:{
    flex: 1
  },
  label:{
    //fontVariant: 'small-caps',
    textTransform: 'uppercase',
    fontStyle: 'italic',
    fontSize: 16,
  },
  modal: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    //flex: 1,
    padding: 10,
    //height: 200,
    justifyContent: 'flex-start',
    margin: 0,
  },
  profileText: {
    padding: 8,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    width: '50%',
    //height: 100
  },
  backgroundImg:{
    width: '100%',
    flex:1,
    //alignContent: 'center',
    //alignItems: 'center',
    justifyContent: 'flex-end',
},
  introText: {
    margin: 5,
    marginLeft: 10,
    fontWeight: '300',
    fontSize: 14,
    color: 'black'    
  },
  detailText: {
    margin: 5,
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 16 
  },
  updateBtn:{
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 10,
    //paddingLeft: '10%',
    flexDirection: 'row',
    //justifyContent: 'space-between',
    padding:5,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '35%',
    height: 40,
    padding: 8,
    borderRadius: 20,
    borderWidth:2,

},
updateLable:{
    //paddingLeft: 20,
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
},
})

const mapStateToProps = state => {
  return{
      // email: state.users.loggedUserEmail,
      // userName: state.users.loggedUserName,
      // contactNumber: state.users.loggedUserContactNumber,
      isLoading: state.ui.isLoading,
      userName: state.customers.loggedCustomerUserName,
      id: state.customers.loggedCustomerCustomerId,
      firstName: state.customers.loggedCustomerFirstName,
      lastName: state.customers.loggedCustomerLastName,
      email: state.customers.loggedCustomerEmail,
      contactNumber: state.customers.loggedCustomerContactNumber,
      lastReportedLocation: state.customers.loggedCustomerLastReportedLocation,
      deliveryAddresses: state.customers.loggedCustomerDeliveryAddresses,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      // onLogOut: (nav) => dispatch(authLogout(nav)),
      // onLogIn: (email) => dispatch(getLoggedUser(email))
      onUpdateCustomer: (userName,firstName,lastName,email,contactNo,lastReportedLocation,deliveryAddresses) => dispatch (updateLoggedCustomer(userName,firstName,lastName,email,contactNo,lastReportedLocation,deliveryAddresses)),
      //onUpdateAvatar: (image) => dispatch (updateAvatar(image))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (MyDrawer);
