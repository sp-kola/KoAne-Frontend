import {SHARE_LOCATION} from './actionType'

export const trackLocation = (userID,location) => {
    return dispatch => {
        const locationData = {
            userID : userID,
            location: location
        }
        fetch('',{
            method: 'POST',
            body: JSON.stringify(locationData)
        })
        .catch(err => console.log(err))
        .then(res => res.json())
        .then(parsedRes => {
            console.log(parsedRes)
            
        })
    }   
}

export const shareLocation = (location) => {
    return {
        type: SHARE_LOCATION,
        location: location
    }
}