import axios from 'axios';

const api_endpoint = 'http://localhost:4000';
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

export const addTicket = async (ticketData) => {
    const response = await axios.post(`${api_endpoint}/tickets/add`, ticketData, config);
    return response;
};

export const getAllTickets = async () => {
    const response = await axios.get(`${api_endpoint}/tickets`, config);
    return response;
}

export const editTicket = async (id, ticketData) => {
    const response = await axios.put(`${api_endpoint}/tickets/${id}`, ticketData, config);
    return response;
}

export const deleteTicket = async (id) => {
    const response = await axios.delete(`${api_endpoint}/tickets/${id}`, config);
    return response;
}

export const closeTicket = async (id) => {
    const response = await axios.put(`${api_endpoint}/tickets/${id}/close`, config);
    return response;
}