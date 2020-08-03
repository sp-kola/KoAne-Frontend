import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableHighlight, ImageBackground } from 'react-native';
import { Container, Header, Content, Thumbnail, Left, Body, Title, Right, Footer} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {authLogout, getLoggedUser} from '../../store/actions/index'
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

function CustomDrawerContent({ progress, ...rest }) {
  
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
            
            <Text style={styles.profileText}>Hello user123</Text>
          </View>
        </TouchableOpacity>
        <Modal isVisible={isModalVisible}>
        
          <View style={styles.profileModal}>
            <Container>
            <Header span noLeft style={styles.header} androidStatusBarColor='black' backgroundColor='#E0B743'>
            {/* #E0B743 */}
            <Left/>
            <Body>
              <Title>Hi user123 </Title>
            </Body>
            <Right />
          </Header>
          {/* <ImageBackground source={hi} style={styles.backgroundImg}> */}
          <View style={styles.content}>
          <Text style={styles.introText}>Your registered email: </Text>
          <Text style={styles.detailText}>user123@gmail.com</Text>
          <Text style={styles.introText}>Your registered contact number: </Text>
          <Text style={styles.detailText}>0771234567</Text>
          
            </View>
            {/* </ImageBackground> */}
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

function MyDrawer(data) {
  //console.log('user',data.route.params.email)
  console.log(data)
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props} >
      {/* {data.onLogOut} */}
      {/* {data.email}
      {data.contactNumber}
      {data.userName} */}
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
      {/* <Drawer.Screen
        name="ShoppingList"
        component={ShoppingList}
        options={{ 
          drawerLabel: 'Shopping List',
          drawerIcon: () => <Icon color='black' size={20} name='file' />
       }}
      />
      <Drawer.Screen
        name="UtilityBills"
        component={UtilityBills}
        options={{ 
          drawerLabel: 'Utility Bills',
          drawerIcon: () => <Icon color='black' size={20} name='money-bill-alt' />
       }}
      />
      <Drawer.Screen
        name="Shops"
        component={Shops}
        options={{ 
          drawerLabel: 'Shops' ,
          drawerIcon: () => <Icon color='black' size={20} name='shopping-cart' />
        }}
      /> */}
      {/* <Drawer.Screen
        name="Products"
        //component={Products}
        options={{ 
          drawerLabel: 'Products',
          drawerIcon: () => <Icon color='white' size={20} name='shopping-basket' /> 
        }}
        
      >
        {props => <Product {...props} />}
        </Drawer.Screen> */}
    </Drawer.Navigator>
  );
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
    color: 'purple'    
  },
  detailText: {
    margin: 5,
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 16 
  }
})

const mapStateToProps = state => {
  return{
      // email: state.users.loggedUserEmail,
      // userName: state.users.loggedUserName,
      // contactNumber: state.users.loggedUserContactNumber,
      
  }
}

const mapDispatchToProps = dispatch => {
  return {
      // onLogOut: (nav) => dispatch(authLogout(nav)),
      // onLogIn: (email) => dispatch(getLoggedUser(email))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (MyDrawer);
