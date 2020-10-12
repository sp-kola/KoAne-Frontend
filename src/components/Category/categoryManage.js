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
import Category from './Category';
// import { FlatList } from 'react-native-gesture-handler';

export default class categoryManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCategory: [{categoryName: 'cat1'}, {categoryName: 'cat'}],
    };
  }

  componentDidMount() {
    // cmd ipconfig ipv4
    return fetch('http://192.168.1.101:3300/categories/')
      .then(res => res.json())
      .then(resJson => {
        this.setState({
          // isLoading: false,
          dataCategory: resJson,
        });
        // const objects = this.state.dataSource;
        // for (var i = 0; i < objects.length; i++) {
        //   console.log('Item Name: ' + objects[i].productName);
        //   console.log('Item Name: ' + objects[i].details);
        //   console.log('Item Name: ' + objects[i].price);
        // }
      })
      .catch(err => {
        console.log(err);
      });
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
          <List>
            <ListItem>
              <Category name={val.categoryName} />
              <View>
                <TouchableOpacity>
                  <Button transparent onPress={this.updateCategory}>
                    <Icon name="create" style={styles.inputIcon} />
                  </Button>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <Button transparent onPress={this.deleteCategory}>
                    <Icon name="delete" style={styles.inputIcon} />
                  </Button>
                </TouchableOpacity>
              </View>
            </ListItem>
          </List>
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
        <View style={styles.category}>{categories}</View>
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
