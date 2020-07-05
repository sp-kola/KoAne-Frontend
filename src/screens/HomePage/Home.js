import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body,  Tab, Tabs, ScrollableTab} from "native-base";

import AdminHome from './AdminHome'
import Maps from '../Location/CustomerLocation/Map'

class Home extends React.Component {
    render(){
        return (
             <Container>
        <Header noLeft style={styles.header} hasTabs>
          <Body>
            <Title>Home</Title>
          </Body>
        </Header>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="Home">
            <AdminHome />
          </Tab>
          <Tab heading="Map">
            <Maps />
          </Tab>
        </Tabs>
      </Container>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: 'black'
    }
})

export default Home;