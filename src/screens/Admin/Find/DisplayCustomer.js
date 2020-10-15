import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Modal, Button } from 'react-native'
import { Container, Header, Left, Body, Right, Title, Subtitle, Tab, Tabs, ScrollableTab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

class  DisplayCustomer extends Component {
    /*state = {
        dataSource: []
    }
    componentDidMount() {
        const userId = this.props.id
        const url = 'https://sp-kola-koane.herokuapp.com/message/' + userId

        fetch(url, {
            method: "GET"
        })
            .then(res => {
                return res.json()
            })
            .then((responseJson) => {

                let messages = []

                for (let _id in responseJson) {
                    messages.push({
                        ...responseJson[_id],
                        key: _id
                    })
                }
                const newarr = messages.filter(obj => obj.read === true)
                this.setState({
                    dataSource: newarr
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }*/
    renderItem = ({ item }) => {
        return(
            <View style = { styles.flatComponent } >

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.textHeader}>{item.sender}</Text>

                    <Button transparent onPress={() => deletemessage(item._id)}>
                        <Icon name="closecircleo" style={styles.closeIcon} />
                    </Button>

                </View>

                <Text style={styles.textContent}>{item.message}</Text>
            </View>
        )
    }
    render(){
        console.log('email ', this.props)
        return (
             <View >
                {/* <FlatList
                    data={this.state.dataSource}
                    renderItem={this.renderItem}
                /> */}
            </View>
        );
    }
}

export default DisplayCustomer;