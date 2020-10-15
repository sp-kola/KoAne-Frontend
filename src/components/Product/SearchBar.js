import React, {Component, useState} from 'react';
import {Header, Item, Input, Button, Text} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      searchResults: [],
    };
  }

  search = () => {
    return fetch(
      'https://sp-kola-koane.herokuapp.com/product/getproduct/' + this.state.text,
    )
      .then(res => res.json())
      .then(resJson => {
        this.setState({
          searchResults: resJson,
        });
      })
      .then(console.log(this.state.searchResults));
  };

  render() {
    return (
      <Header searchBar rounded style={styles.searchbar}>
        <Item>
          <Icon name="search" size={30} />
          <Input
            placeholder="Search"
            onChangeText={val => this.setState({text: val})}
          />
          <TouchableOpacity>
            <Button transparent>
              <Icon
                name="arrow-forward"
                size={30}
                onPress={() => {
                  this.search;
                }}
              />
            </Button>
          </TouchableOpacity>
        </Item>
        {/* <Button transparent>
          <Text>Search</Text>
        </Button> */}
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  searchbar: {
    backgroundColor: '#000',
  },
});
