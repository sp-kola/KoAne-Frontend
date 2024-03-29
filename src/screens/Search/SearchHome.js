import React, {Component}  from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Container, Header, Left, Body, Right, Title, Subtitle , Button, Tab, Tabs, ScrollableTab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

// import AddProduct from '../AddProduct/AddProduct';
// import ViewProduct from '../ViewProduct/ViewProduct';

import SearchVendor from './SearchVendor'

class SearchHome extends Component {

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
                <Title>Search</Title>
              </Body>
              <Right>
                {/* <Button transparent onPress={()=> this.props.navigation.push('Notifications') }>
                  <Icon name="bell" size={30} color="white" />
                </Button> */}
                <Button transparent>
                  <Icon name="search" size={30} color="white" />
                </Button>
              </Right>
            </Header>
            <Tabs style={styles.header} backgroundColor='black' renderTabBar={()=> <ScrollableTab style={styles.header} tabsContainerStyle={{shadowColor:'black', borderColor:'black', backgroundColor:'black'}}/>}>
            <Tab heading="Vendor" tabStyle={{backgroundColor: 'black'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'black'}} activeTextStyle={{color: '#fff', fontWeight: 'bold'}}>
                <SearchVendor nav= {this.props.navigation}/>
            </Tab>
            {/* <Tab heading="Orders" tabStyle={{backgroundColor: 'black'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'black'}} activeTextStyle={{color: '#fff', fontWeight: 'bold'}}>
                <OrderView/>
            </Tab>
            <Tab heading="Vendors" tabStyle={{backgroundColor: 'black'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'black'}} activeTextStyle={{color: '#fff', fontWeight: 'bold'}}>
                <VendorView/>
            </Tab> 
            <Tab heading="Flag" tabStyle={{backgroundColor: 'black'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'black'}} activeTextStyle={{color: '#fff', fontWeight: 'bold'}}>
                <Flag/>
            </Tab>       */}
            </Tabs>    
          </Container>    
        )
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: 'black'
    }
})

export default SearchHome;