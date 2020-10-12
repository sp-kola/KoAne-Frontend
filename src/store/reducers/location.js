import {
    SHARE_LOCATION, 
    GET_ORDER_LOCATIONS, 
    DELETE_LOCATION, 
    GET_SAVED_LAST_LOCATION, 
    GET_SAVED_LOCATIONS, 
    GET_OTHER_TYPE_USERS_LOCATION, 
    GET_SAME_TYPE_USERS_LOCATION} from '../actions/actionType'

const initialState = {
    currentLocationOfUser: [],
    savedLocationsofUser: [],
    type: [],
    sameTypeUsersLocations: [],
    otherTypeUsersLocations: [],
    orders: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SHARE_LOCATION:
            return state;
        case GET_SAVED_LOCATIONS:
            return{
                ...state,
                savedLocations: action.locations
            }
        case GET_SAVED_LAST_LOCATION:
            console.log('saving location', action.location)
            return{
                ...state,
                currentLocationOfUser: action.location
            }
        case GET_SAME_TYPE_USERS_LOCATION:
            return{
                ...state,
                sameTypeUsersLocations: action.locations
            }
        case GET_OTHER_TYPE_USERS_LOCATION:
            return{
                ...state,
                otherTypeUsersLocations: action.locations
            }
        case GET_ORDER_LOCATIONS:
            return{
                ...state,
                orders: action.orders
            }  
        case DELETE_LOCATION:
            return {
                ...state,
                currentLocationOfUser: []
            } 
        default: 
            return state;
    }
}

export default reducer;