import axios from 'axios';
//Configuration Instance HttpRequest By Axios
// Setup options for axios

const getToken = () => {
   return localStorage.getItem('token');
};

const httpConfig = {
   baseURL: process.env.REACT_APP_API_URL,
   timeout: 6000,
   headers: {
      Authorization: `Bearer ${getToken()}`,
   },
};

const httpRequest = axios.create(httpConfig);

httpRequest.interceptors.response.use(
   function (response) {
      return response;
   },
   function (error) {
      if (error.response.status === 401) {
         window.location.replace('/login');
      }
   }
);

export { httpRequest };
