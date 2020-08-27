import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,TextInput,TouchableOpacity,FlatList} from 'react-native';

//import StarRating from './StarRating';

//type Props = {};
export default class AddRating  extends Component {
    constructor(props){
        super(props);

        this.state={
            RatingList:[
                {ID:'1', CustomerName:'A', Rating:'4.5', Feedback:'good service'},
                {ID:'2', CustomerName:'B', Rating:'4.3', Feedback:'good service'},
                {ID:'3', CustomerName:'C', Rating:'3.5', Feedback:'good quality'}
            ]
        };
    }
    ItemSeperator=()=>
    {
        return(
            <View style={{height:1, width:'100%'}}></View>
        )
    }
  render() {
    return (
    //   <View style={styles.container}>
       
    //   </View>
     <View style={{flex:1,alignItems:'center',margin:5}}> 
         <View style={{ borderWidth:2,width:375,height:250,borderRadius:50,marginTop:30,marginHorizontal:'5%'}}> 
            <TextInput style={{borderWidth:1, borderColor:'black',marginTop:10,marginLeft:'9%',borderRadius:18,width:300,height:80,fontSize:22,paddingLeft:10}}
                 multiline={true} numberOfLines={2} placeholder="Write your review"></TextInput>
            <TouchableOpacity onPress={this.ShowSearch}>
                    <View style={{ borderRadius: 15,
                                    width: 120,
                                    height: 50,
                                    paddingVertical: 15,
                                    paddingHorizontal: 20, 
                                    backgroundColor: 'black',
                                    alignItems:'center',
                                    justifyContent: 'center',
                                    marginTop:100,
                                    marginLeft:120}}>
                        <Text style={{ color: 'white',
                                        fontWeight: 'bold', 
                                        fontSize:14,
                                        textTransform: 'uppercase',
                                        textAlign: 'center'}}>submit</Text>
                    </View>
                </TouchableOpacity>
        </View>
            <View style={{flex:1,alignItems:'center',margin:5}}>
            <Text style={{fontSize:20,fontWeight:'bold',marginTop:5,marginHorizontal:10,color:'black'}}></Text>
            <FlatList
                data={this.state.RatingList}
                ItemSeperatorComponent={this.ItemSeperator}
                readerItems={({item})=>
                <Text style={{fontSize:20,height:40}}>{item.CustomerName} {item.Rating} {item.Feedback}</Text>}
                keyExtractor={item=>item.ID}/>
            </View>
         </View>
    );
  }
}

//const styles = StyleSheet.create({
  //container: {
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: '#F5FCFF',
  //}
//});