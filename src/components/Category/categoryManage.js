import {
  Body,
  Button,
  View,
  Left,
  List,
  ListItem,
  Right,
  Text,
  Input,
} from 'native-base';
import React, {Component} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Category from './category';
// import { FlatList } from 'react-native-gesture-handler';

export default class categoryManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCategory: [{categoryName: 'cat1'}, {categoryName: 'cat'}],
    };
  }

  addCategory = () => {
    this.props.navigation.navigate('AddCategory');
  };

  deleteCategory = () => {};

  updateCategory = () => {};

  render() {
    let categories = this.state.dataCategory.map((val, key) => {
      console.log(val);
      return (
        <View key={key}>
          <Category name={val.categoryName} />
        </View>
      );
    });

    return (
      <View>
        {/* <FlatList data={} renderItem={({item}) => <Text>{item.key}</Text> } ></FlatList> */}
        <View style={styles.category}>
          <Text>Manage Categories</Text>
          <ListItem>
            <Left>
              <TouchableOpacity>
                <Button transparent onPress={this.addCategory}>
                  {/* <Text>Add Product</Text> */}
                  <Icon name="add" style={styles.inputIcon} />
                </Button>
              </TouchableOpacity>
            </Left>
          </ListItem>
        </View>
        <View style={styles.category} />
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
