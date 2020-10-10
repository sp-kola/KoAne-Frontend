import React from 'react';

import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Row} from 'native-base';

import * as Animatable from 'react-native-animatable';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="rubberBand"
          duraion="3500"
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>

      <Animatable.View style={styles.fotter} animation="fadeInUpBig">
        <Text style={styles.title}>Welcome </Text>
        <Text style={styles.subtitle}>Find your loyal Customer or Vendor </Text>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginRegister')}>
            <LinearGradient
              colors={['#d47c08', '#e39d07']}
              style={styles.start}>
              <Text style={styles.textStart}> Get Started</Text>
              <MaterialIcons name="navigate-next" color="#111" size={32} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;

// const {height} = Dimensions.get('screen');
// const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa931',
  },

  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  fotter: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },

  logo: {
    // width: height_logo,
    // height: height_logo,
  },

  title: {
    color: '#05375a',
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
  },
  subtitle: {
    color: '#05375a',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
  },

  start: {
    width: 180,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },

  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },

  textStart: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
