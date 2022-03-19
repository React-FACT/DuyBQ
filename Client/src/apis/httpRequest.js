import axios from 'axios';
import { getToken } from './getToken';
//Configuration Instance HttpRequest By Axios
// Setup options for axios

const httpConfig = {
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 8000,
};
const httpRequest = axios.create(httpConfig);

httpRequest.interceptors.request.use((config) => {
    if (!config.url.match('auth/')) {
        config.headers['Authorization'] = `Bearer ${getToken()}`;
    }
    return config;
});

httpRequest.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        if (error.response.status === 401) {
            window.location.replace('/login');
        }
    }
);

export { httpRequest };