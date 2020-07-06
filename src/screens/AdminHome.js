import * as React from 'react';
import { View, StyleSheet, Text ,TouchableNativeFeedback , Image} from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body,  Tab, Tabs, ScrollableTab} from "native-base";
import DefaultButton from '../components/UI/DefaultButton/DefaultButton'
import FontAweseomeIcon from 'react-native-vector-icons/FontAwesome5';

class AdminHome extends React.Component {
    render(){
        return (
             <Container>
        <Content padder>
        <Header noLeft style={styles.header} hasTabs>
          <Body>
            <Title>ADMIN</Title>
          </Body>
        </Header>  
          <View style={styles.button}>
          <TouchableNativeFeedback >
              <View style={styles.selectButtonVendor}>
                    <Text style={styles.selectButtonText}>Vendors</Text>
                    <Text style={styles.selectButtonText}>127</Text>
                    <FontAweseomeIcon name="truck" size={20} color="#fff" style={styles.iconStyle}/>
                </View>
            </TouchableNativeFeedback>
            </View>
            <View style={styles.button}>
          <TouchableNativeFeedback >
              <View style={styles.selectButtonCustomer}>
                    <Text style={styles.selectButtonText}>Customers</Text>
                    <Text style={styles.selectButtonText}>405</Text>
                    <FontAweseomeIcon name="shopping-cart" size={20} color="#fff" style={styles.iconStyle}/>
                </View>
            </TouchableNativeFeedback>
            </View> 
            <View style={styles.button}>
          <TouchableNativeFeedback >
              <View style={styles.selectButtonOrder}>
                    <Text style={styles.selectButtonText}>Orders</Text>
                    <Text style={styles.selectButtonText}>1123</Text>
                    <FontAweseomeIcon name="bitbucket" size={20} color="#fff" style={styles.iconStyle}/>
                </View>
            </TouchableNativeFeedback>
            </View>
            <View style={styles.button}>
          <TouchableNativeFeedback >
              <View style={styles.selectButtonCategory}>
                    <Text style={styles.selectButtonText}>Categories</Text>
                    <Text style={styles.selectButtonText}>54</Text>
                    <FontAweseomeIcon name="carrot" size={20} color="#fff" style={styles.iconStyle}/>
                </View>
            </TouchableNativeFeedback>
            </View>
            <View style={styles.button}>
          <TouchableNativeFeedback >
              <View style={styles.selectButton}>
                    <FontAweseomeIcon name="user" size={30} color="#fff" style={styles.iconStyle}/>
                    <Text style={styles.selectButtonText}>Best vendor:</Text>
                    <Text style={styles.selectButtonText}>Mr. Rathnayake</Text>
                    
                </View>
            </TouchableNativeFeedback>
            </View>
            <View style={styles.button}>
          <TouchableNativeFeedback >
              <View style={styles.selectButton}>
                    <FontAweseomeIcon name="user" size={30} color="#fff" style={styles.iconStyle}/>
                    <Text style={styles.selectButtonText}>Best customer:</Text>
                    <Text style={styles.selectButtonText}>Ms. Perera</Text>
                    
                </View>
            </TouchableNativeFeedback>
            </View>
        </Content>
      </Container>
        )
    }
}

const styles = StyleSheet.create({

    header:{
        backgroundColor: 'black'
    },
    button: {
        padding: 5,
        margin: 10
    },
    iconStyle: {
        //padding: 10,
        //margin: 8
    },
    selectButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 25,
        backgroundColor: '#808080',
        height: 100,
        borderRadius: 20,
        margin: 10,
        marginTop: 30
    },
    selectButtonVendor: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: '#03c6fc',
        height: 50,
        borderRadius: 20
    },
    selectButtonCustomer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: '#7ed689',
        height: 50,
        borderRadius: 20
    },
    selectButtonOrder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: '#f075b3',
        height: 50,
        borderRadius: 20
    },
    selectButtonCategory: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        backgroundColor: '#c686f0',
        height: 50,
        borderRadius: 20
    },
    selectButtonText: {
        color: 'white',
        fontSize: 18
    }
})

export default AdminHome;