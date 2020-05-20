import { AUTHENTICATE_USER, SET_ERROR } from '../types';
import { signUpUser, signInUser } from '../../services/auth.service';
import { AuthToken } from '../../utils/AuthToken';

export const createUser = userData => async dispatch => {
    try {
        const user = await signUpUser(userData);
        const { token } = user.data;
        AuthToken(token);
        dispatch({
            type: AUTHENTICATE_USER,
            payload: token
        });
    } catch (error) {
        if (error.response) {
            dispatch({
                type: SET_ERROR,
                payload: error.response.data.message
            });
        }
    }
};

export const loginUser = userData => async dispatch => {
    try {
        const user = await signInUser(userData);
        const { token } = user.data;
        AuthToken(token);
        dispatch({
            type: AUTHENTICATE_USER,
            payload: token
        });
    } catch (error) {
        if (error.response) {
            dispatch({
                type: SET_ERROR,
                payload: error.response.data.message
            });
        }
    }
};