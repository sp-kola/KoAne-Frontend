import React, {Component} from 'react';

import {Text, StyleSheet, View, ActivityIndicator} from 'react-native';
import {Form, Item, Input, Textarea, CheckBox, Button} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import img from '../../../assets/login1.jpg';
import DefaultButton from '../UI/DefaultButton/DefaultButton';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class addProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
      isUploading: false,
    };
  }

  // return fetch('http://192.168.1.103:3300/product/create', {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     firstParam: 'yourValue'
  //   })
  // });

  render() {
    return (
      <View style={styles.background}>
        <Form>
          <Item>
            <Input placeholder="PRODUCT NAME" style={styles.input} />
          </Item>
          <Item>
            <Input placeholder="PRICE" style={styles.input} />
          </Item>
          <Item>
            <Textarea
              rowSpan={5}
              placeholder="DETAILS"
              style={styles.inputMultiline}
            />
          </Item>
          <Item>
            <Text style={styles.text}>CATEGORY</Text>
          </Item>
          <Item style={styles.checkbox}>
            <CheckBox checked={false} color="black" />
          </Item>
          <Item>
            <TouchableOpacity>
              <Button transparent>
                <Icon name="add" style={styles.inputIcon} />
                <Text style={styles.text}>ADD A NEW CATEGORY</Text>
              </Button>
            </TouchableOpacity>
          </Item>
          <Item>
            <TouchableOpacity>
              <Button transparent>
                <Icon name="camera-alt" style={styles.inputIcon} />
                <Text style={styles.text}>UPLOAD AN IMAGE</Text>
              </Button>
            </TouchableOpacity>
          </Item>
          <DefaultButton
            color="black"
            onPress={() => alert('Product succefully added')}>
            Add Product
          </DefaultButton>
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
  inputMultiline: {
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
    borderRadius: 10,
    marginHorizontal: 25,
    flex: 1,
  },
  inputIcon: {
    padding: 10,
    marginLeft: 25,
    fontSize: 30,
  },
  text: {
    padding: 10,
    fontSize: 18,
    marginHorizontal: 25,
  },
  checkbox: {
    padding: 10,
    paddingLeft: 30,
  },
  // icon: {
  //   padding: 10,
  //   marginHorizontal: 25,
  //   fontSize: 30,
  //   color: 'black',
  // },
  button: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 30,
  },
});
