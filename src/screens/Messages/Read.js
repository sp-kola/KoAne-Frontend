import { Right, Left, Button } from 'native-base';
import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, Dimensions, StyleSheet, CheckBox } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


export default class Read extends Component {

    render() {

        return (
            <View>

                <ScrollView >
                    <View style={{
                        flexDirection: 'row', borderWidth: 3, borderColor: 'blue', justifyContent: 'center',
                        alignItems: 'center', width: 380, height: 100, margin: '5%', borderRadius: 10
                    }}>
                        {/* <TextInput style={{borderWidth:1, borderColor:'black',margin:10, borderRadius:18,flex:1,flexDirection:'row'}}> */}
                        <TextInput style={{ flex: 1, }} />
                        <Icon name="closecircleo" style={{ color: 'black', paddingRight: 16, paddingBottom: 50, fontSize: 25, fontWeight: 'bold' }} />
                    </View>

                    <View style={{
                        flexDirection: 'row', borderWidth: 3, borderColor: 'red', justifyContent: 'center',
                        alignItems: 'center', width: 380, height: 100, margin: '5%', borderRadius: 10
                    }}>
                        {/* <TextInput style={{borderWidth:1, borderColor:'black',margin:10, borderRadius:18,flex:1,flexDirection:'row'}}> */}
                        <TextInput style={{ flex: 1, }} />
                        <Icon name="closecircleo" style={{ color: 'black', paddingRight: 16, paddingBottom: 50, fontSize: 25, fontWeight: 'bold' }} />
                    </View>

                    <View style={{
                        flexDirection: 'row', borderWidth: 3, borderColor: 'green', justifyContent: 'center',
                        alignItems: 'center', width: 380, height: 100, margin: '5%', borderRadius: 10
                    }}>
                        {/* <TextInput style={{borderWidth:1, borderColor:'black',margin:10, borderRadius:18,flex:1,flexDirection:'row'}}> */}
                        <TextInput style={{ flex: 1, }} />
                        <Icon name="closecircleo" style={{ color: 'black', paddingRight: 16, paddingBottom: 50, fontSize: 25, fontWeight: 'bold' }} />
                    </View>

                    <View style={{
                        flexDirection: 'row', borderWidth: 3, borderColor: 'purple', justifyContent: 'center',
                        alignItems: 'center', width: 380, height: 100, margin: '5%', borderRadius: 10
                    }}>
                        {/* <TextInput style={{borderWidth:1, borderColor:'black',margin:10, borderRadius:18,flex:1,flexDirection:'row'}}> */}
                        <TextInput style={{ flex: 1, }} />
                        <Icon name="closecircleo" style={{ color: 'black', paddingRight: 16, paddingBottom: 50, fontSize: 25, fontWeight: 'bold' }} />
                    </View>

                    <View style={{
                        flexDirection: 'row', borderWidth: 3, borderColor: 'yellow', justifyContent: 'center',
                        alignItems: 'center', width: 380, height: 100, margin: '5%', borderRadius: 10
                    }}>
                        {/* <TextInput style={{borderWidth:1, borderColor:'black',margin:10, borderRadius:18,flex:1,flexDirection:'row'}}> */}
                        <TextInput style={{ flex: 1, }} />
                        <Icon name="closecircleo" style={{ color: 'black', paddingRight: 16, paddingBottom: 50, fontSize: 25, fontWeight: 'bold' }} />
                    </View>

                    <View style={{
                        flexDirection: 'row', borderWidth: 3, borderColor: 'magenta', justifyContent: 'center',
                        alignItems: 'center', width: 380, height: 100, margin: '5%', borderRadius: 10
                    }}>
                        {/* <TextInput style={{borderWidth:1, borderColor:'black',margin:10, borderRadius:18,flex:1,flexDirection:'row'}}> */}
                        <TextInput style={{ flex: 1, }} />
                        <Icon name="closecircleo" style={{ color: 'black', paddingRight: 16, paddingBottom: 50, fontSize: 25, fontWeight: 'bold' }} />
                    </View>
                </ScrollView>
            </View>
        );
    }
}