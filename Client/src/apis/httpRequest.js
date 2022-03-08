import axios from 'axios';

//Configuration Instance HttpRequest By Axios
// Setup options for axios
const httpConfig = {
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 6000,
};
const httpRequest = axios.create(httpConfig);

export { httpRequest };