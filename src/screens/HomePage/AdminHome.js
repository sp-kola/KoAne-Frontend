import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body,  Tab, Tabs, ScrollableTab} from "native-base";

class AdminHome extends React.Component {
    render(){
        return (
             <Container>
        <Content padder>
          <Text>
            Welcome To KoAne!
          </Text>
        </Content>
      </Container>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: 'black'
    }
})

export default AdminHome;