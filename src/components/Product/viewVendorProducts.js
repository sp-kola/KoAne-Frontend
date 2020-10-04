import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  // Text,
  Image,
  StatusBar,
} from 'react-native';
import {ListItem, Body, Button, Text, Content} from 'native-base';

// import DefaultButton from '../UI/DefaultButton/DefaultButton';

const cart = require('../../../assets/shopping.png');

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

export default class viewVendorProducts extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
    };
  }

  renderItem = ({item}) => {
    return (
      // <View style={styles.itembackground}>
      //   <View>
      //     <Text>{`${item.productName}`}</Text>
      //     <Text>{`${item.details}`}</Text>
      //   </View>
      // </View>
      <View>
        <ListItem style={styles.background}>
          <Body>
            <Text>{item.productName}</Text>
            <Text>{item.price}</Text>
          </Body>
        </ListItem>
      </View>
    );
  };
  componentDidMount() {
    const url = 'http://192.168.1.6:3300/product/';

    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          dataSource: responseJson,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      // <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.topbackground}>
          <Image source={cart} style={styles.cartImage} />

          <Button rounded success style={styles.button}>
            <Text>Success</Text>
          </Button>
        </View>

        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      // </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  // item: {
  //   backgroundColor: '#f9c2ff',
  //   padding: 20,
  //   marginVertical: 8,
  //   marginHorizontal: 16,
  // },
  background: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    // width: '100%',
    // height: '100%',
    marginTop: 15,

    marginLeft: 5,
    // borderRadius: 25,
    // padding: 10,
    // borderColor: 'rgb(7, 7, 7)',
  },

  topbackground: {
    backgroundColor: 'rgb(159, 195, 248)',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    borderColor: 'rgb(15, 17, 20)',
    height: 80,
  },
  text: {
    fontSize: 16,
    marginTop: 40,
    width: 50,
    height: 30,
    backgroundColor: 'blue',
  },

  button: {
    width: 100,
    marginTop: 20,
    marginLeft: 200,
    marginBottom: 50,
  },

  cartImage: {
    width: 50,
    height: 50,
    marginTop: 20,
    marginLeft: 30,
  },
  iteminside: {
    flex: 1,
    justifyContent: 'center',
  },
});

// export default viewVendorProducts;
