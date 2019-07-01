import {GET_CART} from '../actions/type';

export default function(state = {listproduct:[]}, action ) {
    switch(action.type) {
        case GET_CART:{
            return {
                listproduct: action.payload.cartProduct,
            }
        }
        default: 
            return state;
    }
}