import {SHARE_LOCATION} from '../actions/actionType'

const initialState = {
    locations: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SHARE_LOCATION:
            return state;
        default: 
            return state;
    }
}

export default reducer;