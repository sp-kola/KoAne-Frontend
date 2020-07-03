import React from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';
import {
  Content,
  Form,
  Item,
  Input,
  Textarea,
  CheckBox,
  Icon,
  Button,
} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import img from '../../../assets/login1.jpg';
// const backgroundImg = 

export default function addProduct() {
  return (
    // <Content style={styles.container}>
    <ImageBackground source={img} style={styles.background}>
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
              <Text style={styles.button}>+</Text>
            </Button>
          </TouchableOpacity>
          <Text style={styles.text}>ADD A NEW CATEGORY</Text>
        </Item>
        <Item>
          <Text style={styles.text}>UPLOAD AN IMAGE</Text>
          {/* <Icon icon="camera" style={styles.icon} /> */}
          {/* <Icon icon="camera" style={styles.icon} /> */}
        </Item>
      </Form>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
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
  text: {
    padding: 10,
    fontSize: 18,
    marginHorizontal: 25,
  },
  checkbox: {
    padding: 10,
    paddingLeft: 30,
  },
  icon: {
    padding: 10,
    marginHorizontal: 25,
    fontSize: 30,
    color: 'black',
  },
  button: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 30,
  },
});
