import {AUTH_SET_TOKEN, AUTH_REMOVE_TOKEN} from "../actions/actionType"

const initialState = {
    token: null,
    userType: null,
    email: null,
    userName: null,
    id: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case AUTH_SET_TOKEN: 
            return{
                ...state,
                token: action.token,
                userType: action.userType,
                email: action.email,
                userName: action.userName,
                id: action.id
            }
        case AUTH_REMOVE_TOKEN: 
            return{
                ...state,
                token: null,
                userType: null,
                email: null,
                userName: null,
                id: null
            }    
        default:
            return state;    
    }
}

export default reducer;