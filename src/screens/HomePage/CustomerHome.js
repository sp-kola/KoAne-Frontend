import React, {Component}  from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Container, Header, Left, Body, Right, Title, Subtitle , Button, Tab, Tabs, ScrollableTab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Home from '../CustomerHome/CustomerHome'

// import AddProduct from '../AddProduct/AddProduct';
// import ViewProduct from '../ViewProduct/ViewProduct';


class CustomerHome extends Component {
    render(){
        return(
            <Container>
            <Header hasTabs style={styles.header} androidStatusBarColor='black' backgroundColor='black'>
              <Left>
                <Button transparent>
                  <Icon name="home" size={30} color="white" />
                </Button>
              </Left>
              <Body>
                <Title>Home</Title>
              </Body>
              <Right>
                <Button transparent onPress={() => this.props.navigation.toggleDrawer()}>
                  <Icon name="bars" size={30} color="white" />
                </Button>
              </Right>
            </Header>
            <Tabs style={styles.header} backgroundColor='black' renderTabBar={()=> <ScrollableTab style={styles.header} tabsContainerStyle={{shadowColor:'black', borderColor:'black', backgroundColor:'black'}}/>}>
            <Tab heading="Home" tabStyle={{backgroundColor: 'black'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'black'}} activeTextStyle={{color: '#fff', fontWeight: 'bold'}}>
                <Home />
            </Tab>      
            </Tabs>
          </Container>    
        )
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: 'purple'
    }
})

export default CustomerHome;