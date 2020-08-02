import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Content} from 'native-base';
import Product from './Product';
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
    return fetch('http://192.168.1.100:3300/product/')
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
    var objects = this.state.dataSource;
    return (
      <View style={styles.background}>
        <Content>
          {objects &&
            objects.map(item => {
              return (
                <View key={item._id}>
                  <Product
                    id={item._id}
                    Name={item.productName}
                    price={item.price}
                    desc={item.details}
                  />
                </View>
              );
            })}
        </Content>
      </View>
    );
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
});
