import React, {Component} from 'react';

import {Text, StyleSheet, View, Image, ScrollView} from 'react-native';
import {Form, Input, Textarea, CheckBox, Button} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import img from '../../../assets/login1.jpg';
import DefaultButton from '../UI/DefaultButton/DefaultButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-picker';
import {Item} from 'native-base';

const options = {
  title: 'Select Image',
  // customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default class addProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
      isUploading: false,
      imgSource: null,
      name: '',
      price: '',
      details: '',
    };
  }

  componentDidMount() {
    // cmd ipconfig ipv4
    return fetch('http://192.168.1.101:3300/category/')
      .then(res => res.json())
      .then(resJson => {
        this.setState({
          isLoading: false,
          dataSource: resJson,
        });
        // const objects = this.state.dataSource;
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

  selectImage = () => {
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          imgSource: source,
        });
      }
    });
  };

  addProduct = () => {
    try {
      return fetch('https://sp-kola-koane.herokuapp.com/product/create', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productName: this.state.name,
          price: this.state.price,
          details: this.state.details,
        }),
      })
        .then(res => res.json())
        .then(resJson => {
          console.log(resJson);
        });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    // if (this.state.isLoading) {
    //   return (
    //     <View>
    //       <ActivityIndicator />
    //     </View>
    //   );
    // } else {
    let img;
    if (this.state.imgSource) {
      img = (
        <Image
          source={this.state.imgSource}
          style={{width: 200, height: 200, margin: 10}}
        />
      );
    }

    return (
      // <ScrollView>
      <View style={styles.background}>
        <Form>
          <Item>
            <Input
              placeholder="PRODUCT NAME"
              style={styles.input}
              onChangeText={val => this.setState({name: val})}
            />
          </Item>
          <Item>
            <Input
              placeholder="PRICE"
              style={styles.input}
              onChangeText={val => this.setState({price: val})}
            />
          </Item>
          <Item>
            <Textarea
              rowSpan={5}
              placeholder="DETAILS"
              style={styles.inputMultiline}
              onChangeText={val => this.setState({details: val})}
            />
          </Item>
          <Item>
            <Text style={styles.text}>CATEGORY</Text>
          </Item>
          <Item style={styles.checkbox}>
            <CheckBox checked={false} color="black" />
          </Item>
          {/* <Item>
            <TouchableOpacity>
              <Button transparent>
                <Icon name="add" style={styles.inputIcon} />
                <Text style={styles.text}>ADD A NEW CATEGORY</Text>
              </Button>
            </TouchableOpacity>
          </Item> */}
          {/* <Item>
            <TouchableOpacity>
              <Button transparent>
                <Icon name="camera-alt" style={styles.inputIcon} />
                <Text style={styles.text} onPress={this.selectImage}>
                  UPLOAD AN IMAGE
                </Text>
              </Button>
            </TouchableOpacity>
          </Item>
          <Item>{img}</Item> */}
          <TouchableOpacity>
            <Button color="black" onPress={() => this.addProduct}>
              <Text>Add Product</Text>
            </Button>
          </TouchableOpacity>
        </Form>
        {/* </ScrollView> */}
      </View>
    );
    // }
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: '#eee',
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    // borderBottomColor: 'black',
    // borderLeftColor: '#ffe694',
    // borderRightColor: '#ffe694',
    // borderTopColor: '#ffe694',
    padding: 10,
    fontSize: 18,
    marginHorizontal: 25,
    marginBottom: 10,
  },
  inputMultiline: {
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
    borderRadius: 10,
    marginHorizontal: 25,
    flex: 1,
  },
  inputIcon: {
    padding: 10,
    marginLeft: 25,
    fontSize: 30,
  },
  text: {
    padding: 10,
    fontSize: 18,
    marginHorizontal: 25,
  },
  checkbox: {
    padding: 10,
    paddingLeft: 30,
  },
  // icon: {
  //   padding: 10,
  //   marginHorizontal: 25,
  //   fontSize: 30,
  //   color: 'black',
  // },
  button: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 30,
  },
});
