import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

class ListItem extends Component{
    render(){
        console.log('list item')
        return(
            <View>
                <Text>Hello</Text>
            </View>    
        )
    }
}

export default ListItem;