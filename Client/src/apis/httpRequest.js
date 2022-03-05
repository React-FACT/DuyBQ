import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
export const httpRequest = axios.create({
    baseURL: 'http://localhost:3300/api/v1/',
    timeout: 6000,
});