import React, {Component} from 'react';
import {Header, Item, Input, Button, Text} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Search extends Component {
  render() {
    return (
      <Header searchBar rounded style={{backgroundColor:'#000'}}>
        <Item>
          <Icon name="search" size={30} />
          <Input placeholder="Search" />
          <Icon name="arrow-forward" size={30} />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
    );
  }
}
