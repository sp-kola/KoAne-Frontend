import React, {Component}  from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Container, Header, Left, Body, Right, Title, Subtitle , Button, Tab, Tabs, ScrollableTab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Order from '../../components/Product/viewVendorProducts'
// import AddProduct from '../AddProduct/AddProduct';
// import ViewProduct from '../ViewProduct/ViewProduct';


class VendorHome extends Component {
    render(){
      console.log('props ', this.props)
        return(
            <Container>
            <Header hasTabs style={styles.header} androidStatusBarColor='black' backgroundColor='black'>
              <Left>
                <Button transparent onPress={() => this.props.navigation.pop()}>
                  <Icon name="arrow-circle-left" size={30} color="white" />
                </Button>
              </Left>
              <Body>
                <Title>Order</Title>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name="shopping-cart" size={30} color="white" />
                </Button>
              </Right>
            </Header>
            <Order navigation={this.props.navigation}/>
          </Container>    
        )
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: 'purple'
    }
})

export default VendorHome;