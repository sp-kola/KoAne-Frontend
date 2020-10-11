import React from 'react';
import {TouchableOpacity,TouchableNativeFeedback, Text, View, StyleSheet, Platform } from 'react-native';

const defaultButton = props => {
    const content = (
    <View style={[styles.button, {backgroundColor: props.color}, props.disabled ? styles.disabled : null]}>
        <Text  style={[styles.text, props.disabled? styles.disabledText: styles.text]}>{props.children}</Text>
    </View>
    )
    if(Platform.OS == 'android'){
        return(
            <TouchableNativeFeedback onPress={props.onPress}>
                    {content}
            </TouchableNativeFeedback>    
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
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#000000',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
        //height: 20
    },
    text: {
        color: 'white',
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
    }

})

export default defaultButton;