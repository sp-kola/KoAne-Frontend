import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Container, Header, Left, Body, Right, Title, Subtitle, Button, Tab, Tabs, ScrollableTab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Read from './Read';
import Unread from './Unread';

import io from "socket.io-client";

class MessageContainer extends Component {

  
    render() {

        return (
            <Container>
                <Header hasTabs style={styles.header} androidStatusBarColor='black' backgroundColor='black'>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.toggleDrawer()}>
                            <Icon name="bars" size={30} color="white" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Messages</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="envelope" size={30} color="white" />
                        </Button>
                    </Right>
                </Header>
                <Tabs style={styles.header} backgroundColor='black' renderTabBar={() => <ScrollableTab style={styles.header} tabsContainerStyle={{ shadowColor: 'black', borderColor: 'black', backgroundColor: 'black' }} />}>
                    <Tab heading="Unread Messages" tabStyle={{ backgroundColor: 'black' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: 'black' }} activeTextStyle={{ color: '#fff', fontWeight: 'bold' }}>
                        <Unread/>
                    </Tab>
                    <Tab heading="Read Messages" tabStyle={{ backgroundColor: 'black' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: 'black' }} activeTextStyle={{ color: '#fff', fontWeight: 'bold' }}>
                        <Read/>
                    </Tab>
                </Tabs>

            </Container>
        )
    }
}



const styles = StyleSheet.create({
    header: {
        backgroundColor: 'purple'
    }
})

export default MessageContainer;