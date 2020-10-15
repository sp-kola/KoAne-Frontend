import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Container, Header, Left, Body, Right, Title, Subtitle, Button, Tab, Tabs, ScrollableTab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';

class Message extends Component {
    state = {
        email: '',
        text : ''
    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handleText = (text) => {
        this.setState({ text: text })
    }
    send = () => {
        
        const formData = new FormData();
        formData.append('sender', this.props.email);
        formData.append('receiver', this.state.email);
        formData.append('text', this.state.text);
        const url = 'https://sp-kola-koane.herokuapp.com/message/'
        console.log(url)
        return fetch('https://sp-kola-koane.herokuapp.com/message/', {
            method: 'POST',
            body: formData
        }).then(response => response.json())
    }
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
                        <Title>Send message</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="comments" size={30} color="white" />
                        </Button>
                    </Right>
                </Header>
                <View style={styles.container}>
                <View style={styles.centerComponent}>
                    <Text style={styles.title}>enter customer user email</Text>
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Sender Email"
                        placeholderTextColor="#9a73ef"
                        autoCapitalize="none"
                        onChangeText={this.handleEmail} />

                        <TextInput style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="Message"
                            placeholderTextColor="#9a73ef"
                            autoCapitalize="none"
                            onChangeText={this.handleText} />
                    <Button style={{ marginLeft: '40%', marginTop: '10%' }} transparent onPress={() => this.send()}>
                        <Icon name="paper-plane" size={40} color="red" style={styles.icon} />
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
        marginTop: 25,
        height: '20%',
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    /*icon:{
    margin:'15%'
}*/
})

const mapStateToProps = state => {
    return {
        // email: state.users.loggedUserEmail,
        // userName: state.users.loggedUserName,
        // contactNumber: state.users.loggedUserContactNumber,
        email: state.auth.email,
        userName: state.auth.userName,
        id: state.auth.id
    }
}

export default connect(mapStateToProps, null)(Message);