import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Container, Header, Left, Body, Right, Title, Subtitle, Button, Tab, Tabs, ScrollableTab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Vendors extends Component {
    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <View style={styles.centerComponent}>
                        <Text style={styles.title}>Best Rated Vendors</Text>
                        <Icon name="certificate" size={120} color="red" style={{ alignSelf: 'center' }} />
                        {/*<View style={styles.starList}>
                            <Icon name="star" size={25} color="blue" style={{ margin: '5%' }} />
                            <Icon name="star" size={25} color="blue" style={{ margin: '5%' }} />
                            <Icon name="star" size={25} color="blue" style={{ margin: '5%' }} />
                            <Icon name="star-half" size={25} color="blue" style={{ margin: '5%' }} />
                        </View>*/}
                        <View style={styles.renderComponent} >
                            <Text style={styles.testHeader} > Cutomer 1</Text>
                            <View style={styles.starComponent}>
                                <Icon name="star" size={15} color="red" style={{ margin: '2%' }} />
                                <Icon name="star" size={15} color="red" style={{ margin: '2%' }} />
                                <Icon name="star" size={15} color="red" style={{ margin: '2%' }} />
                                <Icon name="star" size={15} color="red" style={{ margin: '2%' }} />
                                <Icon name="star" size={15} color="red" style={{ margin: '2%' }} />
                            </View>
                        </View>
                        <View style={styles.renderComponent} >
                            <Text style={styles.testHeader} > Cutomer 2</Text>
                            <View style={styles.starComponent}>
                                <Icon name="star-half" size={15} color="red" style={{ margin: '2%' }} />
                                <Icon name="star" size={15} color="red" style={{ margin: '2%' }} />
                                <Icon name="star" size={15} color="red" style={{ margin: '2%' }} />
                                <Icon name="star" size={15} color="red" style={{ margin: '2%' }} />
                                <Icon name="star" size={15} color="red" style={{ margin: '2%' }} />
                            </View>
                        </View>
                        <View style={styles.renderComponent} >
                            <Text style={styles.testHeader} > Cutomer 3</Text>
                            <View style={styles.starComponent}>
                                <Icon name="star-half" size={15} color="red" style={{ margin: '2%' }} />
                                <Icon name="star" size={15} color="red" style={{ margin: '2%' }} />
                                <Icon name="star" size={15} color="red" style={{ margin: '2%' }} />
                                <Icon name="star" size={15} color="red" style={{ margin: '2%' }} />
                            </View>
                        </View>
                    </View>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
    },
    centerComponent: {
        padding: 20,
        margin: 5,
        backgroundColor: '#eee',
        height: '95%',
        width: '100%',

    },
    title: {
        color: 'black',
        textTransform: 'uppercase',
        textAlign: 'center',
        padding: 5,
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10
    },
    text: {
        color: 'black',
        textTransform: 'uppercase',
        textAlign: 'center',
        padding: 1,
        fontSize: 50,
        fontWeight: 'bold',
    },
    starList: {
        flexDirection: 'row',
        margin: '5%',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    renderComponent: {
        marginTop: '10%',
        borderRadius: 18,
        borderWidth: 5,
        borderColor: 'blue',
        flexDirection: 'row',
        padding: '1%',
        backgroundColor: '#fff'
    },
    starComponent: {
        flexDirection: 'row-reverse',
        margin: '1%',
        padding: 2
    },
    testHeader: {
        color: 'black',
        textTransform: 'uppercase',
        textAlign: 'left',
        padding: 2,
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 15,
    }
})
export default Vendors;