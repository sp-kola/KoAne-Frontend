import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Container, Header, Left, Body, Right, Title, Subtitle, Button, Tab, Tabs, ScrollableTab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Vendor extends Component {

    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <View style={styles.centerComponent}>
                        <TouchableOpacity>
                            <Text style={styles.title}>search by category</Text>
                            <Icon name="shipping-fast" size={60} color="#E0B743" style={styles.icon} />
                            <TextInput>

                            </TextInput>
                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.centerComponent}>
                        <TouchableOpacity>
                            <Text style={styles.title}>search by mail</Text>
                            <Icon name="at" size={60} color="#E0B743" style={styles.icon} />
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#eee'
    },
    centerComponent: {
        padding: 20,
        margin: 5,
        borderRadius: 18,
        borderWidth: 5,
        borderColor: '#aaa',
        backgroundColor: '#fff',
        height: '50%',
        width: '45%',
        alignItems: 'center'

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
        fontSize: 14,
        fontWeight: 'bold',
    },
    icon:{
        margin:'20%'
    }
})
export default Vendor;