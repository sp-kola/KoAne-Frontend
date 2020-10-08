import React, {Component} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

export default class DefaultActivityIndicator extends Component {
  render() {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#000" style={styles.loading} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loading: {flex: 1, alignContent: 'center'},
})