import React, {Component} from 'react';
import {StyleSheet, View, ActivityIndicator, Text} from 'react-native';
import {Content} from 'native-base';
import Product from './Product';
import Search from './SearchBar';
import DefaultActivityIndicator from '../UI/DefaultActivityIndicator/DefaultActivityIndicator';
// import img from '../../../assets/login1.jpg';
// import Fishbun from '../../../assets/fishbun.jpg';
// import Sausagebun from '../../../assets/sausagebun.jpg';
// import Rolls from '../../../assets/Rolls.jpg';
// import pastry from '../../../assets/fishPastry.jpg';
// import {TouchableOpacity} from 'react-native-gesture-handler';

export default class viewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
      isUploading: false,
    };
  }

  componentDidMount() {
    // cmd ipconfig ipv4
    return fetch('http://192.168.1.103:3300/product/')
      .then(res => res.json())
      .then(resJson => {
        this.setState({
          isLoading: false,
          dataSource: resJson,
        });
        // for (var i = 0; i < objects.length; i++) {
        //   console.log('Item Name: ' + objects[i].productName);
        //   console.log('Item Name: ' + objects[i].details);
        //   console.log('Item Name: ' + objects[i].price);
        // }
        // console.log(this.state.dataSource);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
      <View style={styles.loading}>
        <DefaultActivityIndicator />
      </View>
    );
    } else {
      let products = this.state.dataSource.map((val, key) => {
        return (
          <View key={key}>
            <Product
              id={val._id}
              Name={val.productName}
              price={val.price}
              desc={val.details}
            />
          </View>
        );
      });

      return (
        <View style={styles.background}>
          <Search />
          <Content>{products}</Content>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: '#eee',
  },
  card: {
    // margin: 10,
    paddingHorizontal: 20,
  },
  image: {
    height: 150,
    width: null,
    flex: 1,
  },
  text: {
    fontSize: 20,
  },
  subtext: {
    fontSize: 16,
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
  loading: {flex: 1, alignContent: 'center'},
});
