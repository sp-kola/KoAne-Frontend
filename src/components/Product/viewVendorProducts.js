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
import {ListItem, Body, Button, Text, Content, Row} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
      selectedData: [],
      count: 0,
    };
  }

  goToDetails = () => {
    this.setState({
      saved: [],
    });

    // this.props.navigation.navigate("SaveScreen");
  };

  addToCart = async e => {
    console.log(e);
    //creating an object with data to be added
    let addingData = {
      item: e,
      quantity: 1,
    };
    //check if it is already added
    let temp = this.state.selectedData;
    //var index = temp.indexOf(addingData.item)
    let flag = temp.find(data => data.item == addingData.item);

    if (flag) {
      //item is already in the array
      temp = temp.map(data => {
        if (data.item == addingData.item) {
          data.quantity += 1;
        }
        return data;
      });
    } else {
      //item is not in the array
      temp = await this.state.selectedData.concat(addingData);
    }
    await this.setState(prevState => {
      return {
        selectedData: temp,
        count: prevState.count + 1,
      };
    });

    console.log('cart ', this.state.selectedData);
  };

  removeFromCart = async e => {
    //creating a data with object to remove
    let objectToRemove = e;
    //make a copy of the current state of the selected data
    let temp = await this.state.selectedData;
    //check if the item is in the cart
    let flag = temp.find(data => data.item == objectToRemove);
    if (flag) {
      //found in the cart
      //reduce 1 from the quantity
      //or if quantity is 1 then have to remove the item from the cart
      let one = false;
      temp.find(data => {
        if (data.item == objectToRemove) {
          if (data.quantity == 1) {
            one = true;
          }
        }
      });

      if (one) {
        //only one item is remaining
        console.log('only one item');
        let id = -1;
        temp = temp.filter(data => data.item !== objectToRemove);
        console.log(temp);
      } else {
        console.log('more than one item ');
        temp = temp.map(data => {
          if (data.item == objectToRemove) {
            data.quantity -= 1;
          }
          return data;
        });
      }
      await this.setState(prevState => {
        return {
          selectedData: temp,
          count: prevState.count - 1,
        };
      });

      console.log('cart ', this.state.selectedData);
    }
  };

  renderItem = ({item}) => {
    return (
      // <View style={styles.itembackground}>
      //   <View>
      //     <Text>{`${item.productName}`}</Text>
      //     <Text>{`${item.details}`}</Text>
      //   </View>
      // </View>
      <View style={styles.background}>
        <View style={styles.background1}>
          <Text style={styles.text1}>{item.productName}</Text>
          <Text>{item.price}</Text>
        </View>
        <TouchableOpacity
          // onPress={() =>
          //   alert('Item has been added', item.productName, item.price)
          // }
          onPress={() => this.removeFromCart(item)}>
          <Icon name="minus-circle" color="red" size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() =>
          //   alert('Item has been added', item.productName, item.price)
          // }
          onPress={() => this.addToCart(item)}>
          <Icon name="plus-circle" color="green" size={30} />
        </TouchableOpacity>
      </View>
    );
  };
  componentDidMount() {
    const url =
      'http://192.168.1.3:3300/product/VendorProducts/5f83a169e3596f0d4081f4c9';

    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        console.log('fetched data ',responseJson)
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
          <Row>
            <Image source={cart} style={styles.cartImage} />
            <Text> {this.state.count} </Text>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.push('viewCustomerOrder', {
                  testing: 'Helloooooo',
                  cart: this.state.selectedData,
                })
              }>
              <Button style={styles.button}>
                <Text style={styles.text2}>
                  VIEW YOUR ORDER
                  <Icon name="eye" size={16} color="black" />
                </Text>
              </Button>
            </TouchableOpacity>
          </Row>
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
    //width: '100%',
    // height: '100%',
    padding: 5,
    marginTop: 15,
    height: 50,
    marginLeft: 5,
    marginRight: 5,
    // borderRadius: 25,
    // padding: 10,
    // borderColor: 'rgb(7, 7, 7)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  background1: {
    marginLeft: 25,
  },
  topbackground: {
    backgroundColor: 'rgb(159, 195, 248)',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    borderColor: 'rgb(15, 17, 20)',
    height: 90,
  },
  text: {
    fontSize: 16,
    marginTop: 40,
    width: 50,
    height: 30,
    backgroundColor: 'blue',
  },

  text1: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  text2: {
    fontSize: 15,
    // fontWeight: 'bold',
    color: 'black',
    justifyContent: 'center',
  },
  button: {
    width: 150,
    marginTop: 15,
    marginLeft: 150,
    marginBottom: 50,
    height: 60,
    borderRadius: 40,
    justifyContent: 'space-around',
    // width: 100,
    // height: 100,
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 10,
    // borderRadius: 100,
    backgroundColor: '#ffd571',
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
