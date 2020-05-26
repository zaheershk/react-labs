import { GET_USER, GET_USER_TICKETS, SET_ERROR } from '../types';
import { getUserData } from '../../services/user.service';

export const getUser = () => async dispatch => {
    try {
        const userData = await getUserData();
        const { user } = userData.data;
        dispatch({
            type: GET_USER,
            payload: user
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

export const getUserTickets = () => async dispatch => {
    try {
        const userData = await getUserData();
        const { tickets } = userData.data.user;
        dispatch({
            type: GET_USER_TICKETS,
            payload: tickets
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