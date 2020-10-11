/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Tab,
  Tabs,
  ScrollableTab,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ViewProducts from '../../components/Product/viewProduct';

export default function VendorHome(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };
  //console.log(props.route.params)
  return (
    <ScrollView>
      <View style={{flex: 1, width: '100%'}}>
        <Header noLeft style={styles.header} hasTabs>
          <Body>
            <View style={styles.headerView}>
              <Left>
                <Text style={styles.headerText}>
                  {props.route.params.user.userName}
                </Text>
              </Left>
              <Title>VENDOR</Title>

              <Right>
                <Button
                  transparent
                  onPress={() => props.navigation.push('CustomerMap')}>
                  <Icon
                    name="map"
                    size={20}
                    color="#fff"
                    style={styles.iconStyle}
                  />
                  <Text style={styles.headerText}>Map</Text>
                </Button>
              </Right>
            </View>
          </Body>
        </Header>
        <View>
          <ImageBackground
            source={require('./cover.jpg')}
            style={styles.backgroundImage}
          />
        </View>
        <View style={styles.posImage}>
          <Image source={require('./image.jpg')} style={styles.profileImage} />
        </View>
        <View style={[styles.cameraImage, styles.coverCamera]}>
          <TouchableOpacity>
            <Icon name="camera" size={17} color="black" />
          </TouchableOpacity>
        </View>
        <View style={[styles.cameraImage, styles.proCamera]}>
          <TouchableOpacity>
            <Icon name="camera" size={17} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View style={styles.buttonPublicView}>
            <Text style={[styles.text, styles.publicView]}>
              {' '}
              PUBLIC VIEW <Icon name="eye" size={15} color="white" />
            </Text>
          </View>
        </TouchableOpacity>
        <View>
          <Text style={[styles.text, styles.profileName]}>Janitha Bakers</Text>
        </View>
        <View style={styles.statusView}>
          <Switch
            style={styles.statusSwitch}
            trackColor={{false: '#b9b9ba', true: '#98c99c'}}
            thumbColor={isEnabled ? 'green' : 'red'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={[styles.text, styles.status]}>
            {' '}
            {isEnabled ? 'On the roads' : 'Not delivering now'}
          </Text>
        </View>
        <View style={styles.orderProductView}>
          <TouchableOpacity
            onPress={() => {
              props.nav.push('viewVendorProduct');
            }}>
            <View style={styles.buttonViewOrders}>
              <Text style={[styles.text, styles.viewOrders]}>
                {' '}
                VIEW ORDERS <Icon name="list-alt" size={16} color="white" />
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.nav.push('Test');
            }}>
            <View style={styles.buttonAddProduct}>
              <Text style={[styles.text, styles.viewOrders]}>
                {' '}
                ADD PRODUCT <Icon name="plus-circle" size={16} color="white" />
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.deliveryDetailsView}>
          <View style={styles.deliveryHoursView}>
            <TouchableOpacity>
              <Icon name="clock-o" size={29} color="black" />
            </TouchableOpacity>
            <Text style={styles.deliveryHours}>
              <Text> Normal delivery hours </Text>
              <Text style={styles.deliveryDetails}> 6am - 9am </Text>
            </Text>
          </View>
          <View style={styles.deliveryHoursView}>
            <TouchableOpacity>
              <Icon name="calendar" size={25} color="black" />
            </TouchableOpacity>
            <Text style={styles.deliveryHours}>
              <Text> Next visiting date </Text>
              <Text style={styles.deliveryDetails}>06/07/2020</Text>
            </Text>
          </View>
          <View style={styles.deliveryHoursView}>
            <TouchableOpacity>
              <Icon name="map" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.deliveryHours}> Routes </Text>
            <View style={styles.deliveryHours}>
              <Text style={styles.deliveryDetails}>
                Sirimalgala road, Araliya uyana,
              </Text>
              <Text style={styles.deliveryDetails}>
                Udana Mawatha, Sawsiri Place
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.deliveryDetailsView}>
          <View style={styles.deliveryHoursView}>
            <TouchableOpacity>
              <Icon
                name="truck"
                size={22}
                color="black"
                style={{transform: [{rotateY: '180deg'}]}}
              />
            </TouchableOpacity>
            <Text style={styles.deliveryHours}>
              <Text> Vehicle number </Text>
              <Text style={styles.deliveryDetails}>CAH 1386</Text>
            </Text>
          </View>
          <View style={styles.deliveryHoursView}>
            <TouchableOpacity>
              <Icon name="phone" size={25} color="black" />
            </TouchableOpacity>
            <Text style={styles.deliveryHours}>
              <Text> Phone number </Text>
              <Text style={styles.deliveryDetails}> 011-555 5559 </Text>
            </Text>
          </View>
          <View style={styles.deliveryHoursView}>
            <TouchableOpacity>
              <Icon name="map-marker" size={25} color="black" />
            </TouchableOpacity>
            <Text style={styles.deliveryHours}> Business address </Text>
            <View style={styles.deliveryHours}>
              <Text style={styles.deliveryDetails}>
                Janitha Bakers, No. 39,
              </Text>
              <Text style={styles.deliveryDetails}>
                Makola road, Kiribathgoda
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.deliveryDetailsView}>
          <View style={[styles.deliveryHoursView, styles.reviews]}>
            <Text style={[styles.deliveryDetails, styles.reviews]}>3.9 </Text>
            <TouchableOpacity>
              <Icon name="star" size={22} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.deliveryHoursView}>
            <Text style={styles.deliveryHours}>
              <Text style={styles.deliveryDetails}> Kavindu Gunaratne </Text>
              <Text> Pleasant service </Text>
            </Text>
          </View>
          <View style={styles.deliveryHoursView}>
            <Text style={styles.deliveryHours}>
              <Text style={styles.deliveryDetails}> Gayani Kariyawasam </Text>
              <Text> Delicious food </Text>
            </Text>
          </View>
        </View>
        <ViewProducts />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
  },
  text: {
    fontFamily: 'OpenSans-Regular',
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: '#e0b743',
  },
  posImage: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 120,
    left: '9%',
    alignSelf: 'flex-start',
    zIndex: 50,
  },
  backgroundImage: {
    width: '100%',
    height: 180,
  },
  coverCamera: {
    position: 'absolute',
    left: '85%',
    top: 140,
    zIndex: 60,
  },
  proCamera: {
    position: 'absolute',
    left: '31%',
    top: 190,
    zIndex: 60,
  },
  cameraImage: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 30,
    height: 30,
    borderRadius: 120,
    borderWidth: 1,
    borderColor: '#e0b743',
  },
  publicView: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonPublicView: {
    top: 10,
    left: '63%',
    justifyContent: 'center',
    width: '34%',
    height: 35,
    backgroundColor: '#e0b743',
    margin: 5,
    borderRadius: 30,
  },
  profileName: {
    fontSize: 26,
    fontWeight: '700',
    alignSelf: 'flex-start',
    left: '3%',
    top: 5,
  },
  statusView: {
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-start',
    left: '3%',
  },
  statusSwitch: {
    transform: [{scaleX: 1.3}, {scaleY: 1.3}],
  },
  status: {
    fontSize: 17,
    fontWeight: '700',
    color: 'black',
  },
  orderProductView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
  },
  viewOrders: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
  },
  buttonViewOrders: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    // left: '15%',
    width: '100%',
    height: 35,
    margin: '2%',
    borderRadius: 20,
  },
  buttonAddProduct: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    // left: '60%',
    width: '100%',
    height: 35,
    margin: '2%',
    borderRadius: 20,
  },
  deliveryHoursView: {
    flexDirection: 'row',
    height: 44,
    width: '100%',
    justifyContent: 'flex-start',
    left: '7%',
    alignItems: 'flex-start',
  },
  deliveryHours: {
    fontSize: 15,
  },
  deliveryDetails: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  deliveryDetailsView: {
    borderColor: 'black',
    borderWidth: 0.5,
    margin: '5%',
    padding: '2%',
  },
  reviews: {
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  headerText: {
    color: 'white',
  },
});

// eslint-disable-next-line no-lone-blocks
{
  /* <View style={styles.publicView}>
          <Button buttonStyle={styles.buttonPublicView}
            title="PUBLIC VIEW "
            icon={
              <Icon
                name="eye"
                size={15}
                color="white"
              />
            }
            iconRight
          />
        </View> */
}
