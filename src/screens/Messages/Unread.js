import { Right, Left, Button } from 'native-base';
import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, Dimensions, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


export default class UnRead extends Component {
    constructor(){
        super()
        this.state = {
            dataSource: []
        }
    }

    renderItem = ({ item }) => {
        return(
            <View style={styles.flatComponent}>

               <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.textHeader}>{item.sender}</Text>

                    <Button transparent onPress={deletemessage()}>
                        <Icon name="closecircleo" style={styles.closeIcon} />
                    </Button>

                </View>

                    <Text style={styles.textContent}>{item.message}</Text>
            </View>
        )   
    }
    deletemessage = () => {

    }

    componentDidMount() {
        const url = 'http://192.168.1.100:3300/message'
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
            const newarr = messages.filter(obj => obj.read===false)
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
    }
});