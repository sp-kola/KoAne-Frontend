import {SHARE_LOCATION, GET_CUSTOMER_ORDER_LOCATION} from './actionType'

export const shareLocation = (lat,lon) => {
    return dispatch => {
        const locationData = {
            owner : "5efce9fae4d307d108f16ad2",
            lattitude: lat,
            longitude: lon
        }
        console.log(locationData);
        fetch('http://192.168.1.2:3300/location/create',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                owner : "5ef9a843a60194f9cc392ea2",
                lattitude: lat,
                longitude: lon
            })
            
        })
        .catch(err => console.log(err))
        .then(res => {
            res.json()
            console.log(res)
        })
        .then(parsedRes => {
            console.log(parsedRes)
            
        })
    }   
}

// export  const getCustomerOrders = async () => {
//     try{
//         let res = await fetch('http://192.168.1.2:3300/order/customerOrders/5efce9fae4d307d108f16ad2')
//         let json = await res.json()
//         console.log(json.data)
//     }
//     catch(e){
//         console.log(e)
//     }
// }

export const getCustomerOrders = () => {
    return dispatch => {
        //console.log('hi')
        fetch('http://192.168.8.162:3300/order/customerOrders/5efce9fae4d307d108f16ad2',{
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
        })
        .catch(err => {
            alert('Something went wrong, sorry :/')
            console.log(err)
        })
        .then(res => {
            return res.json()
        })
        .then(parsedRes => {
            //console.log('data: ',parsedRes)
            const orders = []
            for (let _id in parsedRes){
                orders.push({
                    ...parsedRes[_id],
                    key: _id
                })
            }
            console.log('loading data')
            //console.log('orders:',orders)
            dispatch(getCustomerOrdersLocation(orders))
        })
    }
}

export const getCustomerOrdersLocation = (orders) => {
    //console.log(orders)
    return{
        type: GET_CUSTOMER_ORDER_LOCATION,
        orders: orders
    }
}

export const setLocation = (location) => {
    return { 
        type: SHARE_LOCATION,
        location: location
    }
}