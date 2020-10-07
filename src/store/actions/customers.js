import { uiStartLoading, uiStopLoading, authGetToken } from './index'
import {  DELETE_CUSTOMER, SET_CUSTOMERS, REMOVE_CUSTOMER, CUSTOMER_ADDED, START_ADD_CUSTOMER,SEARCH_CUSTOMER,STOP_SEARCH_CUSTOMER, LOGIN_CUSTOMER, LOGOUT_CUSTOMER, SELECT_CUSTOMERS, CLEAR_SELECT_CUSTOMERS } from './actionType'
import { Form } from 'native-base'


export const signup = (signupData,nav) => {
    return dispatch => {
        //console.log(locationData);
        fetch('http://192.168.8.111:3300/customer/signup',{
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
            nav.navigation.push('CustomerHome',{
                user: parsedRes
            })
        })
    }  
}

export const getLoggedCustomer = () => {
    console.log('in getting logged customer')
    return (dispatch) =>{
    dispatch(authGetToken())
    .catch(() =>{
        alert('No valid token found')
    })
    .then(token =>{
        console.log('token from auth get',token)
        let url = 'http://192.168.8.111:3300/customer/me'
        return fetch(url, {
            method: "GET",
            headers: {
            "Authorization" : "Bearer "+token
            },
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
            lastReportedLocation: parsedRes.lastReportedLocation,
            deliveryAddresses: parsedRes.deliveryAddresses
        }
        console.log('loding data')
        dispatch(customerLogIn(customer))
    })
    .catch(err => {
        alert('Something went wrong, sorry :/')
        console.log(err)
    })
  }
  }

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
        let url = 'http://192.168.8.111:3300/customer'
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
        console.log('loding data')
        dispatch(customerLogIn(customer))
    })
    .catch(err => {
        alert('Something went wrong, sorry :/')
        console.log(err)
    })
  }
  }

  export const updateAvatar = (image) => {
    console.log('in update avatar customer')
    return (dispatch) =>{
    dispatch(authGetToken())
    .catch(() =>{
        alert('No valid token found')
    })
    .then(token =>{
        console.log('token from auth get',token)
        let url = 'http://192.168.8.111:3300/customer/avatar'
        //console.log(image)
        const data = new FormData()
        data.append(
            'upload' , image
        )
        console.log('image ',data)
        return fetch(url, {
            method: "POST",
            headers: {
            Authorization : "Bearer "+token,
            Accept: 'application/json',
			'Content-Type': 'multipart/form-data;',
            },
            body: JSON.stringify(data)
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
    }
  }