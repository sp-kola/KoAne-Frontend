import React, {Component} from 'react';
import {Header, Item, Input, Button, Text} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet} from 'react-native';

export default class Search extends Component {
  render() {
    return (
      <Header searchBar rounded style={styles.searchbar}>
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

const styles = StyleSheet.create({
  searchbar: {
    backgroundColor: '#000',
  },
});
