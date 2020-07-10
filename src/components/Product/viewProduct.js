import React from 'react';

import {Text, StyleSheet, ImageBackground, Image,View} from 'react-native';

import {Card, CardItem, Left, Body, Content} from 'native-base';

import img from '../../../assets/login1.jpg';
import Fishbun from '../../../assets/fishbun.jpg';
import Sausagebun from '../../../assets/sausagebun.jpg';
import Rolls from '../../../assets/Rolls.jpg';
import pastry from '../../../assets/fishPastry.jpg';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function viewProduct() {
  return (
    <View style={styles.background}>
      <Content>
        <TouchableOpacity>
          <Card transparent style={styles.card}>
            <CardItem>
              <Left>
                <Body>
                  <Text style={styles.text}>Fish bun</Text>
                  <Text style={styles.subtext}>Price: 50.00</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={Fishbun} style={styles.image} />
            </CardItem>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card transparent style={styles.card}>
            <CardItem>
              <Left>
                <Body>
                  <Text style={styles.text}>Sausage bun</Text>
                  <Text style={styles.subtext}>Price: 60.00</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={Sausagebun} style={styles.image} />
            </CardItem>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card transparent style={styles.card}>
            <CardItem>
              <Left>
                <Body>
                  <Text style={styles.text}>Rolls</Text>
                  <Text style={styles.subtext}>Price: 50.00</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={Rolls} style={styles.image} />
            </CardItem>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card transparent style={styles.card}>
            <CardItem>
              <Left>
                <Body>
                  <Text style={styles.text}>Fish Pastry</Text>
                  <Text style={styles.subtext}>Price: 50.00</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={pastry} style={styles.image} />
            </CardItem>
          </Card>
        </TouchableOpacity>
      </Content>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',

    backgroundColor: '#eee'

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
