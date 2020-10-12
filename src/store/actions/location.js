import { 
    SHARE_LOCATION, 
    GET_ORDER_LOCATIONS,
    GET_OTHER_TYPE_USERS_LOCATION,
    GET_SAME_TYPE_USERS_LOCATION,
    DELETE_LOCATION,
    GET_SAVED_LAST_LOCATION,
    GET_SAVED_LOCATIONS,
    UPDATE_LOCATION
} from './actionType'
import {authGetToken} from './index'

export const shareLocation = (lat,lon) => {
    console.log('starting location sharing')
    return dispatch => {
        dispatch(authGetToken())
        .catch(() => {
            alert('No valid token found')
        })
        .then(token => {
            let location = {
                lattitude: lat,
                longitude: lon
            }
            let url = 'http://192.168.1.3:3300/location/'
            return fetch(url,{
                method: "POST",
                headers:{
                    "Authorization": "Bearer "+token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(location)
            })
        })
        .then(res => {
            if(res.ok){
                console.log('results recieved')
                return res.json()
            }
            else{
                throw (new Error())
            }
        })
        .then(parsedRes => {
            console.log("returned data", parsedRes)
            let location = parsedRes.position
            dispatch(setCurrentLocation(location))
        })
        .catch(err => {
            alert('Something went wrong, sorry :/')
            console.log(err)
        })
    }
}

export const updateCustomerLocation = () => {
    return dispatch => {
        dispatch(authGetToken())
        .catch(() => {
            alert('No valid token found')
        })
        .then(token => {
            let url = ''
            return fetch(url,{
                method: "PATCH",
                headers:{
                    "Authorization": "Bearer "+token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            })
        })
        .then(res => {
            if(res.ok){
                console.log('results recieved')
                return res.json()
            }
            else{
                throw (new Error())
            }
        })
        .then(parsedRes => {
            console.log("returned data", parsedRes)
            let location = {
                
            }
            dispatch(setCurrentLocation(location))
        })
        .catch(err => {
            alert('Something went wrong, sorry :/')
            console.log(err)
        })
    }
}

export const deleteCustomerLocation = () => {
    return dispatch => {
        dispatch(authGetToken())
        .catch(() => {
            alert('No valid token found')
        })
        .then(token => {
            let url = ''
            return fetch(url,{
                method: "DELETE",
                headers:{
                    "Authorization": "Bearer "+token,
                    //Accept: 'application/json',
                    //'Content-Type': 'application/json'
                },
            })
        })
        .then(res => {
            if(res.ok){
                console.log('results recieved')
                return res.json()
            }
            else{
                throw (new Error())
            }
        })
        .then(parsedRes => {
            console.log("returned data", parsedRes)
            let location = {
                
            }
            dispatch(setCurrentLocation(location))
        })
        .catch(err => {
            alert('Something went wrong, sorry :/')
            console.log(err)
        })
    }    
}

export const getCustomerLastSavedLocation = () =>{
    return dispatch => {
        dispatch(authGetToken())
        .catch(() => {
            alert('No valid token found')
        })
        .then(token => {
            let url = 'http://192.168.1.3:3300/location/user/'
            return fetch(url,{
                method: "GET",
                headers:{
                    "Authorization": "Bearer "+token
                },
            })
        })
        .then(res => {
            if(res.ok){
                console.log('results recieved')
                return res.json()
            }
            else{
                throw (new Error())
            }
        })
        .then(parsedRes => {
            console.log("returned data", parsedRes[0])
            let location = parsedRes[0].position
            console.log('location', location)
            dispatch(setCurrentLocation(location))
        })
        .catch(err => {
            alert('Something went wrong, sorry :/')
            console.log(err)
        })
    }
}

export const getCustomerSavedLocations = () =>{
    return dispatch => {
        dispatch(authGetToken())
        .catch(() => {
            alert('No valid token found')
        })
        .then(token => {
            let url = ''
            return fetch(url,{
                method: "GET",
                headers:{
                    "Authorization": "Bearer "+token
                },
            })
        })
        .then(res => {
            if(res.ok){
                console.log('results recieved')
                return res.json()
            }
            else{
                throw (new Error())
            }
        })
        .then(parsedRes => {
            console.log("returned data", parsedRes)
            let locations = {
                
            }
            dispatch(setPreviousLocatoins(locations))
        })
        .catch(err => {
            alert('Something went wrong, sorry :/')
            console.log(err)
        })
    }
}

export const getSameTypeUsersLocations = () =>{
    return dispatch => {
        dispatch(authGetToken())
        .catch(() => {
            alert('No valid token found')
        })
        .then(token => {
            let url = ''
            return fetch(url,{
                method: "GET",
                headers:{
                    "Authorization": "Bearer "+token
                },
            })
        })
        .then(res => {
            if(res.ok){
                console.log('results recieved')
                return res.json()
            }
            else{
                throw (new Error())
            }
        })
        .then(parsedRes => {
            console.log("returned data", parsedRes)
            let locations = {
                
            }
            dispatch(setSameTypeUsersLocations(locations))
        })
        .catch(err => {
            alert('Something went wrong, sorry :/')
            console.log(err)
        })
    }
}

export const getOtherTypeUsersLocations = () =>{
    return dispatch => {
        dispatch(authGetToken())
        .catch(() => {
            alert('No valid token found')
        })
        .then(token => {
            let url = ''
            return fetch(url,{
                method: "GET",
                headers:{
                    "Authorization": "Bearer "+token
                },
            })
        })
        .then(res => {
            if(res.ok){
                console.log('results recieved')
                return res.json()
            }
            else{
                throw (new Error())
            }
        })
        .then(parsedRes => {
            console.log("returned data", parsedRes)
            let locations = {
                
            }
            dispatch(setOtherTypeUsersLocations(locations))
        })
        .catch(err => {
            alert('Something went wrong, sorry :/')
            console.log(err)
        })
    }
}

export const getCustomerOrders = () => {
    return dispatch => {
        dispatch(authGetToken())
        .catch(() => {
            alert('No valid token found')
        })
        .then(token => {
            let url = ''
            return fetch(url,{
                method: "PATCH",
                headers:{
                    "Authorization": "Bearer "+token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            })
        })
        .then(res => {
            if(res.ok){
                console.log('results recieved')
                return res.json()
            }
            else{
                throw (new Error())
            }
        })
        .then(parsedRes => {
            console.log("returned data", parsedRes)
            let location = {
                
            }
            dispatch(setCurrentLocation(location))
        })
        .catch(err => {
            alert('Something went wrong, sorry :/')
            console.log(err)
        })
    }
}

export const getCustomerOrdersLocation = (orders) => {
    //console.log(orders)
    return{
        type: GET_ORDER_LOCATIONS,
        orders: orders
    }
}

export const setLocation = (location) => {
    return { 
        type: SHARE_LOCATION,
        location: location
    }
}

export const setCurrentLocation = (location) => {
    return {
        type: GET_SAVED_LAST_LOCATION,
        location: location
    }
}

export const setPreviousLocatoins = (locations) => {
    return{
        type: GET_SAVED_LOCATIONS,
        locations: locations
    }
}

export const setSameTypeUsersLocations = (locations) => {
    return {
        type: GET_SAME_TYPE_USERS_LOCATION,
        locations: locations
    }
}

export const setOtherTypeUsersLocations = (locations) => {
    return {
        type: GET_OTHER_TYPE_USERS_LOCATION,
        locations: locations
    }
}

export const resetLocation = () => {
    return {
        type: DELETE_LOCATION
    }
}