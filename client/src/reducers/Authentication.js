import { GET_ERRORS , SET_CURRENT_USER , LOG_OUT } from '../actions/type';
import isEmpty from '../helpers/isEmpty';

export default function(state = {error:'',isAuthenticated:false,user:''}, action ) {
    console.log("TCL: action", action)
    switch(action.type) {
        case GET_ERRORS:
            return {   
                error: action.payload,
            }
        case SET_CURRENT_USER:{
            return {
                error: action.payload.error,
                user: action.payload.user,
                isAuthenticated: !isEmpty(action.payload),
            }
        }
        case LOG_OUT:{
            return {
                isAuthenticated: false,
                user: action.payload.user,
            }
        }
        default: 
            return state;
    }
}