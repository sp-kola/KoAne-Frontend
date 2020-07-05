import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

export default function FlatButton({text, onPress, icon})
{
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>


    )
}
const styles = StyleSheet.create({
    button:{
        borderRadius: 15,
        width: '57%',
        height: 25,
        paddingVertical: 18,
        paddingHorizontal: 12,
        backgroundColor: 'black',
        alignItems:'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5,
  },
    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize:12,
        textTransform: 'uppercase',
        textAlign: 'center',  
    }  
    
})
