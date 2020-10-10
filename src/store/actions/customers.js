import { uiStartLoading, uiStopLoading, authGetToken } from './index'
import Geocoder from 'react-native-geocoding';
import {  DELETE_CUSTOMER, SET_CUSTOMERS, REMOVE_CUSTOMER, CUSTOMER_ADDED, START_ADD_CUSTOMER,SEARCH_CUSTOMER,STOP_SEARCH_CUSTOMER, LOGIN_CUSTOMER, LOGOUT_CUSTOMER, SELECT_CUSTOMERS, CLEAR_SELECT_CUSTOMERS } from './actionType'
import { Form } from 'native-base'
import RNFetchBlob from 'rn-fetch-blob'


export const signup = (signupData,nav) => {
    return dispatch => {
        //console.log(locationData);

        fetch('http://192.168.1.100:3300/customer/signup',{

            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(signupData)
            
        })
        .catch(err => console.log(err))
        .then(res => {
            return res.json()
            console.log(res)
        })
        .then(parsedRes => {
            console.log(parsedRes)
            nav.navigation.push('CustomerSideScreen',{
                user: parsedRes
            })
        })
    }  
}

export const getLoggedCustomer = () => {
  console.log('in getting logged customer');
  return dispatch => {
    dispatch(authGetToken())
    .catch(() =>{
        alert('No valid token found')
    })
    .then(token =>{
        console.log('token from auth get',token)

        let url = 'http://192.168.1.100:3300/customer/me'
        return fetch(url, {
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + token,
          },
        });
      })
      .then(res => {
        if (res.ok) {
          console.log('res', res);
          return res.json();
        } else {
          throw new Error();
        }
      })
      .then(parsedRes => {
        console.log('returned data', parsedRes);
        let customer = {
          _id: parsedRes._id,
          userName: parsedRes.userName,
          firstName: parsedRes.firstName,
          lastName: parsedRes.lastName,
          email: parsedRes.email,
          contactNo: parsedRes.contactNo,
          lastReportedLocation: parsedRes.lastReportedLocation,
          deliveryAddresses: parsedRes.deliveryAddresses,
        };
        console.log('loding data');
        dispatch(customerLogIn(customer));
      })
      .catch(err => {
        alert('Something went wrong, sorry :/');
        console.log(err);
      });
  };
};

  export const updateLoggedCustomer = (userName,firstName,lastName,email,contactNo,lastReportedLocation,deliveryAddresses) => {
    const updateData = {
        userName:userName,
        firstName:firstName,
        lastName:lastName,
        email:email,
        contactNo:contactNo,
        //lastReportedLocation:lastReportedLocation,
        deliveryAddresses:deliveryAddresses
    }
    console.log('in update logged customer')
    return (dispatch) =>{
    dispatch(authGetToken())
    .catch(() =>{
        alert('No valid token found')
    })
    .then(token =>{
        console.log('token from auth get',token)
        let url = 'http://192.168.1.3:3300/customer'
        return fetch(url, {
            method: "PATCH",
            headers: {
            Authorization : "Bearer "+token,
            Accept: 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
    })
    .then(res =>  {
      if(res.ok){
        console.log('res',res)
        return res.json()
      }
      else{
        throw (new Error())
      }
    })
    .then(parsedRes => {
        console.log('returned data',parsedRes)
        let customer = {
            _id : parsedRes._id,
            userName: parsedRes.userName,
            firstName: parsedRes.firstName,
            lastName: parsedRes.lastName,
            email: parsedRes.email,
            contactNo: parsedRes.contactNo,
            //lastReportedLocation: parsedRes.lastReportedLocation,
            deliveryAddresses: parsedRes.deliveryAddresses
        }
      })
      .then(parsedRes => {
        console.log('returned data', parsedRes);
        let customer = {
          _id: parsedRes._id,
          userName: parsedRes.userName,
          firstName: parsedRes.firstName,
          lastName: parsedRes.lastName,
          email: parsedRes.email,
          contactNo: parsedRes.contactNo,
          lastReportedLocation: parsedRes.lastReportedLocation,
          deliveryAddresses: parsedRes.deliveryAddresses,
        };
        console.log('loding data');
        dispatch(customerLogIn(customer));
      })
      .catch(err => {
        alert('Something went wrong, sorry :/');
        console.log(err);
      });
  };
};

export const updateAvatar = (image) => {
    console.log('in update avatar customer')
    return (dispatch) =>{
    dispatch(authGetToken())
    .catch(() =>{
        alert('No valid token found')
    })
    .then(token =>{
        console.log('token from auth get',token)
        let url = 'http://192.168.1.3:3300/customer/upload'
        const data = new FormData();
        data.append('name', 'avatar');
        data.append('fileData', {
         uri : image.uri,
         type: image.type,
         name: image.fileName
        });
        const config = {
         method: 'POST',
         body:data,
         headers: {
            //'Authorization' : "Bearer "+token,
            //'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
         },
         
        };
        return fetch(url, config)
    })
    .then(res =>  {
      if(res.ok){
        console.log('res',res)
        return res.json()
      }
      else{
        throw (new Error())
      }
    })
    .then(parsedRes => {
        console.log('returned data',parsedRes)
        // let customer = {
        //     _id : parsedRes._id,
        //     userName: parsedRes.userName,
        //     firstName: parsedRes.firstName,
        //     lastName: parsedRes.lastName,
        //     email: parsedRes.email,
        //     contactNo: parsedRes.contactNo,
        //     //lastReportedLocation: parsedRes.lastReportedLocation,
        //     deliveryAddresses: parsedRes.deliveryAddresses
        // }
        // console.log('loding data')
        // dispatch(customerLogIn(customer))
    })
    .catch(err => {
        alert('Something went wrong, sorry :/')
        console.log(err)
    })
  }
  }



  export const customerLogIn = (customer) => {
    console.log('in user login', customer.userName)
    // let savedAddresses = null
    // if(customer.deliveryAddresses){
    //     var addressComponent = "Hello"
    //     savedAddresses = customer.deliveryAddresses.map((data) => {
    //         Geocoder.from(data.position[0], data.position[1])
    //         .then(json => {
    //             //console.log("JSON", json)
    //             addressComponent = json.results[0].formatted_address;
    //             console.log(addressComponent);
    //             return addressComponent
    //         })
    //         .catch(error => {console.warn(error)
    //             return "N/A"
    //         });
            
    //     })
    // }
    // console.log('still in action', savedAddresses)
    return{
        type: LOGIN_CUSTOMER,
        id: customer._id,
        userName: customer.userName,
        firstName: customer.firstName,
        lastName: customer.lastName,
        email: customer.email,
        contactNo: customer.contactNo,
        //lastReportedLocation: customer.lastReportedLocation,
        deliveryAddresses: customer.deliveryAddresses,
        //savedAddresses: savedAddresses
    }
  }
