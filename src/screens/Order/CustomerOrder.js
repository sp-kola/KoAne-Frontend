import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  // Text,
  Image,
  StatusBar,
} from 'react-native';
import {ListItem, Body, Button, Text, Content, Row} from 'native-base';
import {connect} from 'react-redux';
import {authLogout, getLoggedUser, updateLoggedCustomer, setCart, cancelOrder} from '../../store/actions/index'
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DefaultButton from '../../components/UI/DefaultButton/DefaultButton';
import Modal from 'react-native-modal';

class CustomerOrder extends Component {
  
    state = {
      dataSource: this.props.orders,
        
    };

    componentDidUpdate() {
        // this.setState({
        //     dataSource: this.props.orders
        // })
    }

   componentDidMount(){
       
   }
  

  renderItem = ({item}) => {
    var products = item.products

    products = products.map( product => product.item.productName)

    var str = products.toString()

    return (
      <View style={styles.background}>
        <View style={styles.background1}>
          <Text style={styles.text1}>order id: {item._id}</Text>
          <Text>Rs.{item.price}</Text>
          <Text>{item.completed}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => alert(str)}>
          <Icon name="eye" style={{paddingRight: 5}} color="black" size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() =>
          //   alert('Item has been added', item.productName, item.price)
          // }
          onPress={() => this.props.onCancelOrder(item._id)}>
          <Icon name="times-circle" style={{paddingRight: 5}} color="red" size={30} />
        </TouchableOpacity>
        </View>
      </View>
    );
  };
  componentDidMount() {
    
  }

  render() {
    return (
      // <SafeAreaView style={styles.container}>
      <View>

        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={item => item.key}
        />
      </View>

      // </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  background: {
    backgroundColor: '#cfcfcf',
    padding: 5,
    marginTop: 15,
    height: 110,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    //flexDirection: 'row',
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
  profileModal: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    height: '70%',
    //flex: 1,
    justifyContent: 'space-around',
    alignContent: 'flex-start'

  },
  profileText: {
    padding: 8,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    width: '50%',
    //height: 100
  },
});

const mapStateToProps = state => {
  return{
      // email: state.users.loggedUserEmail,
      // userName: state.users.loggedUserName,
      // contactNumber: state.users.loggedUserContactNumber,
      // isLoading: state.ui.isLoading,
      // userName: state.customers.loggedCustomerUserName,
      // id: state.customers.loggedCustomerCustomerId,
      // firstName: state.customers.loggedCustomerFirstName,
      // lastName: state.customers.loggedCustomerLastName,
      // email: state.customers.loggedCustomerEmail,
      // contactNumber: state.customers.loggedCustomerContactNumber,
      // lastReportedLocation: state.customers.loggedCustomerLastReportedLocation,
      // deliveryAddresses: state.customers.loggedCustomerDeliveryAddresses,
      selectedVendor: state.vendor.selectedVendor,
      orders: state.order.customerOrders
  }
}

const mapDispatchToProps = dispatch => {
  return {
      // onLogOut: (nav) => dispatch(authLogout(nav)),
      // onLogIn: (email) => dispatch(getLoggedUser(email))
      // onUpdateCustomer: (userName,firstName,lastName,email,contactNo,lastReportedLocation,deliveryAddresses) => dispatch (updateLoggedCustomer(userName,firstName,lastName,email,contactNo,lastReportedLocation,deliveryAddresses)),
      //onUpdateAvatar: (image) => dispatch (updateAvatar(image)),
      onSetCart : (cart, price) => dispatch (setCart(cart, price)),
      onCancelOrder : (id) => dispatch (cancelOrder(id))

  }
}

export default connect(mapStateToProps, mapDispatchToProps) (CustomerOrder);
