import React,{Component} from 'react';
import {View,Text,Button,TextInput} from 'react-native';
app.set('port', (5000));

export default class App extends Component
{
  /*ShowSearch=()=>
{
  alert("The vendors list");
}*/
  render()
  {
    return(
      <View>
        <Text>Customer Home Page</Text>
        <TextInput style={{borderWidth:1, borderColor:'black', margin:10, borderRadius:10, paddingLeft:10}}></TextInput>
        
      </View>
    );
  }
}