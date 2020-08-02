import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Card, CardItem, Left, Body, Content, List} from 'native-base';

export default class Product extends Component {
  render() {
    // console.log(this.props.Name);
    return (
      <TouchableOpacity>
        <View key={this.props.id}>
          <Card transparent style={styles.card}>
            <CardItem header button onPress={() => alert('This is Card')}>
              <Left>
                <Text style={styles.text}>{this.props.Name}</Text>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.subtext}>{this.props.desc}</Text>
              </Body>
            </CardItem>

            {/* <CardItem cardBody>
              <Image source={} style={styles.image} />
            </CardItem> */}
            <CardItem footer>
              <Text style={styles.subtext}>Rs. {this.props.price} /=</Text>
            </CardItem>
        </Card>
        </View>
      </TouchableOpacity>
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
});
