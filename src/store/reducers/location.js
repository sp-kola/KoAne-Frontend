import {SHARE_LOCATION, GET_CUSTOMER_ORDER_LOCATION} from '../actions/actionType'

const initialState = {
    locations: [],
    orders: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SHARE_LOCATION:
            return state;
        case GET_CUSTOMER_ORDER_LOCATION:
            return{
                ...state,
                orders: action.orders
            }
        default: 
            return state;
    }
}

export default reducer;