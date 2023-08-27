import axios from 'axios';

const BASE_URL = 'https://64eb4209e51e1e82c5772588.mockapi.io/contacts/';



export const requestContacts = async () => {
    const response = await axios.get(`${BASE_URL}/contacts`);
    
    return response.data;
}

export const postContact = async (body) => {
    const response = await axios.post(`${BASE_URL}/contacts`, body);

    return response.data;
}

export const delContact = async (id) => {
    const response = await axios.delete(`${BASE_URL}/contacts/${id}`);

    return response.data;
}