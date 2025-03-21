import {GET_CART,CHECK_OUT,NEED_LOG_IN} from '../actions/type';

let list = JSON.parse(localStorage.getItem('listproduct'));

export default function(state = {listproduct:list,checkout:false}, action ) {
    switch(action.type) {
        case GET_CART:{
            return {
                listproduct: action.payload.cartProduct,
            }
        }
        case CHECK_OUT:{
            return{

            }
        }
        case NEED_LOG_IN:{
            return {
                checkout: action.payload.checkout,
                listproduct: action.payload.listproduct
            }
        }
        default: 
            return state;
    }
}