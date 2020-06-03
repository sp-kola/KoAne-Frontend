import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

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
    height: '70%',
    // padding: 20,
    backgroundColor: '#ccc',
    borderColor: '#000',
    borderWidth: 5,

    marginLeft: 20,
  },

  image: {
    width: '100%',
    height: '100%',
    //opacity: 0.8,
    borderWidth: 3,
  },
});
