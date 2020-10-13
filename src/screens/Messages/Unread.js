import { Right, Left, Button } from 'native-base';
import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, Dimensions, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import io from "socket.io-client";

class UnRead extends Component {
    
    state = {
        dataSource: []
    }
    renderItem = ({ item }) => {

        deletemessage = (msgId) => {
            const url = 'http://192.168.1.101:3300/message/' + msgId

            fetch(url, {
                method: "DELETE"
            })
            .then(res => { return res.json() })
            .catch((error) => { console.log(error) })

            const userId = this.props.id
            const uri = 'http://192.168.1.101:3300/message/' + userId

            fetch(uri, {
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
                var temp = this.state.dataSource
                temp = messages.filter(obj => (obj.read === false && obj.state === 0))
                this.setState({
                    dataSource: temp
                })
            })
            .catch((error) => {
                console.log(error)
            })
        }

        updatemessage = (msgId) => {
            const url = 'http://192.168.1.101:3300/message/' + msgId
            fetch(url, {
                method: "PUT"
            })
                .then(res => { return res.json() })
                .catch((error) => { console.log(error) })

            const userId = this.props.id
            const uri = 'http://192.168.1.101:3300/message/' + userId

            fetch(uri, {
                method: "GET"
            })
            .then(res => {return res.json()})
            .then((responseJson) => {
                let messages = []
                for (let _id in responseJson) {
                    messages.push({
                        ...responseJson[_id],
                        key: _id
                    })
                }
                var temp = this.state.dataSource
                temp = messages.filter(obj => (obj.read === false && obj.state === 0))
                this.setState({
                    dataSource: temp
                })
            })
            .catch((error) => {
                console.log(error)
            })
        }
        return(
            <View style={styles.flatComponent}>

               <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.textHeader}>{item.sender}</Text>

                    <Button transparent onPress={() => deletemessage(item._id)}>
                        <Icon name="closecircleo" style={styles.closeIcon} />
                    </Button>

                </View>
                <Text style={styles.textContent}>{item.message}</Text>

                <Button transparent onPress={() => this.updatemessage(item._id)} style={styles.button}>
                    <Text style={styles.buttonText}>Ok </Text>
                </Button>
            </View>
        )   
    }
    

    componentDidMount() {

        this.socket = io("http://192.168.1.101:3300");
        this.socket.on("custome message", msg => {
            
        });
    
        const userId = this.props.id
        const url = 'http://192.168.1.101:3300/message/'+ userId

        fetch(url, {
            method: "GET"
        })
        .then(res => { 
            return res.json() 
        })
        .then((responseJson) => {

            let messages = []

            for(let _id in responseJson){
                messages.push({
                    ...responseJson[_id],
                    key:_id
                })
            }
            const newarr = messages.filter(obj => (obj.read===false && obj.state===0))
            this.setState({
                dataSource: newarr
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {

        return (
            <View style={styles.container}>
                    <FlatList
                        data = {this.state.dataSource}
                        renderItem = {this.renderItem}
                    />
            </View>
        );
    }
    
    updatemessage = (msgId) => {
        const url = 'http://192.168.1.101:3300/message/' + msgId
        fetch(url, {
            method: "PUT"
        })
        .then(res => { return res.json() })
        .catch((error) => { console.log(error) })
    }
}

const styles = StyleSheet.create({
    container:{
           
    },
    flatComponent:{
        borderWidth: 3, 
        borderColor: 'green', 
        justifyContent: 'center',
        //alignItems: 'center', 
        width: 380,  
        margin: '5%', 
        borderRadius: 10
    },
    textHeader:{
        fontSize:18,
        color:'red',
        textAlign: 'left',
        marginHorizontal: '5%',
        marginTop:'3%',
        fontWeight: 'bold'
    },
    textContent:{
        fontSize: 16,
        textAlign: 'left',
        marginHorizontal: '5%',
        marginBottom: '2%',
    },
    closeIcon:{
        color: 'black', 
        paddingRight: 16, 
        fontSize: 25, 
        fontWeight: 'bold',
        textAlign:'right',
        marginTop: '1%'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'right',
        fontFamily: 'sans-serif-medium',
    },

    button: {
        backgroundColor: '#242424',
        width: '20%',
        borderRadius: 25,
        marginVertical: 5,
        paddingVertical: 20,
        paddingHorizontal: 25,
        alignSelf:'flex-end',
        marginHorizontal: '5%',
    },
});

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

export default connect(mapStateToProps, null) (UnRead);