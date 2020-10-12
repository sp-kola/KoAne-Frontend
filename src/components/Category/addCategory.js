import {Button, Input} from 'native-base';
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

  render() {
    return (
      <View>
        <Input
          style={styles.input}
          onChangeText={val =>
            this.setState({
              text: val,
            })
          }
        />
        <Button transparent onPress={this.back}>
          <Text>Back</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    fontSize: 30,
    backgroundColor: '#fff',
    padding: 20,
    color: '#000',
  },
});