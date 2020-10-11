import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Container, Header, Left, Body, Right, Title, Subtitle, Button, Tab, Tabs, ScrollableTab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
class Customers extends Component { 

    render() {
        return(
            <Container>
                <View style={styles.container}>
                    <View style={styles.centerComponent}>
                        <Text style={styles.title}>total customers count</Text>
                        <Icon name="bullseye" size={150} color="green" style={styles.icon}/>
                        <Text style={styles.text}>25</Text>
                    </View>
                </View>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
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
        fontSize:50,
        fontWeight: 'bold',
    },
    icon:{
       margin:'20%' 
    }
})
export default Customers;