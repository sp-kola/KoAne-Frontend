import React from 'react';
import {View, Image, StyleSheet, Text, Button} from 'react-native';

export default class Menuitem extends React.Component {
  render() {
    return (
      <View style={styles.menuitem}>
        <Image source={this.props.itemImage} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuitem: {
    width: '35%',
    height: '60%',
    padding: 18,
    /*backgroundColor: '#ccc',
    borderColor: '#000',*/
    //borderWidth: 5,

    marginLeft: 30,
  },

  image: {
    width: '100%',
    height: '100%',
    //opacity: 0.8,
    //borderColor: '#fff',
    //borderWidth: 3,
  },
  buttonText: {
    fontSize: 10,
    //fontWeight: '50',
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },

  button: {
    backgroundColor: 'yellow',
    width: 30,
    borderRadius: 10,
    marginVertical: 5,
    paddingVertical: 10,
  },
});
