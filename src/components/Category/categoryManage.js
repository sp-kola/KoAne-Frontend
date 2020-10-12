import {Body, Button, List, Right, Text, View} from 'native-base';
import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';

const categoryManage = () => {
  return (
    <View>
      {/* <FlatList data={} renderItem={({item}) => <Text>{item.key}</Text> } ></FlatList> */}
      <Right>
        <Button>
          <Text>Add</Text>
        </Button>
      </Right>
      <List>
        <Body>
          <Text>ABC</Text>
        </Body>
        <Right>
          <Button transparent>
            <Text>Update, delete, Add sub category</Text>
          </Button>
        </Right>
      </List>
    </View>
  );
};

const styles = StyleSheet.create({
  category: {},
});

export default categoryManage;