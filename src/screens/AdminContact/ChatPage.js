import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Container, Header, Left, Body, Right, Title, Subtitle, Button, Tab, Tabs, ScrollableTab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import io from "socket.io-client";

class ChatPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chatMessage: "",
            chatMessages: []
        };
    }

    componentDidMount() {
        this.socket = io("http://192.168.1.100:3300");
        this.socket.on("chat message", msg => {
            this.setState({
                chatMessages: [...this.state.chatMessages, msg]
            });
        });
    }
    render() {

        const chatMessages = this.state.chatMessages.map(chatMessage => (
            <Text style={{ borderWidth: 2, top: 20, height: 50, fontSize: 18, paddingHorizontal: 15, paddingVertical: 10 }}>{chatMessage}</Text>
        ));

        return (
            <Container>
                    <Header hasTabs style={styles.header} androidStatusBarColor='black' backgroundColor='black'>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.toggleDrawer()}>
                                <Icon name="bars" size={30} color="white" />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Chat with Admin</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                            <Icon name="user-lock" size={30} color="white" />
                            </Button>
                        </Right>
                    </Header>
                <View style={styles.container}>
                    {chatMessages}
                    <TextInput
                        style={{ height: 60, borderWidth: 2, top: 20, height: 50, fontSize: 18, paddingHorizontal: 15, paddingVertical: 10 }}
                        autoCorrect={false}
                        value={this.state.chatMessage}
                        onSubmitEditing={() => this.submitChatMessage()}
                        onChangeText={chatMessage => {
                            this.setState({ chatMessage });
                        }}
                    />
                </View>
            </Container>
        )
    }

    submitChatMessage() {
        this.socket.emit('chat message', this.state.chatMessage);
        this.setState({ chatMessage: '' });
    }
}



const styles = StyleSheet.create({
    header: {
        backgroundColor: 'purple'
    },
    container: {
        height: 600,
        flex: 1,
        backgroundColor: 'transparent',
        fontSize: 18,
    },
})

const mapStateToProps = state => {
    return{
        // email: state.users.loggedUserEmail,
        // userName: state.users.loggedUserName,
        // contactNumber: state.users.loggedUserContactNumber,
        email: state.auth.email,
        userName: state.auth.userName,
        id : state.auth.id
    }
  }

export default connect(mapStateToProps, null)(ChatPage);