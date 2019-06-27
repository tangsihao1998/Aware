import axios from 'axios';
import { GET_ERRORS , SET_CURRENT_USER , LOG_OUT} from './type';
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
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data.error
        });
    });
}

export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: {
            user: decoded,
            error: ''
        }
    }
}

export const LogOut = () => dispatch =>{
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch({
        type: LOG_OUT,
        payload: {
            user:''
        }
    });
}
