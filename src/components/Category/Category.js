import {List, ListItem, Body, Button} from 'native-base';
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Category extends Component {
  render() {
    return (
      <View>
        <Body>
          <Text>{this.props.name}</Text>
        </Body>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  category: {
    padding: 10,
  },
  inputIcon: {
    padding: 10,
    // marginLeft: 25,
    fontSize: 30,
    // backgroundColor: '#fff',
  },
});
