import {Button, Form, Input, Item, Left} from 'native-base';
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class addCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  back = () => {
    this.props.navigation.navigate('Category Manage');
  };

  saveCategory = () => {
    try {
      return fetch('http://192.168.1.3:3300/category/add', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          categoryName: this.state.text,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View style={styles.background}>
        <Form>
          <Item>
            <Text style={{padding: 10,marginLeft: 30,}}>Add Category</Text>
          </Item>
          <Item>
            <Input
              style={styles.input}
              onChangeText={val =>
                this.setState({
                  text: val,
                })
              }
            />
          </Item>
          <Item>
            <Left>
              <Button transparent onPress={this.back} style={styles.button}>
                <Text>Back</Text>
              </Button>
            </Left>
            <Left>
              <Button
                transparent
                onPress={this.saveCategory}
                style={styles.button}>
                <Text>Save</Text>
              </Button>
            </Left>
          </Item>
        </Form>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: '#eee',
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    // borderBottomColor: 'black',
    // borderLeftColor: '#ffe694',
    // borderRightColor: '#ffe694',
    // borderTopColor: '#ffe694',
    padding: 10,
    fontSize: 18,
    marginHorizontal: 25,
    marginBottom: 10,
  },
  button: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 30,
  },
});
