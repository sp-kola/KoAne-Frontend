import React, {Component}  from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Container, Header, Left, Body, Right, Title, Subtitle , Button, Tab, Tabs, ScrollableTab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import io from 'socket.io-client'
import {connect} from 'react-redux'
import { searchVendor, getAllVendors } from '../../store/actions/index'

import Home from '../Customer/CustomerHome'

// import AddProduct from '../AddProduct/AddProduct';
// import ViewProduct from '../ViewProduct/ViewProduct';


class CustomerHome extends Component {

  /**componentDidMount() {

    socket.on("welcome", () => {
      console.log('welcome');
    });
  }
*/
  componentDidMount() {
    this.props.onLoadVendors()
  }

    render(){
        return(
            <Container>
            <Header hasTabs style={styles.header} androidStatusBarColor='black' backgroundColor='black'>
              <Left>
                <Button transparent onPress={() => this.props.navigation.toggleDrawer()}>
                  <Icon name="bars" size={30} color="white" />
                </Button>
              </Left>
              <Body>
                <Title>Home</Title>
              </Body>
              <Right>
                <Button transparent onPress={()=> this.props.navigation.push('Notifications') }>
                  <Icon name="bell" size={30} color="white" />
                </Button>
                <Button transparent>
                  <Icon name="home" size={30} color="white" />
                </Button>
              </Right>
            </Header>
            <Home/>     
          </Container>    
        )
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: 'black'
    }
})

const mapStateToProps = state => {
  return{
      // bills: state.bills.bills,
      // searchBill: state.bills.searchBill,
      // email: state.users.loggedUserEmail,
      // userName: state.users.loggedUserName,
      // contactNumber: state.users.loggedUserContactNumber,
      //vendors: this.state.vendor.vendors
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onLoadVendors: () => dispatch(getAllVendors()),
      //onSearchVendor: (id) => dispatch(searchVendor(id))
      // onSearchBill: (val) => dispatch(searchBill(val)),
      // onStopSearchBill: () => dispatch(stopSearchBill()),
      // onLoadUserBills: (email) => dispatch(getUserBills(email))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CustomerHome);