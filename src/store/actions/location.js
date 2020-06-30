import {SHARE_LOCATION} from './actionType'

export const shareLocation = (lat,lon) => {
    return dispatch => {
        const locationData = {
            owner : "5ef9a843a60194f9cc392ea2",
            lattitude: lat,
            longitude: lon
        }
        console.log(locationData);
        fetch('http://192.168.8.162:3300/location/create',{
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
        .then(res => res.json())
        .then(parsedRes => {
            console.log(parsedRes)
            
        })
    }   
}

export const setLocation = (location) => {
    return { 
        type: SHARE_LOCATION,
        location: location
    }
}