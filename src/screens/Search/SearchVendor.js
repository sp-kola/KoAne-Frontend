import React, {Component}  from 'react'
import {View, Text, StyleSheet, FlatList, Dimensions, KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import { Container, Header, Left, Body, Right, Title, Subtitle , Button, Tab, Tabs, ScrollableTab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux'
import { searchVendor, getAllVendors } from '../../store/actions/index'
import { StackActions } from '@react-navigation/native';

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'

import ListItem from './ListItem'

// import AddProduct from '../AddProduct/AddProduct';
// import ViewProduct from '../ViewProduct/ViewProduct';


class SearchVendor extends Component {

    state ={
        vendorsLoaded: true ,
        search: ''
      }
    
      componentDidMount(){
    //     console.log('loading')
    //     this.props.onLoadUserBills(this.props.email)
    //     this.props.onStopSearchBill()
    //    console.log('in bills', this.props) 
        if(!this.props.vendors){
            this.props.onLoadVendors()
        }
      }

      selectVendor = async(id) => {
        console.log(id, this.props.navigation)
        await this.props.onSearchVendor(id)
        if(this.props.selectedVendor){
            const pushAction = StackActions.push('VendorPublicView');

            this.props.nav.dispatch(pushAction);
        }
      }
    
      // componentDidUpdate(){
      //   this.props.onLoadUserBills(this.props.email)
      //   this.props.onStopSearchBill()
      //  console.log('in bills', this.props)   
      // }
    
      handleChange = (val) => {
        this.setState({
            search: val
        })
      } 
    
    renderlistItem = ({item}) => {
        console.log(item, this.props.nav)
        return(
            <TouchableOpacity onPress={()=> this.selectVendor(item._id)} >
                <View style={{height: 70, backgroundColor: 'rgba(224,183,67,0.6)', borderWidth: 2, padding: 5, margin: 10 , borderRadius: 20, paddingLeft: 15}}>
                    <Text style={{fontWeight: 'bold'}} >{item.businessName}</Text>
                    <Text>{item.firstName} {item.lastName}</Text>
                    <Text>{item.businessAddress}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    
    render(){
        //   console.log('render ', this.props.bills)
        console.log('PROPS ',this.props)
        //   let bills = this.props.bills
        let vendors = this.props.vendors
        let vendorSearch = this.state.search.trim().toLowerCase();
        //console.log('search shop',shop)
        if (vendorSearch.length > 0) {
        vendors = vendors.filter(vendor => vendor.businessName.toLowerCase().match(vendorSearch));
        }
           
          let header = (
            <View style={{alignItems: 'center'}}>
            <DefaultInput
                placeholder = 'search by business name'
                style = {{
                    borderColor: 'black',
                    width: Dimensions.get("window").width* 0.9,
                    margin: 5
                }}
                value={this.state.search}
                onChangeText={this.handleChange}
            />
            </View>  
          )
            
          let content = null
    
            if(this.state.vendorsLoaded){
              content = (
                 <KeyboardAvoidingView>
                     
                     <FlatList 
                      ListHeaderComponent = {header}
                      style={styles.listContainer}
                      data= {vendors}
                      //horizontal= {true}
                      keyExtractor= {vendor => vendor.key}
                      renderItem={() => <ListItem/>}
                    />
                  </KeyboardAvoidingView>    
              )
          }  
    
          console.log('VENDORS',vendors)
            return(
                <View>
                    <KeyboardAvoidingView>
                     
                     <FlatList 
                      ListHeaderComponent = {header}
                      style={styles.listContainer}
                      data= {vendors}
                      //horizontal= {true}
                      keyExtractor= {vendor => vendor.key}
                      renderItem={this.renderlistItem}
                    />
                  </KeyboardAvoidingView> 
                </View>    
            )
        }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: 'black'
    }
})

const mapStateToProps = state => {
    return{
        // bills: state.bills.bills,
        // searchBill: state.bills.searchBill,
        // email: state.users.loggedUserEmail,
        // userName: state.users.loggedUserName,
        // contactNumber: state.users.loggedUserContactNumber,
        vendors: state.vendor.vendors,
        selectedVendor: state.vendor.selectedVendor
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        onLoadVendors: () => dispatch(getAllVendors()),
        onSearchVendor: (id) => dispatch(searchVendor(id))
        // onSearchBill: (val) => dispatch(searchBill(val)),
        // onStopSearchBill: () => dispatch(stopSearchBill()),
        // onLoadUserBills: (email) => dispatch(getUserBills(email))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(SearchVendor);