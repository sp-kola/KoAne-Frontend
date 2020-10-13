import { SET_ORDER, CLEAR_ORDER }  from '../actions/actionType'

const initialState = {
    cart : [],
    price : 0
}

const reducer = (state = initialState, action) => {
    switch(action.type){

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