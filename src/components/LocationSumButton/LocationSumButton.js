import React from 'react';
import {TouchableOpacity,TouchableNativeFeedback, Text, View, StyleSheet, Platform } from 'react-native';

const locationSumButton = props => {
    const content = (
    <View style={[styles.button, props.disabled ? styles.disabled : null]}>
        <Text style={[styles.text, props.disabled? styles.disabledText: styles.title]}>{props.title}</Text>
        <Text  style={[styles.text, props.disabled? styles.disabledText: styles.text]}>{props.children}</Text>
        <Text style={[styles.text, props.disabled? styles.disabledText: styles.text]}>{props.data}</Text>
    </View>
    )
    if(Platform.OS == 'android'){
        return(
            <TouchableOpacity onPress={props.onPress}>
                    {content}
            </TouchableOpacity>    
        )
    }
    if(props.disabled){
        return (
            {content}
        )
    }
    return(
        <TouchableOpacity onPress={props.onPress}>
                {content}
        </TouchableOpacity>    
    )
}

const styles = StyleSheet.create({
    button:{
        padding: 10,
        margin: 5,
        borderRadius: 18,
        borderWidth: 5,
        borderColor: '#E0B743',
        backgroundColor: '#fff',
        justifyContent: 'space-evenly',
        height: '100%',
        width: 175,
        flexDirection: 'column'
    },
    text: {
        color: 'black',
        textTransform: 'uppercase',
        textAlign: 'center',
        padding: 1
    },
    disabled:{
        backgroundColor: '#eee',
        borderColor: '#aaa'
    },
    disabledText:{
        color: '#aaa'
    },
    title: {
        color: 'black',
        textTransform: 'uppercase',
        textAlign: 'center',
        padding: 1,
        fontWeight: 'bold',
        fontSize: 16
    }

})

export default locationSumButton;