import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Container, Header, Left, Body, Right, Title, Subtitle, Button, Tab, Tabs, ScrollableTab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Customer extends Component {

    state = {
        email: ''
    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }
    deletecustomer = () => {
        const usermail = this.email
        const url = 'http://192.168.1.101:3300/customer/' + usermail
        fetch(url, {
            method: "DELETE"
        })
            .then(res => { return res.json() })
            .catch((error) => { console.log(error) })
    }
    render() {
        const { counter } = this.state
        return (
            <Container>
                <View style={styles.container}>
                    <View style={styles.centerComponent}>
                        <Text style={styles.title}>enter customer user email</Text>
                        <TextInput style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="Email"
                            placeholderTextColor="#9a73ef"
                            autoCapitalize="none"
                            onChangeText={this.handleEmail} />
                        <Button style={{marginLeft:'40%',marginTop:'10%'}} transparent onPress={() => this.deletecustomer()}>
                            <Icon name="trash-alt" size={40} color="red" style={styles.icon} />
                        </Button>
                    </View>
                </View>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
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
    input: {
        marginTop:25,
        height: '20%',
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    /*icon:{
        margin:'15%'
    }*/
})
export default Customer;