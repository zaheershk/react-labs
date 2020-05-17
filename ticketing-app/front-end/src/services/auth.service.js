import axios from 'axios';

const api_endpoint = 'http://localhost:4000';
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

export const signUpUser = async (userData) => {
    const response = await axios.post(`${api_endpoint}/register`, userData, config);
    return response;
};

export const signInUser = async (userData) => {
    const response = await axios.post(`${api_endpoint}/login`, userData, config);
    return response;
};