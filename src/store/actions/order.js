import { SET_ORDER, CLEAR_ORDER, CUSTOMER_ORDERS } from './actionType'
import { uiStartLoading, uiStopLoading, authGetToken } from './index'

export const setCart = (cart, price) => {
    return {
        type: SET_ORDER,
        cart: cart,
        price: price
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_ORDER
    }
}

export const createOrder = (orderData) => {
    return dispatch => {
        dispatch(authGetToken())
        .catch(() =>{
            alert('No valid token found')
        })
        .then(token =>{
            console.log('token from auth get',token)
    
            let url = 'http://192.168.1.3:3300/order/'
            return fetch(url, {
              method: 'POST',
              headers: {
                Authorization: 'Bearer ' + token,
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(orderData)
            });
          })
          .catch(err => console.log(err))
          .then(res => {
              return res.json()
              console.log(res)
          })
          .then(async(parsedRes) => {
              console.log(parsedRes)
              await dispatch(getCustomerOrderDetails())
              // nav.navigation.push('CustomerSideScreen',{
              //     user: parsedRes
              // })
          })
      };
      
}

export const getCustomerOrderDetails = () => {
    return dispatch => {
        dispatch(authGetToken())
        .catch(() =>{
            alert('No valid token found')
        })
        .then(token =>{
            console.log('token from auth get',token)
    
            let url = 'http://192.168.1.3:3300/order/customerOrders'
            return fetch(url, {
              method: 'GET',
              headers: {
                Authorization: 'Bearer ' + token,
              },
            });
          })
          .catch(err => console.log(err))
          .then(res => {
              return res.json()
              console.log(res)
          })
          .then(async(parsedRes) => {
            console.log('returned data', parsedRes);
            let orders = [] 
            for (let _id in parsedRes){
                orders.push({
                    ...parsedRes[_id],
                    key:_id
                })
            }
            console.log('loding data');
            await dispatch(setCustomerOrders(orders))
          })
          .catch(err => {
            alert('Something went wrong, sorry :/');
            console.log(err);
          });
      };
      
}

export const cancelOrder = (id) => {

    return dispatch => {
        dispatch(authGetToken())
        .catch(() =>{
            alert('No valid token found')
        })
        .then(token =>{
            console.log('token from auth get',token)
    
            let url = 'http://192.168.1.3:3300/order/delete/'+id
            return fetch(url, {
              method: 'DELETE',
              headers: {
                Authorization: 'Bearer ' + token,
              },
            
            });
          })
          .catch(err => console.log(err))
          .then(res => {
              return res.json()
              console.log(res)
          })
          .then(async(parsedRes) => {
              console.log(parsedRes)
              await dispatch(getCustomerOrderDetails())
          })
          .catch(err => {
            alert('Something went wrong, sorry :/');
            console.log(err);
          });
      };

}

export const setCustomerOrders = (orders) => {
    return {
        type: CUSTOMER_ORDERS,
        orders: orders
    }
}