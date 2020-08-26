import React, {Component}  from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Container, Header, Left, Body, Right, Title, Subtitle , Button, Tab, Tabs, ScrollableTab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

//customer map screens 
import MapSum from './MapSum'
import OrderView from './OrderView'
import VendorView from './VendorView'
import Flag from './Flag'


class MapContainer extends Component {
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
                <Title>Map</Title>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name="street-view" size={30} color="white" />
                </Button>
              </Right>
            </Header>
            <Tabs style={styles.header} backgroundColor='black' renderTabBar={()=> <ScrollableTab style={styles.header} tabsContainerStyle={{shadowColor:'black', borderColor:'black', backgroundColor:'black'}}/>}>
            <Tab heading="Overview" tabStyle={{backgroundColor: 'black'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'black'}} activeTextStyle={{color: '#fff', fontWeight: 'bold'}}>
                <MapSum/>
            </Tab>
            <Tab heading="Orders" tabStyle={{backgroundColor: 'black'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'black'}} activeTextStyle={{color: '#fff', fontWeight: 'bold'}}>
                <OrderView/>
            </Tab>
            <Tab heading="Vendors" tabStyle={{backgroundColor: 'black'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'black'}} activeTextStyle={{color: '#fff', fontWeight: 'bold'}}>
                <VendorView/>
            </Tab> 
            <Tab heading="Flag" tabStyle={{backgroundColor: 'black'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'black'}} activeTextStyle={{color: '#fff', fontWeight: 'bold'}}>
                <Flag/>
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

export default MapContainer;