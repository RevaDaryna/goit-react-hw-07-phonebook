import axios from 'axios';


const instance = axios.create({baseURL:`https://64eb4209e51e1e82c5772588.mockapi.io/contacts`})

    export const fetchContacts  = async () => {
        const {data} = await instance('contacts');
        return data; 
    }
    export const addContacts  = async (body) => {
        const {data} = await instance.post('contacts', body);
        return data; 
    }
    export const deleteContacts  = async (contactId) => {
        const {data} = await instance.delete(`contacts/${contactId}`);
        return data; 
    }