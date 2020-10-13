import { SET_ORDER, CLEAR_ORDER, CUSTOMER_ORDERS }  from '../actions/actionType'

const initialState = {
    cart : [],
    price : 0,
    customerOrders: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case CUSTOMER_ORDERS: {
            console.log('setting orders')
            return{
                ...state,
                customerOrders: action.orders
            }
        }

        case SET_ORDER: 
            console.log('setting cart', state.cart)
            return{
                ...state,
                cart: action.cart,
                price: action.price
            }

        case CLEAR_ORDER: 
        console.log('clearing cart')
        return{
            ...state,
            cart: [],
            price: 0
        }    

        default:
            return state;
    }
};

export default reducer;