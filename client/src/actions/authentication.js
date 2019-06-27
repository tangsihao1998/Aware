import axios from 'axios';
import { GET_ERRORS , GET_DATA_LOG , GET_DATA_RES , SET_CURRENT_USER} from './type';
import { api } from '../helpers/API';
import { setAuthToken }  from '../helpers/API';
import jwt_decode from 'jwt-decode';

export const Register = (user) => dispatch => {
    api.post('/register', user)
    .then(res => {
        console.log(res.data)
        const user = {
            email: res.data.email,
            password: res.data.password,
        }
        dispatch(LogIn(user));        
    })
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data.error
        });
    });
}

export const LogIn = (user) => dispatch => {
    api.post('/login', user)
    .then(res => {
        // Save Token to Local Storage And Send state for modal
        const {token} = res.data;
        const errornull = res.data.error;
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded,errornull));
    })
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data.error
        });
    });
}

export const setCurrentUser = (decoded,errornull) => {
    return {
        type: SET_CURRENT_USER,
        payload: {
            user: decoded,
            error: errornull
        }
    }
}

// Can Do Remember Me Here