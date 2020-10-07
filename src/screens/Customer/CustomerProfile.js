import React,{Component} from 'react';
import {View,Text,TextInput,ScrollView,Dimensions,TouchableOpacity,Image,StyleSheet} from 'react-native';
import { Container, Header, Content, Thumbnail, Left, Body, Title, Right, Footer, Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import user from './Elements/2.jpg'
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {updateLoggedCustomer, getLoggedCustomer, updateAvatar} from '../../store/actions/index'
import DefaultButton from '../../components/UI/DefaultButton/DefaultButton'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import PickImage from '../../components/PickImage/PickImage'
// loggedCustomerCustomerId: '',
// loggedCustomerUserName: '',
// loggedCustomerFirstName: '',
// loggedCustomerLastName: '',
// loggedCustomerEmail: '',
// loggedCustomerContactNumber: '',
// loggedCustomerLastReportedLocation: [],
// loggedCustomerDeliveryAddresses: [],
class CustomerProfile extends Component{

    // userName: this.props.userName,
    //     id: this.props.id,
    //     firstName: this.props.firstName,
    //     lastName: this.props.lastName,
    //     email: this.props.email,
    //     contactNumber: this.props.contactNumber,
    //     lastReportedLocation: this.props.lastReportedLocation,
    //     deliveryAddresses: this.props.deliveryAddresses   
    state={
        modalVisible: false,
        updateAvatarVisible: false,
        userName: '',
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        lastReportedLocation: [],
        deliveryAddresses: [] ,
        image: null         
    }

    reset = () => {
        this.setState({
                modalVisible: false,
                updateAvatarVisible: false,
                userName: '',
                firstName: '',
                lastName: '',
                email: '',
                contactNumber: '',
                lastReportedLocation: [],
                deliveryAddresses: [], 
                image: null
            }
        )
    }

    imagePickedHandler = image => {
        this.setState(prevState => {
            return{
                ...prevState,
                image: image
            }
        })
    }

    modalVisibleHandler = () => {
        this.setState(prevState => {
            return {
            modalVisible: prevState.modalVisible ? false: true
            }
        })
    }

    avatarModalVisibleHandler = () => {
        this.setState(prevState => {
            return {
                updateAvatarVisible: prevState.updateAvatarVisible ? false: true
            }
        })
    }

    userNameChangerHandler = (val) => {
        this.setState(prevState => {
            return {
              ...prevState,
              userName: val
            };
          });
    }

    firstNameChangerHandler = (val) => {
        this.setState(prevState => {
            return {
              ...prevState,
              firstName: val
            };
          });
    }

    lastNameChangerHandler = (val) => {
        this.setState(prevState => {
            return {
              ...prevState,
              lastName: val
            };
          });
    }

    emailChangerHandler = (val) => {
        this.setState(prevState => {
            return {
              ...prevState,
              email: val
            };
          });
    }

    contactNumberChangerHandler = (val) => {
        this.setState(prevState => {
            return {
              ...prevState,
              contactNumber: val
            };
          });
    }


    updateButtonHandler = () => {
        this.setState(prevState => {
            return {
            modalVisible: prevState.modalVisible ? false: true
            }
        })
        const userName= this.state.userName? this.state.userName: this.props.userName
        const firstName= this.state.firstName? this.state.firstName: this.props.firstName
        const lastName= this.state.lastName? this.state.lastName: this.props.lastName
        const email= this.state.email? this.state.email:this.props.email
        const contactNumber= this.state.contactNumber?this.state.contactNumber:this.props.contactNumber
        const lastReportedLocation= this.state.lastReportedLocation?this.state.lastReportedLocation:this.props.lastReportedLocation
        const deliveryAddresses= this.state.deliveryAddresses?this.props.deliveryAddresses:this.state.deliveryAddresses  
        this.props.onUpdateCustomer(userName,firstName,lastName,email,contactNumber,lastReportedLocation,deliveryAddresses)
        this.reset()
    }

    updateImage = () => {
        this.setState(prevState => {
            return {
                updateAvatarVisible: prevState.updateAvatarVisible ? false: true
            }
        })
        this.imagePicker.reset()
        if(this.state.image){
            this.props.onUpdateAvatar(this.state.image)
            alert('image updating')
            this.reset()
        }
        else{
            alert('Insert an image')
        }
    }
    

    render(){
        //console.log(this.state)
        const updateAvatar =  <Modal 
                    isVisible={this.state.updateAvatarVisible} 
                    style={styles.imageModal} 
                    backdropOpacity={0.8}
                    animationIn="zoomInDown"
                    animationOut="zoomOutUp"
                    animationInTiming={600}
                    animationOutTiming={600}
                    backdropTransitionInTiming={600}
                    backdropTransitionOutTiming={600}
                    swipeDirection={['up', 'left', 'right', 'down']}
                    >
                    <PickImage onImagePick={this.imagePickedHandler} ref={ref => this.imagePicker = ref}/>
                    <DefaultButton  
                    color='black' 
                    onPress={this.avatarModalVisibleHandler}
                    >
                        close
                    </DefaultButton>
                    <DefaultButton  
                    color='red' 
                    onPress={this.updateImage}
                    >
                        update
                    </DefaultButton>
                </Modal>
        const modal = <Modal 
                        isVisible={this.state.modalVisible} 
                        style={styles.modal} 
                        backdropOpacity={0.8}
                        animationIn="zoomInDown"
                        animationOut="zoomOutUp"
                        animationInTiming={600}
                        animationOutTiming={600}
                        backdropTransitionInTiming={600}
                        backdropTransitionOutTiming={600}
                        swipeDirection={['up', 'left', 'right', 'down']}
                        >
                        <Header style={styles.header} androidStatusBarColor='black' backgroundColor='#E0B743'>
                        <Left>
                            <Button transparent>
                            <Icon name="map" size={30} color="white" />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Updating profile</Title>
                        </Body>
                        </Header>
                        <Text style={styles.label}>userName: </Text>
                        <DefaultInput
                            placeholder= {this.props.userName}
                            onChangeText= {this.userNameChangerHandler} 
                            value={this.state.userName}
                            //style={styles.inputField}
                        />
                        <Text style={styles.label}>first name: </Text>
                        <DefaultInput
                            placeholder= {this.props.firstName}
                            onChangeText= {this.firstNameChangerHandler} 
                            value={this.state.firstName}
                            //style={styles.inputField}
                        />
                        <Text style={styles.label}>last Name: </Text>
                        <DefaultInput
                            placeholder= {this.props.lastName}
                            onChangeText= {this.lastNameChangerHandler} 
                            value={this.state.lastName}
                            //style={styles.inputField}
                        /> 
                        <Text style={styles.label}>email: </Text>
                        <DefaultInput
                            placeholder= {this.props.email}
                            onChangeText= {this.emailChangerHandler} 
                            value={this.state.email}
                            //style={styles.inputField}
                        />
                        {/* <Text style={styles.label}>contact number: </Text>
                        <DefaultInput
                            placeholder= '079123456'
                            onChangeText= {this.contactNumberChangerHandler} 
                            value={this.state.contactNumber}
                            //style={styles.inputField}
                        /> */}
                        
                        <DefaultButton  
                        color='black' 
                        onPress={this.modalVisibleHandler}
                        >
                            close
                        </DefaultButton>
                        <DefaultButton  
                        color='red' 
                        onPress={this.updateButtonHandler}
                        >
                            update
                        </DefaultButton>
                    </Modal>
        return(
            <ScrollView keyboardShouldPersistTaps='always'>
                {modal}
                {updateAvatar}
            <View style={styles.headerContainer}>
                <View style={styles.shadow}>
                <View>
                <Thumbnail large={true} style={{width: 120, height: 120, borderRadius: 150}} source={user}/>
                <TouchableOpacity
                    onPress= {this.avatarModalVisibleHandler}
                >
                <View style={styles.cameraBtn}>
                    <Icon name='camera' size={20} color='black'/>  
                </View>
            </TouchableOpacity>
                    </View>
                    <View style={styles.nameContainer}>
                    <Text numberOfLines={2} style={styles.fullName}>
                        {this.props.firstName}{'\n'}{this.props.lastName}
                    </Text>   
                    <Text style={styles.userName}>
                        {this.props.userName}
                    </Text>
                    </View>
                </View>     
            </View>   
            <TouchableOpacity onPress={this.modalVisibleHandler}>
                <View style={styles.updateBtn}>
                    <Icon name='edit' size={30} color='white'/>  
                    <Text style={styles.updateLable}>update</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.bodyContainer}>
            <View style={styles.labelContainer}>
                <Icon name='mail-bulk' size={20}/>    
                <Text style={styles.label}>{'\t\t'}email: </Text>
                <Text style={styles.labelContent}>{'\t\t'}{this.props.email}</Text>
            </View>
            <View style={styles.labelContainer}>   
                <Icon name='phone' size={20}/>  
                <Text style={styles.label}>{'\t\t'}contact number: </Text>
                <Text style={styles.labelContent}>{'\t\t'}{this.props.contactNumber}</Text>
            </View>
            <View style={styles.labelContainer}>   
                <Icon name='map' size={20}/>  
                <Text style={styles.label}>{'\t\t'}saved deliver address: </Text>
            </View>
            <TouchableOpacity>
                <View style={styles.addressContainer}>
                <Text style={styles.address}>0779115739 </Text>
                <TouchableOpacity>
                    <View style={styles.deleteBtn}>
                    <Icon name='times-circle' size={20}/>  
                    </View>
                </TouchableOpacity>
                </View>
            </TouchableOpacity>
            </View>    
            </ScrollView>
        );
    }
}
const shadow = {
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    shadowRadius: 8,
  };

const styles = StyleSheet.create({
    shadow: {
        marginTop:5,
        //marginHorizontal:18,
        marginLeft: 10,
        flexDirection:'row',
        justifyContent: 'space-evenly',
        height:'100%'
    },
    thumbnail:{
        width:'50%', 
        height:'30%', 
        marginLeft:'6%',
        borderRadius:100
    },
    nameContainer:{
        marginTop:5,
        marginHorizontal:10,
        alignContent: 'center',
        justifyContent: 'center',
        width: '50%',
        
    },
    fullName:{
        fontSize:25,
        fontWeight:'bold',
        
    },
    userName:{
        fontSize:15,
        //fontWeight:'bold',
        fontStyle: 'italic'
    },
    content:{
        //marginTop:50,
        //marginLeft:25,
        //position:'absolute' 
    },
    headerContainer: {
        //flex: 1,
        //justifyContent: 'space-between',
        //alignContent: 'space-between',
        //borderWidth:2,
        //width:'90%',
        height:150,
        borderRadius:50,
        marginTop:10,
        marginBottom: 10,
        padding: 5,
        marginHorizontal:'5%',
        backgroundColor: '#E0B743'
    },
    bodyContainer:{
        marginTop:10,
        marginBottom: 10,
        padding: 5,
        marginHorizontal:'5%',
        borderRadius: 2,
        borderWidth: 2,
        borderColor: 'black'
    },
    label:{
        //fontVariant: 'small-caps',
        textTransform: 'uppercase',
        fontStyle: 'italic',
        fontSize: 16,
    },
    labelContent:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    labelContainer:{
        flexDirection: 'row',
        padding: 5,
        marginLeft: 20
    },
    addressContainer:{
        marginTop: 5,
        paddingLeft: '20%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        alignItems: 'center'
    },
    address:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    deleteBtn:{

    },
    modal: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        //flex: 1,
        padding: 10,
        //height: 200,
        justifyContent: 'flex-start',
        margin: 0,
    },
    imageModal: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        //flex: 1,
        padding: 10,
        //height: 200,
        justifyContent: 'flex-start',
        margin: 0,
        alignItems: 'center'
    },
    updateBtn:{
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 40,
        //paddingLeft: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#61a7c9',
        width: '30%',
        height: 40,
        padding: 8,
        borderRadius: 30,
        borderWidth:2,

    },
    updateLable:{
        //paddingLeft: 20,
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    cameraBtn:{
        marginLeft: 90,
    }
})

const mapStateToProps = state => {
    return {
        isLoading: state.ui.isLoading,
        userName: state.customers.loggedCustomerUserName,
        id: state.customers.loggedCustomerCustomerId,
        firstName: state.customers.loggedCustomerFirstName,
        lastName: state.customers.loggedCustomerLastName,
        email: state.customers.loggedCustomerEmail,
        contactNumber: state.customers.loggedCustomerContactNumber,
        lastReportedLocation: state.customers.loggedCustomerLastReportedLocation,
        deliveryAddresses: state.customers.loggedCustomerDeliveryAddresses,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        // onAddBill: (billName, amount, dueDate, userEmail) => dispatch(addBill(billName, amount, dueDate, userEmail)),
        // onStartAddBill: () => dispatch(startAddBill()),
        // onLoadBills: () => dispatch(getBills()),
        // onLoadUserBills: (email) => dispatch(getUserBills(email))
        onUpdateCustomer: (userName,firstName,lastName,email,contactNo,lastReportedLocation,deliveryAddresses) => dispatch (updateLoggedCustomer(userName,firstName,lastName,email,contactNo,lastReportedLocation,deliveryAddresses)),
        onUpdateAvatar: (image) => dispatch (updateAvatar(image))
    }
}

//export default UtilityForm;
export default connect(mapStateToProps, mapDispatchToProps) (CustomerProfile);