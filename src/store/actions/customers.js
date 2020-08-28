import { uiStartLoading, uiStopLoading, authGetToken } from './index'
import {  DELETE_CUSTOMER, SET_CUSTOMERS, REMOVE_CUSTOMER, CUSTOMER_ADDED, START_ADD_CUSTOMER,SEARCH_CUSTOMER,STOP_SEARCH_CUSTOMER, LOGIN_CUSTOMER, LOGOUT_CUSTOMER, SELECT_CUSTOMERS, CLEAR_SELECT_CUSTOMERS } from './actionType'


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

export const getLoggedCustomerProfile = () => {
    return dispatch => {
        //console.log(locationData);
        fetch('http://192.168.8.111:3300/customer',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                "Authorization" : "Bearer "+token
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
    console.log('in user get products',email)
    return (dispatch) =>{
    dispatch(authGetToken())
    .catch(() =>{
        alert('No valid token found')
    })
    .then(token =>{
        //console.log(token)
        return fetch(`https://list1-9090.firebaseio.com/products.json?auth=`+token)
    })
    .then(res =>  {
      if(res.ok){
        return res.json()
      }
      else{
        throw (new Error())
      }
    })
    .then(parsedRes => {
        let products = [] 
        for (let key in parsedRes){
            products.push({
                ...parsedRes[key],
                image:{
                    uri: parsedRes[key].image
                } ,
                key:key
            })
        }
        products = products.filter(item => item.sharedUsers.find(shareEmail => {
          //console.log(id, userId, id.includes(userId))
          return shareEmail.includes(email)
        }));
        console.log('loding data')
        dispatch(setProducts(products))
    })
    .catch(err => {
        alert('Something went wrong, sorry :/')
        console.log(err)
    })
  }
  }