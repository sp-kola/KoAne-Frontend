import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Modal,Button } from 'react-native'
import { Container, Header, Left, Body, Right, Title, Subtitle, Tab, Tabs, ScrollableTab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';

class Customer extends Component {

    state = {
        username: '',
        email: '',
        modalVisible: false,
    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }
    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }
    
    render() {
        //console.log('Props',this.props.navigation)
        return (
            <Container>
                <View style={styles.container}>
                <Modal animationType={"slide"} transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { console.log("Modal has been closed.") }}>

                    <View style={styles.modal}>
                        <Text style={styles.text}>enter user email!</Text>
                            <TextInput style={styles.input}
                                underlineColorAndroid="transparent"
                                placeholder="Email"
                                placeholderTextColor="black"
                                autoCapitalize="none"
                                value = {this.state.email}
                                onChangeText={this.handleEmail} />
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <Button title="SEARCH" onPress={() => { this.props.navigation.push('DisplayCustomer', {
                                    email: this.state.email
                                }) }} />
                                <Button title="BACK" onPress={() => { this.toggleModal(!this.state.modalVisible) }} />
                            </View>
                            
                            
                    </View>
                </Modal>
                
                    
                    <View style={styles.centerComponent}>
                        <TouchableOpacity onPress={() => { this.toggleModal(true) }}>
                            <Text style={styles.title}>search by user email</Text>
                            <Icon name="search-plus" size={60} color="#E0B743" style={styles.icon} />
                            <TextInput></TextInput>
                        </TouchableOpacity>
                    </View>
                    {/*<View style={styles.centerComponent}>
                        <TouchableHighlight >
                        <Text style={styles.title}>search by mail</Text>
                        <Icon name="at" size={60} color="#E0B743" style={styles.icon} />
                        </TouchableHighlight>
                    </View>*/}
                    
                </View>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee'
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
    icon: {
        margin: '28%'
    },
    modal: {
        justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: "#87CEFA",
        height: 300,
        width: '80%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        marginTop: 80,
        marginLeft: 40,
        paddingHorizontal: 50

    },
    input: {
        margin: 15,
        height: 40,
        borderColor: 'black',
        borderWidth: 1
    },
    button: {
        color:'black'
    }
})
export default Customer;