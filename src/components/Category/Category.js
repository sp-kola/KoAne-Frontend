import {List, ListItem, Body, Icon, Button} from 'native-base';
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default class Category extends Component {
  render() {
    return (
      <View>
        <List>
          <ListItem>
            <View>
              <Body>
                <Text>{this.props.name}</Text>
              </Body>
            </View>
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
            <View>
              {/* <TouchableOpacity>
                  <Button transparent onPress={this.addSubCategory} >
                    <Icon name="add" style={styles.inputIcon} />
                  </Button>
                </TouchableOpacity> */}
            </View>
          </ListItem>
        </List>
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
