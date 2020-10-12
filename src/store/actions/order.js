import { SET_ORDER, CLEAR_ORDER } from './actionType'
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
          .then(parsedRes => {
              console.log(parsedRes)
              // nav.navigation.push('CustomerSideScreen',{
              //     user: parsedRes
              // })
          })
      };
      
}