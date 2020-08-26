import React,{Component} from 'react';
import {View,Text,TextInput,ScrollView,Dimensions,TouchableOpacity,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';

export default class Flag extends Component{

    render(){
        return(
            <View>
            <View style={{ borderWidth:2,width:375,height:430,borderRadius:50,marginTop:30,marginHorizontal:'5%'}}>
                <View styles={shadow} style={{ marginTop:40,marginHorizontal:20,flexDirection:'row',flex:1}}>
                    <Text style={{fontSize:25,color:'black',fontWeight:'bold',marginTop:20,marginHorizontal:10}}>Flag</Text>
                    <Icon name="flag" style={{color:'black',fontSize:30,paddingHorizontal:12,paddingVertical:24}}/>
                </View>
                <Text style={{fontSize:22,color:'black',fontWeight:'700',marginLeft:'8%',marginBottom:'10%'}}>
                    Details of the vendor reporting
                </Text>
                <TextInput style={{borderWidth:1, borderColor:'black',marginBottom:'10%',marginLeft:'9%',borderRadius:18,width:300,height:200,fontSize:22}}
                 multiline={true} numberOfLines={5} placeholder="Add details about the vender you have seen. Example: Vegetable truck (your flag will be expire in 30 min.)"></TextInput>
            </View>
            <View style={{flexDirection: 'row',marginLeft:'15%',marginTop:12}}>
            <TouchableOpacity onPress={this.ShowSearch}>
                    <View style={{ borderRadius: 15,
                                    width: 100,
                                    height: 50,
                                    paddingVertical: 18,
                                    paddingHorizontal: 20, 
                                    backgroundColor: 'black',
                                    alignItems:'center',
                                    flexDirection: 'row',
                                    flex: 1,
                                    justifyContent: 'center',
                                    marginTop: 5,
                                    justifyContent:'space-between'}}>
                        <Text style={{ color: 'white',
                                        fontWeight: 'bold', 
                                        fontSize:14,
                                        textTransform: 'uppercase',
                                        textAlign: 'center',
                                        flexDirection:'row'}}>BACK TO MAPS</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.ShowMap}>
                <View style={{ borderRadius: 15,
                                    width: 100,
                                    height: 50,
                                    paddingVertical: 18,
                                    paddingHorizontal: 26, 
                                    backgroundColor: 'black',
                                    alignItems:'center',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    marginTop: 5,
                                    justifyContent:'space-between',
                                    marginLeft:100}}>
                        <Text style={{ color: 'white',
                                        fontWeight: 'bold', 
                                        fontSize:16,
                                        textTransform: 'uppercase',
                                        textAlign: 'center',
                                        flexDirection:'row'}}>ADD FLAG</Text>
                    </View>
                </TouchableOpacity>
            </View>
            </View>
        );
        }
}
const shadow = {
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    shadowRadius: 8,
  };