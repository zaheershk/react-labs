import { GET_ALL_TICKETS, GET_USER_TICKETS, SELECTED_TICKET, UPDATE_TABLE_ENTRIES } from '../types';

const initialState = {
    userTickets: [],
    allTickets: [],
    selectedTicket: null,
    entries: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_TICKETS:
            return {
                ...state,
                allTickets: action.payload
            };
        case GET_USER_TICKETS:
            return {
                ...state,
                userTickets: action.payload
            };
        case SELECTED_TICKET:
            return {
                ...state,
                selectedTicket: action.payload
            };
        case UPDATE_TABLE_ENTRIES:
            return {
                ...state,
                entries: action.payload
            };
        default:
            return state;
    };
};