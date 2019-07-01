import {GET_CART} from '../actions/type';

export default function(state = {listproduct:[]}, action ) {
    switch(action.type) {
        case GET_CART:{
            return {
                listproduct: action.payload.cartProduct,
            }
        }
        // case SET_CURRENT_USER:{
        //     return {
        //         error: action.payload.error,
        //         user: action.payload.user,
        //         isAuthenticated: !isEmpty(action.payload),
        //     }
        // }
        default: 
            return state;
    }
}