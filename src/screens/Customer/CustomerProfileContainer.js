import React, {Component}  from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Container, Header, Left, Body, Right, Title, Subtitle , Button, Tab, Tabs, ScrollableTab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

//customer screens
import Profile from './CustomerProfile'

class CustomerProfileContainer extends Component {
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
                <Title>Profile</Title>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name="user" size={30} color="white" />
                </Button>
              </Right>
            </Header>
            <Profile/>
          </Container>    
        )
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: 'purple'
    }
})

export default CustomerProfileContainer;