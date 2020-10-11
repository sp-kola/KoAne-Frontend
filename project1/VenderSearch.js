import React,{Component} from 'react';
import {View,Text,TextInput,ScrollView,StyleSheet,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';

export default class VenderSearch extends Component{
 
    render()
    {
        return(
            <View>
                <Text>VENDER SEARCH</Text>
                <View style={{flexDirection:'row',borderWidth:1,justifyContent:'center',
                            alignItems:'center',width:380,height:50,margin:'5%',borderRadius:118}}> 
                {/* <TextInput style={{borderWidth:1, borderColor:'black',margin:10, borderRadius:18,flex:1,flexDirection:'row'}}> */}
                <TextInput style={{flex:1,}} />
                <Icon name="target-two" style={{color:'black',paddingRight:15,fontSize:18}}/>
                 </View>   

                </View>
        );
    }
}