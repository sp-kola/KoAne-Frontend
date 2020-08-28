import React,{Component} from 'react';
import {View,Text,TextInput,ScrollView,Dimensions,TouchableOpacity,Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


export default class CustomerProfile extends Component{

    render(){
        return(
            <View>
                <Text>Customer orders</Text>
                <View style={{ borderWidth:2,width:375,height:530,borderRadius:50,marginTop:30,marginHorizontal:'5%'}}>
                    <View styles={shadow} style={{ marginTop:50,marginHorizontal:18,flexDirection:'row'}}>
                        <Image style={{width:150, height:150, marginLeft:'6%',borderRadius:150/2}}
                                source={require('./Elements/2.jpg')}/> 
                        <Text numberOfLines={2} style={{fontSize:25,fontWeight:'bold',marginTop:20,marginHorizontal:10}}>Thusitha {'\n'} Subasingha</Text>   
                    </View>
                    <View style={{marginTop:50,marginLeft:25,flexDirection:'row',position:'absolute'}}>
                            <Text style={{fontSize:18,fontWeight:'600',zIndex:10,marginTop:200}}>USER NAME :</Text>
                            <TextInput style={{padding:10,zIndex:11,marginTop:190,width:250,fontWeight:'800',fontSize:18}}></TextInput>
                    </View>
                    <View style={{marginTop:50,marginLeft:25,position:'absolute'}}>
                            <Text style={{fontSize:18,fontWeight:'600',zIndex:12,marginTop:240}}>SAVED DELIVERY ADDRESS :</Text>
                            <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center',width:310}}>
                                <TextInput style={{padding:10,zIndex:13,fontWeight:'800',fontSize:18,flex:1}} numberOfLines={2}></TextInput>
                                <Icon name="closecircle" style={{color:'black',fontSize:18}}/>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center',width:310}}>
                                <TextInput style={{padding:10,zIndex:13,fontWeight:'800',fontSize:18,flex:1}} numberOfLines={2}></TextInput>
                                <Icon name="closecircle" style={{color:'black',fontSize:18}}/>
                            </View>
                    </View>
                    <View style={{marginTop:50,marginLeft:25,flexDirection:'row',position:'absolute'}}>
                            <Text style={{fontSize:18,fontWeight:'600',zIndex:14,marginTop:400}}>TOTAL NUMBER OF ORDERS MADE :</Text>
                            <TextInput style={{padding:10,zIndex:15,marginTop:410,width:50,fontWeight:'800',fontSize:18}}></TextInput>
                    </View>
                </View>
                <TouchableOpacity>
                <View style={{ borderRadius: 15,
                                    width: '25%',
                                    height: 25,
                                    marginLeft:280,
                                    paddingVertical: 18,
                                    paddingHorizontal: 20, 
                                    backgroundColor: 'black',
                                    alignItems:'center',
                                    justifyContent: 'center',
                                    marginTop:15}}>
                        <Text style={{ color: 'white',
                                        fontWeight: 'bold', 
                                        fontSize:16,
                                        textAlign: 'center',}}>BACK</Text>
                    </View>
                </TouchableOpacity>
                            
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