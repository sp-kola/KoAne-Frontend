import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import DefaultButton from '../UI/DefaultButton/DefaultButton'

export default function addProduct() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PRODUCT NAME</Text>
      <TextInput style={styles.input} />
      <Text style={styles.text}>PRICE</Text>
      <TextInput style={styles.input} />
      <Text style={styles.text}>DETAILS</Text>
      <TextInput multiline style={styles.inputMultiline} />
      <Text style={styles.text}>CATEGORY</Text>
      <Text style={styles.text}>UPLOAD AN IMAGE</Text>
      <DefaultButton color='black'>
        Add
        </DefaultButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  input: {
    borderWidth: 1,
    // borderBottomColor: '#ddd',
    padding: 10,
    fontSize: 18,
    marginHorizontal: 25,
  },
  inputMultiline: {
    borderWidth: 1,
    // borderBottomColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 10,
    marginHorizontal: 25,
    paddingVertical: 50,
  },
  text: {
    padding: 10,
    fontSize: 18,
    marginHorizontal: 25,
  },
});
