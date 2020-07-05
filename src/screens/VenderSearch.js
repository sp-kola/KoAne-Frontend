import React,{Component} from 'react';
import {View,Text,TextInput,ScrollView,Dimensions,StyleSheet,CheckBox} from 'react-native';
import { Container, Header, Title, Content, Button, Left, Right, Body,  Tab, Tabs, ScrollableTab} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome5';


const { width } = Dimensions.get('window');

export default class VenderSearch extends Component{
    componentDidMount() {
        setTimeout(() => {this.scrollView.scrollTo({x: -30}) }, 1) // scroll view position fix
    }



    render(){
        const itemsCount = 50
        //const [isSelected, setSelection] = useState(false);
        return(
            <View>
                <Header noLeft style={styles.header} hasTabs>
            <Body>
                <Title>SEARCH</Title>
            </Body>
            </Header>
                <View style={{flexDirection:'row',borderWidth:1,justifyContent:'center',
                            alignItems:'center',width:380,height:50,margin:'5%',borderRadius:118}}> 
                {/* <TextInput style={{borderWidth:1, borderColor:'black',margin:10, borderRadius:18,flex:1,flexDirection:'row'}}> */}
                <TextInput style={{flex:1,}} />
                <Icon name="search" style={{color:'black',paddingRight:18,fontSize:18}}/>
                 </View> 

                 <View style={styles.container2}>
                    <View style={styles.checkboxContainer} top={20}>
                        <CheckBox
                        //value={isSelected}
                        //onValueChange={setSelection}
                        style={styles.checkbox}
                        checked = {false} onClick={this._CheckBoxState}
                        />
                        <Text style={styles.label}>Top rated</Text>
                    </View>
                    <View style={styles.checkboxContainer2} top={20} left={145} zIndex={10}>
                        <CheckBox
                        //value={isSelected}
                        //onValueChange={setSelection}
                        style={styles.checkbox}
                        checked = {false} onClick={this._CheckBoxState}
                        />
                        <Text style={styles.label}>Sanitary</Text>
                    </View>
                    <View style={styles.checkboxContainer2} top={20} left={250} zIndex={20}>
                        <CheckBox
                        //value={isSelected}
                        //onValueChange={setSelection}
                        style={styles.checkbox}
                        checked = {false} onClick={this._CheckBoxState}
                        />
                        <Text style={styles.label}>Backery</Text>
                    </View>
                    <View style={styles.checkboxContainer2} top={60} left={19} zIndex={30}>
                        <CheckBox
                        //value={isSelected}
                        //onValueChange={setSelection}
                        style={styles.checkbox}
                        checked = {false} onClick={this._CheckBoxState}
                        />
                        <Text style={styles.label}>Medicine</Text>
                    </View>
                    <View style={styles.checkboxContainer2} top={60} left={145} zIndex={40}>
                        <CheckBox
                        //value={isSelected}
                        //onValueChange={setSelection}
                        style={styles.checkbox}
                        checked = {false} onClick={this._CheckBoxState}
                        />
                        <Text style={styles.label}>Fruits</Text>
                    </View>
                    <View style={styles.checkboxContainer2} top={60} left={250} zIndex={40}>
                        <CheckBox
                        //value={isSelected}
                        //onValueChange={setSelection}
                        style={styles.checkbox}
                        checked = {false} onClick={this._CheckBoxState}
                        />
                        <Text style={styles.label}>Vegitables</Text>
                    </View>
                    <View style={styles.checkboxContainer2} top={100} left={19} zIndex={50}>
                        <CheckBox
                        //value={isSelected}
                        //onValueChange={setSelection}
                        style={styles.checkbox}
                        checked = {false} onClick={this._CheckBoxState}
                        />
                        <Text style={styles.label}>Coconuts</Text>
                    </View>
                    <View style={styles.checkboxContainer2} top={100} left={145} zIndex={51}>
                        <CheckBox
                        //value={isSelected}
                        //onValueChange={setSelection}
                        style={styles.checkbox}
                        checked = {false} onClick={this._CheckBoxState}
                        />
                        <Text style={styles.label}>Dairies</Text>
                    </View>
                    <View style={styles.checkboxContainer2} top={100} left={250} zIndex={52}>
                        <CheckBox
                        //value={isSelected}
                        //onValueChange={setSelection}
                        style={styles.checkbox}
                        checked = {false} onClick={this._CheckBoxState}
                        />
                        <Text style={styles.label}>Chicken</Text>
                    </View>
                    <View style={styles.checkboxContainer2} top={140} left={19} zIndex={53}>
                        <CheckBox
                        //value={isSelected}
                        //onValueChange={setSelection}
                        style={styles.checkbox}
                        checked = {false} onClick={this._CheckBoxState}
                        />
                        <Text style={styles.label}>Spices</Text>
                    </View>
                    <View style={styles.checkboxContainer2} top={140} left={145} zIndex={54}>
                        <CheckBox
                        //value={isSelected}
                        //onValueChange={setSelection}
                        style={styles.checkbox}
                        checked = {false} onClick={this._CheckBoxState}
                        />
                        <Text style={styles.label}>Fish</Text>
                    </View>
                    <View style={styles.checkboxContainer2} top={140} left={250} zIndex={55}>
                        <CheckBox
                        //value={isSelected}
                        //onValueChange={setSelection}
                        style={styles.checkbox}
                        checked = {false} onClick={this._CheckBoxState}
                        />
                        <Text style={styles.label}>Eggs</Text>
                    </View>
                </View>

                <Text style={{marginTop:50,fontWeight:'bold',fontSize:20,margin:'8%'}}>VENDERS AVAILABLE TO YOU</Text>
                 <ScrollView ref={(scrollView) => { this.scrollView = scrollView; }}
                            style={styles.container}
                            //pagingEnabled={true}
                            horizontal= {true}
                            decelerationRate={0}
                            snapToOffsets={[...Array(itemsCount)].map((x, i) => (i * (width - 60)) )}
                            snapToAlignment={"start"}
                            contentInset={{
                            top: 0,
                            left: 30,
                            bottom: 0,
                            right: 30,}}>
                        {[...Array(itemsCount)].map((x, i) =>
                    <View style={[styles.view, {backgroundColor: i % 2 == 0 ? 'black' : 'yellow',}]} />)}
                </ScrollView>  
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {},
    header:{
        backgroundColor: 'black'
    },
    view: {
      marginTop: 10,
      //backgroundColor: 'blue',
      width:width - 300,
      margin: 10,
      height: 90,
      borderRadius: 10,
      borderWidth:1,
    },
    container2: {
        margin:'5%',
        flexDirection:'row',
        alignItems: "flex-start",
        justifyContent:'flex-start',
        borderWidth:2,
        width:375,
        height:200,
        borderRadius:50

      },
      checkboxContainer: {
        flexDirection: "row",
        marginLeft: '5%',
      },
      checkboxContainer2: {
        flexDirection: "row",
        marginLeft: '5%',
      },
      checkbox: {
        alignSelf: "center",
      },
      label: {
        margin: 8,
        fontSize:16
      },
      checkboxContainer2: {
        flexDirection: "row",
        margin:1,
        position:'absolute',
        alignSelf:'flex-start',
        
      },
  });