import { GET_ALL_TICKETS, GET_USER_TICKETS, SELECTED_TICKET, UPDATE_TABLE_ENTRIES, SET_ERROR } from '../types';
import { getAllTickets } from '../../services/ticket.service';

export const allTickets = () => async dispatch => {
    try {
        const allTickets = await getAllTickets();
        const { tickets } = allTickets.data;
        dispatch({
            type: GET_ALL_TICKETS,
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

export const selectedTicket = ticket => async dispatch => {
    dispatch({
        type: SELECTED_TICKET,
        payload: ticket
    });
};

export const clearSelectedTicket = () => async dispatch => {
    dispatch({
        type: SELECTED_TICKET,
        payload: null
    });
};

export const updateTableEntries = entryNumber => async dispatch => {
    dispatch({
        type: UPDATE_TABLE_ENTRIES,
        payload: entryNumber
    });
};