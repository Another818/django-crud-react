import axios from 'axios';


const backendUrl = process.env.NODE_ENV.trim() === "production"
? "https://django-crud-react-production-d07b.up.railway.app"
: "http://localhost:8000";


const clientApi = axios.create({
    baseURL: `${backendUrl}/datos/api/v1/clientes/`,
});


export const getAllClient = () => clientApi.get('/');

export const getClient = (ci) => clientApi.get(`/${ci}/`);

export const createClient = (client) =>  clientApi.post('/', client);

export const deleteClient = (ci) =>  clientApi.delete(`/${ci}`);

export const updateClient = (ci, client) =>  clientApi.put(`/${ci}/`, client);