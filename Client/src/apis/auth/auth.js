import { httpRequest } from '../httpRequest';

const LOGIN_URL = 'auth/login';

export const login = (payload) => {
    return httpRequest.post(LOGIN_URL, payload).then((res) => res.data);
};