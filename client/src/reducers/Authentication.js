import { GET_ERRORS , GET_DATA_RES , SET_CURRENT_USER} from '../actions/type';
import isEmpty from '../helpers/isEmpty';

export default function(state = {error:'',isAuthenticated:false,user:''}, action ) {
    console.log("TCL: action", action)
    switch(action.type) {
        case GET_DATA_RES:
            return action.payload;
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
        default: 
            return state;
    }
}