import React, { Component } from 'react';
import { View, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class Notifications extends Component {

    render() {
    <View style={{
        flexDirection: 'row', 
        borderWidth: 3, 
        borderColor: 'blue', 
        justifyContent: 'center',
        alignItems: 'center', 
        width: 380, 
        height: 100, 
        margin: '5%', 
        borderRadius: 10}}>
        {/* <TextInput style={{borderWidth:1, borderColor:'black',margin:10, borderRadius:18,flex:1,flexDirection:'row'}}> */}
        
        <TextInput style={{ flex: 1, }} />
        
        <Icon 
        name="closecircleo" 
        style={{ color: 'black', 
            paddingRight: 16, 
            paddingBottom: 50, 
            fontSize: 25, 
            fontWeight: 'bold' 
        }} />
    </View> 
    
    }
}