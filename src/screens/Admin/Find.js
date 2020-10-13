import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Container, Header, Left, Body, Right, Title, Subtitle, Button, Tab, Tabs, ScrollableTab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Customer from './Find/FindNav';
import Vendor from './Find/Vendor';

class Find extends Component {

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
                        <Title>Find</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="search" size={30} color="white" />
                        </Button>
                    </Right>
                </Header>
                <Tabs style={styles.header} backgroundColor='black' renderTabBar={() => <ScrollableTab style={styles.header} tabsContainerStyle={{ shadowColor: 'black', borderColor: 'black', backgroundColor: 'black' }} />}>
                    <Tab heading="Customers" tabStyle={{ backgroundColor: 'black' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: 'black' }} activeTextStyle={{ color: '#fff', fontWeight: 'bold' }}>
                        <Customer navigation= {this.props.navigation} />
                    </Tab>
                    <Tab heading="Vendors" tabStyle={{ backgroundColor: 'black' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: 'black' }} activeTextStyle={{ color: '#fff', fontWeight: 'bold' }}>
                        <Vendor navigation={this.props.navigation} />
                    </Tab>
                </Tabs>

            </Container>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    centerComponent: {
        padding: 20,
        margin: 5,
        borderRadius: 18,
        borderWidth: 5,
        borderColor: 'green',
        backgroundColor: '#fff',
        height: '80%',
        width: '75%',

    },
    title: {
        color: 'black',
        textTransform: 'uppercase',
        textAlign: 'center',
        padding: 1,
        fontWeight: 'bold',
        fontSize: 20
    },
    text: {
        color: 'black',
        textTransform: 'uppercase',
        textAlign: 'center',
        padding: 1,
        fontSize: 50,
        fontWeight: 'bold',
    },
    icon: {
        margin: '20%'
    }
})

export default Find;