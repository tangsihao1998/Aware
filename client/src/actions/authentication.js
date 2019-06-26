import axios from 'axios';
import { GET_ERRORS , GET_DATA_LOG , GET_DATA_RES , SET_CURRENT_USER} from './type';
import setAuthToken from '../helpers/API';
import jwt_decode from 'jwt-decode';

export const Register = (user) => dispatch => {
    axios.post('http://localhost:4000/register', user)
    .then(res => {

        console.log(res.data)
    })
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data.error
        });
    });
}

export const LogIn = (user) => dispatch => {
    axios.post('http://localhost:4000/login', user)
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