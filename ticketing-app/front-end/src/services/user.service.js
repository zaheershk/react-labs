import axios from 'axios';

const api_endpoint = 'http://localhost:4000';
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

export const getUserData = async () => {
    const response = await axios.get(`${api_endpoint}/user`, config);
    return response;
}